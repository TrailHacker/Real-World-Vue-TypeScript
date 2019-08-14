import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { notification } from "./notification/index";
import { event } from "./event/index";
import { user } from "./user/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules: {
		notification,
		event,
		user
	},
	state: {
		categories: ["Left", "Right", "Up", "Down"],
	},
};

export default new Vuex.Store<RootState>(store);
