<style src="./testdemo.css"></style>
<template>
      <div class="test">
          Test components
      </div>
</template>
<script>
export default {
  mounted() {
    import("./testdemo.js").then((res) => {
      res.default();
    });
  }
};
</script>
