import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState, User } from "./types";
import { RootState } from "../types";

export const state: UserState = {
	user: { id: "abc123", name: "Luc" },
};

const namespaced: boolean = true;

export const user: Module<UserState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
};
