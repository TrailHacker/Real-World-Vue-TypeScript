<script lang="ts">
import Vue from "vue";
import { State, Action } from "vuex-class";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import DatePicker from "vuejs-datepicker";
import { Event } from "@/store/event/types";
import { User } from "@/store/user/types";

@Component({ name: "EventCreate", components: { DatePicker } })
export default class EventCreate extends Vue {

	@Action("createEvent", { namespace: "event" }) createEvent: any;
	@State("categories") categories!: string[];
	@State("user", { namespace: "user" }) user!: User;

	times: string[];
	event: Event;

	constructor() {
		super();
		this.times = [];
		for (let i = 1; i <= 24; i++) {
			this.times.push(`${i}:00`);
		}
		this.event = this.createFreshEvent();
	}

	createFreshEvent(): Event {
		const user = this.user;
		const eventId = Math.floor(Math.random() * 10000000);
		return {
			id: eventId,
			category: "",
			organizer: user,
			title: "",
			description: "",
			location: "",
			date: "",
			time: "",
			attendees: []
		};
	}

	async submitEventData() {
		try {
			await this.createEvent(this.event);
			this.$router.push({name: "event-show", params: { id: this.event.id.toString() }});
			this.event = this.createFreshEvent();
		} catch (error) {
			// do nothing
		}
	}
}
</script>

<style scoped>
	.field {
		margin-bottom: 24px;
	}
</style>

<template>
	<div>
		<h1>Create an Event</h1>
		<form @submit.prevent="submitEventData">
			<label>Select a category</label>
			<select v-model="event.category">
				<option v-for="cat in categories" :key="cat">{{ cat }}</option>
			</select>
			<h3>Name &amp; describe your event</h3>
			<div class="field">
				<label>Title</label>
				<input v-model="event.title" type="text" placeholder="Add an event title" />
			</div>
			<div class="field">
				<label>Description</label>
				<input v-model="event.description" type="text" placeholder="Add a description" />
			</div>
			<h3>Where is your event?</h3>
			<div class="field">
				<label>Location</label>
				<input v-model="event.location" type="text" placeholder="Add a location" />
			</div>
			<h3>When is your event?</h3>
			<div class="field">
				<label>Date</label>
				<datepicker v-model="event.date" placeholder="Select a date" />
			</div>
			<div class="field">
				<label>Select a time</label>
				<select v-model="event.time">
					<option v-for="time in times" :key="time">{{ time }}</option>
				</select>
			</div>
			<input type="submit" class="button -fill-gradient" value="Submit" />
		</form>
	</div>
</template>
