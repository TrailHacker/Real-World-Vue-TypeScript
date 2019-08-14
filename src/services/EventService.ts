import axios from "axios";
import { Event } from "@/store/event/types";

const apiClient = axios.create({
		baseURL: "http://localhost:3000",
		withCredentials: false,
		headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
		},
});

export default class EventService {

	static getEvents(perPage: number, page: number) {
		return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
	}

	static getEvent(id: number) {
		return apiClient.get(`/events/${id}`);
	}

	static postEvent(event: Event) {
		return apiClient.post("/events", event);
	}
}
