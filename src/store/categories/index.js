import {make} from 'vuex-pathify';
import config from '@/config';

const state = {
    all: []
};

const getters = {
    ...make.getters(state)
}

const mutations = {
    ...make.mutations(state)
}

const actions = {
    ...make.actions(state),

    load({commit}) {
        return fetch(`${config.FAKER_API}/products/categories`).then(res => res.json()).then(data => {
            commit('SET_ALL', data);
            return data;
        });
    },
    loadProducts(ignore, catId) {
        return fetch(`${config.FAKER_API}/products/category/${catId}`).then(res => res.json()).then(data => {
            return data;
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}