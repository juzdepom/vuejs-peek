import Vue from 'vue'
import Vuex from 'vuex'
import userEvents from './modules/userEvents';
// import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions,
  modules:{
    userEvents,
  }
})
