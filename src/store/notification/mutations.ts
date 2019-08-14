import { MutationTree } from "vuex";
import { NotificationState, Notification } from "./types";

let nextId = 1;

export const mutations: MutationTree<NotificationState> = {
	PUSH(state, notification: Notification) {
		notification.id = nextId++;
		state.notifications.push(notification);
	},
	DELETE(state, notificationToRemove: Notification) {
		state.notifications = state.notifications.filter((f) => f.id !== notificationToRemove.id);
	}
};
