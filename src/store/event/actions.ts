import EventService from "@/services/EventService";
import { ActionTree } from "vuex";
import { EventState, Event } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<EventState, RootState> = {
	async createEvent({ commit, dispatch }, event: Event) {
		try {
			await EventService.postEvent(event);
			commit("ADD_EVENT", event);
			const notification = {
				type: "success",
				message: "Your event has been created!"
			};
			dispatch("notification/add", notification, { root: true });
		} catch (error) {
			const notification = {
				type: "error",
				message: "There was an error creating your event: " + error.message
			};
			dispatch("notification/add", notification, { root: true });
			throw error;
		}
	},
	async fetchEvent({ commit, getters, dispatch }, id: number) {
		const event = getters.getEventById(id);
		if (event) {
			commit("SET_EVENT", event);
			return;
		}

		try {
			const result = await EventService.getEvent(id);
			commit("SET_EVENT", result.data);
		} catch (error) {
			const notification = {
				type: "error",
				message: "There was an error fetching your event: " + error.message
			};
			dispatch("notification/add", notification, { root: true });
		}
	},
	async fetchEvents({ commit, dispatch }, { perPage, page }) {
		try {
			const result = await EventService.getEvents(perPage, page);
			commit("SET_TOTALCOUNT", parseInt(result.headers["x-total-count"], 10));
			commit("SET_EVENTS", result.data);
		} catch (error) {
			const notification = {
				type: "error",
				message: "There was an error fetching your events: " + error.message
			};
			dispatch("notification/add", notification, { root: true });
		}
	}
};
