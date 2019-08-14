<template>
	<div class="notification-container">
		<NotificationBar v-for="notification in notifications"
			:key="notification.id"
			:notification="notification" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import { State } from "vuex-class";
	import { Notification } from "@/store/notification/types";
	import NotificationBar from "@/views/NotificationBar.vue";

	@Component({ components: { NotificationBar }})
	export default class NotificationContainer extends Vue {
		@State("notifications", { namespace: "notification" }) notifications!: Notification[];
	}
</script>

<style scoped>
    .notification-container {
      position: fixed;
      bottom: 0;
    }
</style>