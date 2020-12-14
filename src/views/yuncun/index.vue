<template>
  <div class="">云村</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    async ge() {
      const a = await axios.post(
        "/api/login/cellphone?phone=15188277469&password=123.ljl123"
      );
      console.log(a.data);
    },
  },
  created() {
    this.ge();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped></style>
