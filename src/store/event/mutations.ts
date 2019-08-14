import { MutationTree } from "vuex";
import { EventState, Event } from "./types";

export const mutations: MutationTree<EventState> = {
	ADD_EVENT(state, event: Event) {
		state.events.push(event);
	},
	SET_EVENT(state, event: Event) {
		state.event = event;
	},
	SET_EVENTS(state, events: Event[]) {
		state.events = events;
	},
	SET_TOTALCOUNT(state, count: number) {
		state.totalCount = count;
	}
};
