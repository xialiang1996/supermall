<template>
	<div class="recommend">
		<div v-for="item in recommendView" class="recommend-item">
			<a :href="item.link"><img :src="item.image"></a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['recommendView']
	}
</script>

<style scoped="scoped">
	.recommend{
		display: flex;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;
	}
	.recommend>.recommend-item{
		flex: 1;
		text-align: center;
		font: 12px;
	}
	.recommend>.recommend-item>a>img{
		width: 65px;
		height: 65px;
		margin-bottom: 10px;
	}
</style>
