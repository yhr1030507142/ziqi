import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: {
			home: {
				id: 1,
				name: 'tax',
				img: 'static/img1/homeHL.png'
			},
			customer: {
				id: 2,
				name: 'customer',
				img: 'static/img1/customerHL.png'
			}
		}
	},
	updated:function(){
		console.log('message update:'+ this.scrollTop);
	}
});

export default store
