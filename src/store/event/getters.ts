import { GetterTree } from "vuex";
import { EventState, Event } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<EventState, RootState> = {
	getEventById: (state) => (id: number) => {
		return state.events.find((event) => event.id === id);
	}
};
