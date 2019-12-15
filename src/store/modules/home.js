//State
const state = {
    counter: 0,
};

//Mutations
const mutations = {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    }
}

//Getters
const getters = {
    getCounter: state => state.counter,
}

//Actions
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
}

export default {
    state,
    mutations,
    getters,
    actions,
}