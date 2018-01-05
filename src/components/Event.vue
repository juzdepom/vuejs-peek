<template lang="html">
  <div class="event-container">
    <div class="pull-left">
        <!-- <img src="{{photoUrl}}"> -->
        {{ username }} {{ action }} ({{ location }})
    </div>
    <div class="pull-right">
      {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      photoUrl: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
      username: "Dominic Chavez",
      action: "snipped a coupon",
      location: "Philadelphia, PA",
      time: "30 min ago",
    }
  },

}
</script>

<style scoped>
  .img {
    height: 40px;
    width: 40px;
  }
  .event-container {
    height: 60px;
    background-color: gray;
    padding: 0 10px 0 10px;
    margin: 0 10px 0 10px;
  }
</style>
