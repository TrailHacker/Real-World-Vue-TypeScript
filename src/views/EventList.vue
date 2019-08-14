<template>
	<div>
		<h1>Events for {{ user.name }}</h1>
		<EventCard v-for="event in events" :key="event.id" :event="event" />
		<template v-if="page != 1">
			<router-link :to="{name: 'event-list', query: { page: page - 1 }}" rel="prev">
				Previous
			</router-link> | 
		</template>
		<template v-if="!isLastPage()">
			<router-link :to="{name: 'event-list', query: { page: page + 1 }}" rel="next">
				Next
			</router-link>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import EventCard from "@/components/EventCard.vue";
import { Event } from "@/store/event/types";
import { User } from "@/store/user/types";
const namespace: string = "event";

@Component({
	components: { EventCard },
})
export default class EventList extends Vue {
	@State("totalCount", { namespace }) totalCount!: number;
	@State("events", { namespace }) events!: Event[];
	@State("user", { namespace: "user" }) user!: User;
	@Action("fetchEvents", { namespace }) fetchEvents: any;

	async mounted() {
		this.fetchEvents({ perPage: 3, page: this.page });
	}

	get page(): number {
		return parseInt(this.$route.query.page as string, 10) || 1;
	}

	isLastPage(): boolean {
		return 3 * this.page >= this.totalCount;
	}
}
</script>
