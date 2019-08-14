import { ActionTree } from "vuex";
import { NotificationState, Notification } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<NotificationState, RootState> = {
	add({ commit }, notification: Notification) {
		commit("PUSH", notification);
	},
	remove({ commit }, notificationToRemove: Notification) {
		commit("DELETE", notificationToRemove);
	}
};
