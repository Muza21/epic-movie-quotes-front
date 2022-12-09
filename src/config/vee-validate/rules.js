import { defineRule } from "vee-validate";
import { required, min, email, integer, alpha } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);
defineRule("integer", integer);
defineRule("alpha", alpha);

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }

  return "Passwords must match";
});
