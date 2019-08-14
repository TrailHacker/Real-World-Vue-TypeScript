import axios from "axios";
import { Event } from "@/store/event/types";
import NProgress from "nprogress";

const apiClient = axios.create({
		baseURL: "http://localhost:3000",
		withCredentials: false,
		headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
		},
});

apiClient.interceptors.request.use((context) => {
	NProgress.start();
	return context;
});

apiClient.interceptors.response.use((response) => {
	NProgress.done();
	return response;
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
