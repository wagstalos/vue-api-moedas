<template>
  <div class="hello">

  </div>
</template>

<script>
import axios from "axios";

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.log(error);
  });

export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
