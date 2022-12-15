import { defineRule } from "vee-validate";
import { required, min, max, email, integer, alpha } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("max", max);
defineRule("email", email);
defineRule("integer", integer);
defineRule("alpha", alpha);

defineRule("confirmed", (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }

  return "Passwords must match";
});

defineRule("georgian_text", (value) => {
  if (!value.match(/^[\u10D0-\u10F0 0-9_-]+$/)) {
    return false;
  }
  return true;
});

defineRule("english_text", (value) => {
  if (!value.match(/^[A-Za-z0-9 _-]+$/)) {
    return false;
  }
  return true;
});

defineRule("lowercase", (value) => {
  if (!value.match(/^[a-z _-]+$/)) {
    return false;
  }
  return true;
});
