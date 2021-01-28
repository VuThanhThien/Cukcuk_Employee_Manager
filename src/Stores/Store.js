import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        employeeTemp:{},
        isShow: false,
        activeSideBar: true,
        
    },
    mutations: {
        // Mở dialog thêm nhân viên 
        openDialog(state) {
            state.isShow = true;
        },
        // đóng dialog 
        closeDialog(state){
            state.isShow = false;
        },
        // ẩn hiện sidebar 
        activeSideBar(state){
            state.activeSideBar = !this.state.activeSideBar
        },
        getDataFromRow(state, payload){
            state.employeeTemp = payload;
        }

    },
    actions: {
        openDialog({ commit }){
            commit('openDialog');
        },
        closeDialog({ commit }){
            commit('closeDialog');
        },
        activeSideBar({ commit }){
            commit('activeSideBar');
        },
        getDataFromRow({ commit }, payload){
            commit('getDataFromRow', payload)
        }
    },
      
})