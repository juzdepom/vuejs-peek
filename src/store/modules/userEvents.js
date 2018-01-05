import userEvents from '../../data/userEvents.js';

const state = {
  userEvents: [],
};

const mutations = {
  'SET_USEREVENTS' (state, userEvents) {
    state.userEvents = userEvents
    // console.log(state)
  },
};

const actions = {
  initUserEvents: ({ commit }) => {
    console.log('setting userEvents')
    console.log(userEvents)
    commit('SET_USEREVENTS', userEvents);
  },
};

const getters = {
  userEvents: state => {
    return state.userEvents;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
}
