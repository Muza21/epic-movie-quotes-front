import { defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);
