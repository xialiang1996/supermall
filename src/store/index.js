import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cartList: []
	},
	mutations: {
		// addToCart(state,payload){
		//  let oldCount=state.cartList.find((item)=>(item.iid===payload.iid));
		//  if(oldCount){
		//   oldCount.count+=1;
		//  }else{
		//   payload.checked=false;//必须写在push之前，否则不能响应式！！！！！！！！！！！！！！！！！！！！
		//   payload.count=1;
		//   state.cartList.push(payload);
		//   // payload.checked=false;
		//  }
		// }
		addCounter(state, payload) {
			payload.count++;
		},
		addTo_Cart(state, payload) {
			state.cartList.push(payload);
		}
	},
	actions: {
		addToCart(context, payload) {
			return new Promise((resolve,reject)=>{
				let oldCount = context.state.cartList.find((item) => (item.iid === payload.iid));
				if (oldCount) {
					// oldCount.count+=1;
					context.commit('addCounter', oldCount);
					resolve('当前商品数量+1');
					// console.log('当前商品数量+1');
				} else {
					payload.checked = false; //必须写在push之前，否则不能响应式！！！！！！！！！！！！！！！！！！！！
					payload.count = 1;
					// state.cartList.push(payload);
					// payload.checked=false;
					context.commit('addTo_Cart', payload);
					resolve('加入新商品');
					// console.log('加入新商品');
				}
			}) 
			
			//  let oldCount=context.state.cartList.find((item)=>(item.iid===payload.iid));
			//  if(oldCount){
			//   // oldCount.count+=1;
			// context.commit('addCounter',oldCount);
			//  }else{
			//   payload.checked=false;//必须写在push之前，否则不能响应式！！！！！！！！！！！！！！！！！！！！
			//   payload.count=1;
			//   // state.cartList.push(payload);
			//   // payload.checked=false;
			// context.commit('addTo_Cart',payload);
			//  }
		}

	},
	modules: {},
	getters: {
		cartLength(state) {
			return state.cartList.length;
		},
		cartList(state) {
			return state.cartList;
		}
	}
})
