import { defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }

  return "Passwords must match";
});
