<template lang="html">
  <div class="event-container">
    <div class="pull-left">

        <p><img class="profile-photo" :src="photoUrl" alt=""><strong>{{ username }} {{ action }}</strong> ({{ location }})</p>
    </div>
    <div class="pull-right">
      <p>{{ time }} <img class="three-dots" src="../assets/three_dots@2x.png"></p>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      photoUrl: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      username: "Dominic Chavez",
      action: "snipped a coupon",
      location: "Philadelphia, PA",
      time: "30 min ago",
    }
  },

}
</script>

<style scoped>
  div {
    font-family: Open Sans;
  }
  .three-dots{
    height: 16px;
    margin-left: 15px;
    margin-right: 20px;

  }
  .profile-photo {
    height: 40px;
    border-radius: 25px;
    margin-right: 10px;
  }
  strong {
    font-weight: 600;
  }
  p {
    color: #5C5C5C;
  }
  .pull-left p {
    font-size: 14px;
  }
  .pull-right p {
    font-size: 12px;
  }
  .img {
    height: 40px;
    width: 40px;
  }
  .event-container {
    line-height: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 10px;
    background-color: white;
    padding: 0 10px 0 10px;
    margin: 0 10px 0 10px;
  }
</style>
