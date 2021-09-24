<template>
	<div class="goods-list">
		<goods-list-item v-for="item in GoodList" :GoodsListItem='item'></goods-list-item>
		<!-- {{GoodList}} -->
	</div>
</template>

<script>
	import GoodsListItem from '@/components/content/GoodsList/GoodsListItem'
	export default {
		props: {
			GoodList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		created() {
		},
		components: {
			GoodsListItem
		}
	}
</script>

<style scoped="scoped">
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
