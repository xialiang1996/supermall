<template>
	<div class="tab-bar">
		<slot></slot>
		  <!-- <div class="tab-item">
			  <img src="../assets/img/tabbar/cc-home.png" >首页</div>
		  <div class="tab-item">
			  <img src="../assets/img/tabbar/cc-home.png" >购物车</div>
		  <div class="tab-item">
			  <img src="../assets/img/tabbar/cc-home.png" >分类</div>
		  <div class="tab-item">
			  <img src="../assets/img/tabbar/cc-home.png" >我的</div> -->
		  <!-- <tab-bar> -->
			  <!-- <tab-bar-item></tab-bar-item> -->
		  <!-- </tab-bar> -->
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style  lang="scss" >
	body{
		margin: 0;
		padding: 0;
	}
	.tab-bar{
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0px;
		box-shadow: 0 -3px 1px rgba(100,100,100,.1);
		// >.tab-item{
		// 	height: 49px;
		// 	background-color: #f6f6f6;
		// 	flex: 1;
		// 	text-align: center;
		// 	img{
		// 		width: 24px;
		// 		height: 24px;
		// 	}
		// }
	}
</style>
