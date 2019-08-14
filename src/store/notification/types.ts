export interface Notification {
	id?: number;
	type: string;
	message: string;
}

export interface NotificationState {
	notifications: Notification[];
}
