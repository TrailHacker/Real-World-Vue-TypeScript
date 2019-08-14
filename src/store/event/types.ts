import { User } from "@/store/user/types";

export interface Event {
	id: number;
	category: string;
	organizer: User;
	title: string;
	description: string;
	location: string;
	date: string;
	time: string;
	attendees: string[];
}

export interface EventState {
	events: Event[];
	event: Event;
	totalCount: number;
}
