<template>
    <div class="container">
      <div style="display: flex">
        <div class="left-sidebar">
          <div style="position: absolute; top: 20%; left: 15%">
            <app-business></app-business>
            <app-business></app-business>
            <app-business></app-business>
          </div>
        </div>
        <div class="main-content">
          <app-header></app-header>
          <app-event style="margin-top:12px;" v-for="userEvent in userEvents" :userEvent="userEvent"></app-event>
        </div>
      </div>


      <!-- <div class="row">

        <div class="col-lg-2">
          Testing
        </div>

        <div class="col-lg-10">
          <br>


          <div class="row">
            <div class="col-xs-12">
              <transition name="slide" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div> -->


    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import AppEvent from './components/Event.vue'
  import Business from './components/Business.vue'

  export default {
    computed: {
      userEvents(){
        return this.$store.getters.userEvents;
      }
    },
    components: {
      appHeader: Header,
      appEvent: AppEvent,
      appBusiness: Business,
    },
    created(){
      this.$store.dispatch('initUserEvents');
    }
  }
</script>

<style>

  app-event {
    margin-top: 12px;
  }
  .left-sidebar {
    position: relative;
    vertical-align: middle;
    height: 100vh;
    width: 70px;
    background-color: gray;
  }
  .main-content {
    background-color: lightgray;
    flex: 1;
    /*height: 200px;*/
  }

  /*ANIMATIONS*/
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
    transition: opacity 0.3s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
    transition: opacity 0.3s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
