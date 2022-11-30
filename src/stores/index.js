import { defineStore } from "pinia";

export const errorMessagesStore = defineStore("errorMessages", {
  state: () => {
    return {
      usernameError: "",
      emailError: "",
    };
  },
  actions: {
    storeUsernameError(state, username) {
      state.usernameError = username;
    },
    storeEmailError(state, email) {
      state.email = email;
    },
  },
});
