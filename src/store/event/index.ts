import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Event, EventState } from "./types";
import { RootState } from "../types";

export const state: EventState = {
	events: [],
	event: {} as Event,
	totalCount: 0,
};

const namespaced: boolean = true;

export const event: Module<EventState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
};
