<template>
	<tab-bar>
		<tab-bar-item path='/home'>
			<img slot="item-icon" src="@/assets/img/tabbar/cc-home.png">
			<img slot="item-icon-active" src="@/assets/img/tabbar/cc-home (1).png" >
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path='/category'>
			<img slot="item-icon" src="@/assets/img/tabbar/category.png">
			<img slot="item-icon-active" src="@/assets/img/tabbar/category (1).png" >
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path='/shopcart'>
			<img slot="item-icon" src="@/assets/img/tabbar/shop-cart-1.png">
			<img slot="item-icon-active" src="@/assets/img/tabbar/shop-cart-1 (1).png" >
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<img slot="item-icon" src="@/assets/img/tabbar/profile.png">
			<img slot="item-icon-active" src="@/assets/img/tabbar/profile (1).png" >
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from "@/components/common/tabbar/TabBar"
	import TabBarItem from "@/components/common/tabbar/TabBarItem"
	
	export default{
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
