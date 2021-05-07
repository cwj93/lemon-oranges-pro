/*
 * @Description: 
 * @Version: 1.0
 * @Autor: CHENWJ
 * @Date: 2021-05-07 11:34:31
 * @LastEditors: CHENWJ
 * @LastEditTime: 2021-05-07 14:28:35
 */
/**
 * 用户信息
 * */
export default {
    namespaced: true, // 开启命名空间 指定位于特定的命名空间中的模块执行指定的函数 store.dispatch('admin/page/open', to);
    state: {
        // 用户信息
        info: {}
    },
    actions: {
        /**
         * @description 设置用户数据
         * @param {Object} state vuex state
         * @param {Object} dispatch vuex dispatch
         * @param {*} info info
         */
        set ({ state, dispatch }, info) {
            console.log(state, dispatch, info)
        },
        /**
         * @description 从数据库取用户数据
         * @param {Object} state vuex state
         * @param {Object} dispatch vuex dispatch
         */
        load ({ state, dispatch }) {
            console.log(state, dispatch)
        }
    }
}
