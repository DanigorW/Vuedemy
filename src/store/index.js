import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    /////////// state /////////////
    // all our sherd data in our app will go to the state for easy management

    state: { 
        exchanges: [{
            id: "ad7asdsa68dasd",
            type: "product", // service or product
            title: "I have Driller",
            description: "I will exchange this super driller...",
            value: 20, // value per hour in case of service,
            user: "2398173193",
            image: "https://images.unsplash.com/photo-1458829549177-e9a8f3db5b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            country: "Germany",
            city: "Berlin",
            status: "active",
            tags: ["tools", "helping"] // can be active/inactive,
          },
          {
            id: "ad7as5sa68dasd",
            type: "service", // service or product
            title: "I will teach programming",
            description: "I will make you super programmer",
            value: 20, // value per hour in case of service,
            user: "2398173193",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            country: "Germany",
            city: "Berlin",
            status: "active",
            tags: ["programming", "pc"] // can be active/inactive
          }],

          //mutations example
          // we will add 1 to the number with button on every click
          number: 0,

     },
    /////////////  mutations   ////////////
    mutations: { 
        addOne(state){
            return state.number ++
        }
     },

    actions: { 
        
     },
     
     /////////////  getters   ////////////
     // change data in the state to not write the code in every component for this action
     // so we can use the function in every component and if we need to change the data we do it 
     // only in one place and it will effect all the components in our app 
     // all so we do not need to use "$store.state.exchanges" because we already in the store so
     // the syntax will be "$state.exchanges" without the $store
     // a getter always will be a function that get a param "state" and we get access to the state
     // we can use "$state.{any name of state props }" and not "$store.state.exchanges"
    getters: { 
        addOne(state){
            return state.number
        }
     }

})



