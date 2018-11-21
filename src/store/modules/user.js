import api from '@/resources/index'

export default {
  state: {
    todo: []
  },
  mutations: {
    setTodo(state, item) {
      state.todo = item;
    }
  },
  actions: {
    getData(store, params) {
      api.getData(params).then((res) => {
        console.log(res)
        store.commit('setTodo', res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
