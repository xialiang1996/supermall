<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="middle"><slot name="middle"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	.nav-bar{
		display: flex;
		line-height: 44px;
		height: 44px;
		text-align: center;
		box-shadow: 0 1px 1px rgb(100,100,100,.1);
	}
	.left,.right{
		width: 60px;
	}
	.middle{
		 flex: 1;
	}
</style>
