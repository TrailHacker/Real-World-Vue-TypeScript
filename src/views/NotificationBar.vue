<template>
	<div>
		<div class="notification-bar">
			<p>{{ notification.message }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import { State, Action } from "vuex-class";
	import { Notification } from "@/store/notification/types";

	@Component
	export default class NotificationBar extends Vue {
		@Prop({ required: true }) notification!: Notification;
		@Action("remove", { namespace: "notification" }) remove: any;

		private timeout!: number;

		mounted(): void {
			this.timeout = setTimeout(() => {
				this.remove(this.notification);
			}, 3000);
		}

		beforeDestroy(): void {
			clearTimeout(this.timeout);
		}

		get notificationTypeClass() {
			return `-text-${this.notification.type}`;
		}
	}
</script>

<style scoped>
    .notification-bar {
      margin: 1em 0 1em;
    }
</style>