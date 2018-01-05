<template>
  <div>

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <!-- <router-link class="navbar-brand" to="/">Stock Trader</router-link> -->
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown" :class="{open: isDropdownOneOpen}" @click="isDropdownOneOpen = !isDropdownOneOpen">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                COUPON <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="">Snip</a></li>
                <li><a href="#" @click="">Snap (New Coupon)</a></li>
                <li><a href="#" @click="">Report</a></li>
                <li><a href="#" @click="">Comment</a></li>
              </ul>
            </li>
            <li class="dropdown" :class="{open: isDropdownTwoOpen}" @click="isDropdownTwoOpen = !isDropdownTwoOpen">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                APP <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="">Save Data</a></li>
                <li><a href="#" @click="">Load Data</a></li>
              </ul>
            </li>
            <!-- SAVE & LOAD -->
            <li class="dropdown" :class="{open: isDropdownThreeOpen}" @click="isDropdownThreeOpen = !isDropdownThreeOpen">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                USER <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="">Save Data</a></li>
                <li><a href="#" @click="">Load Data</a></li>
              </ul>
            </li>
            <!-- SAVE & LOAD -->
            <li class="dropdown" :class="{open: isDropdownFourOpen}" @click="isDropdownFourOpen = !isDropdownFourOpen">
              <a href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                SYSTEM <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="">Save Data</a></li>
                <li><a href="#" @click="">Load Data</a></li>
              </ul>
            </li>
          </ul>
          <!-- <ul class="nav navbar-nav navbar-right"> -->


          <!-- </ul> -->
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
      <app-tags></app-tags>
    </nav>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tags from './Tags.vue'

export default {
  components: {
    appTags: Tags,
  },
  data(){
    return {
      isDropdownOneOpen: false,
      isDropdownTwoOpen: false,
      isDropdownThreeOpen: false,
      isDropdownFourOpen: false,
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'loadData',
    ]),
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      //data.json is the node we want to create.
      this.$http.put('data.json', data)
    },
    fetchData(){
      this.loadData();
    },
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>

<style>
</style>
