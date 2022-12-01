<script setup>
import axiosInstance from "@/config/axios/index.js";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  axiosInstance
    .get(`/callback?code=${route.query.code}`)
    .then((response) => {
      console.log(response);
      router.push({ name: "newsfeed" });
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
