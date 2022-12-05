<script setup>
import axiosInstance from "@/config/axios/index.js";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

onMounted(() => {
  axiosInstance
    .get(`/callback?code=${route.query.code}`)
    .then((response) => {
      console.log(response);
      authStore.authenticated = true;

      router.push({ name: "newsfeed" });
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
