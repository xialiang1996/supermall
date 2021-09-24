<template>
	<div class="cart-bottom">
		<div class="check-btn">
			<!-- <img src="../../assets/img/cart/tick.svg" > -->
			<check-button :isChecked="isCheckAll" @click.native='checkAll'></check-button>
			<span>全选</span>
		</div>
		<div class="total">合计：￥{{totalPrice}}</div>
		<div class="calc">去结算:({{calcNum}})</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import checkButton from './checkButton.vue'
	export default{
		components:{
			checkButton
		},
		computed:{
			...mapGetters(['cartLength','cartList']),
			calcNum(){
				return this.cartList.filter((x)=>(x.checked===true)).length;
			},
			totalPrice(){
				return this.cartList.filter((x)=>(x.checked)).reduce((pre,x)=>(pre+x.price*x.count),0).toFixed(2);
			},
			isCheckAll(){
				if(this.cartList.length===0)return false;
				for(let item of this.cartList){
					if (!item.checked){
						return false;
					}
				}
				return true;
			}
		},
		methods:{
			checkAll(){//全选按钮
				if(this.isCheckAll){
					this.cartList.forEach(function(item){
						// console.log(item.checked)
						return item.checked=false;
					})
				}else{
					this.cartList.forEach(function(item){
						// console.log(item.checked)
						return item.checked=true;
					})
				}
				// this.cartList.forEach(item)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.cart-bottom{
		// width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 44px;
		display: flex;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #eee;
		justify-content: space-between;
		div{
			// flex: 1;
		}
		.check-btn{
			// width: 60px;
			display: flex;
			justify-content:center;
			align-items:center;
			margin-left: 3px;
			img{
				// width: 18px;
				// height: 18px;
				// background-color: #ccc;
				// border-radius: 50%;
			}
		}
		.total{
		}
		.calc{
			background-color: orange;
			width: 100px;
		}
	}
</style>
