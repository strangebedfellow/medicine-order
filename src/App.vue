<template>
  <div id="app">
    <receipt></receipt>
  </div>
</template>
<style>
#app {
  background-color: rgb(233, 233, 233);

}
</style>
<script>
import Receipt from "./components/Receipt";
export default {
  name: "App",
  components: {
    Receipt
  }
};
</script>
