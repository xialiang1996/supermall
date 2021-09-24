<template>
	<div class="shop-cart">
		<nav-bar class="cart-nav">
			<div slot='middle'>购物车({{cartLength}})</div>
		</nav-bar>
		<cart-list></cart-list>
		<cart-bottom ></cart-bottom>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	import cartBottom from './cartBottom.vue'
	import cartList from './cartList'
	import {mapGetters} from 'vuex'
	export default {
		components:{
			NavBar,
			cartList,
			cartBottom
		},
		computed:{
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.cart-nav{
		background-color: rgb(255, 129, 152);
		color: #F6F6F6;
		// z-index: 999;
	}
</style>
