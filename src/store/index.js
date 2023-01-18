import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts:[
      {
        name :"Fanny",
        number:"0763118672"
      },
      {
        name :"Lucas",
        number:"0990876543"
      }
    ],

    journal:[
      {
        date:"21/11/2023",
        hour:"21h32",
        name:"Fanny"
      }
    ],

    number:[],
      
    
  },
  getters: {
  },
  mutations: {
    addNumber(state,a){
      state.number.push(a)
    },
    submitForm(state,contact){
      state.contacts.push(contact)
    },
    callSomeone(state,appel){

      var currentDate = new Date();
      var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + 
      currentDate.getSeconds();
      appel.date=currentDateWithFormat
      appel.hour=time
      state.journal.push(appel)
      
    }

  },
  actions: {
  },
  modules: {
  }
})
