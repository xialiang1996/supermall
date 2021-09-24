<template>
	<div class="goods-list-item" @click="itemClick">
		<img :src="showImage" @load="imgLoad">
		<div class="goods-list-item-info">
			<p class="goods-list-item-title">{{GoodsListItem.title}}</p>
			<span class="goods-list-item-price">{{GoodsListItem.price}}</span>
			<span class="goods-list-item-love">{{GoodsListItem.cfav}}</span>
		</div>
		<!-- {{GoodsListItem}} -->
	</div>
</template>

<script>
	export default{
		props:{
			GoodsListItem:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		created() {
			// console.log(this.GoodsListItem.show.img)
		},
		computed:{
			showImage(){
				return this.GoodsListItem.image || this.GoodsListItem.show.img;
			}
		},
		methods:{
			imgLoad(){
				// console.log('imgLoad');
				this.$bus.$emit('itemImageLoad');
			},
			itemClick(){
				this.$router.push('/detail/'+this.GoodsListItem.iid);
			}
		},
	}
</script>

<style scoped="scoped">
	.goods-list-item{
		width: 48%;
		/* justify-content: space-evenly; */
		/* height: 50%; */
	}
	.goods-list-item>img{
		width: 100%;
		height: 80%;
		border-radius: 5px;
	}
	.goods-list-item>.goods-list-item-info>.goods-list-item-title{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.goods-list-item>.goods-list-item-info{
		text-align: center;
		font-size: 12px;
	}
	.goods-list-item>.goods-list-item-info>.goods-list-item-price{
		color: deeppink;
		margin-right: 20px;
	}
	.goods-list-item>.goods-list-item-info>.goods-list-item-love{
		position: relative;
	}
	.goods-list-item>.goods-list-item-info>.goods-list-item-love::before{
		position: absolute;
		content: '';
		background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
		width: 14px;
		height: 14px;
		left: -15px;
		top: -1px;
	}
</style>
