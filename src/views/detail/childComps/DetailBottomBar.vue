<template>
	<div class="bottom-bar">
		<div class="bar bar-left">
		    <div>
		    <i class="img service"></i>
		    <span>客服</span>
		</div>
		<div>
		    <i class="img shop"></i>
		    <span>店铺</span>
		</div>
		<div>
		    <i class="img star"></i>
		    <span>收藏</span>
		</div>
		</div>
		<div class="bar bar-right">
		    <div class="cart" @click="addToCart">加入购物车</div>
		    <div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			addToCart(){
				this.$emit('addToCart');
			}
		}
	}
</script>

<style scoped="scoped">
	.bottom-bar {
	    background: #fff;
	    height: 44px;
	   /* position: relative;
	    bottom: 44px;
	    left: 0;
	    right: 0; */
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	    z-index: 9;
	    display: flex;
	    text-align: center;
	}
	.bar {
	    flex: 1;
	    display: flex;
	}
	.bar div{
	    flex: 1;
	}
	.bar-left span {
	    font-size: 12px;
	}
	.bar-left .img{
	    display: block;
	    width: 22px;
	    height: 22px;
	    margin: 5px auto -2px;
		background: url('../../../assets/img/detail/detail_bottom.png') 0 0 / 100%;
	}
	.bar-left .service {
	    background-position: 0 -54px;
	}
	.bar-left .shop {
	    background-position: 0 -98px;
	}
	.bar-right {
	    font-size: 14px;
	    color: #fff;
	    line-height: 49px;
	}
	.cart {
	  height: 49px;
	  background-color: #ffe817;
	  color: #333;
	}
	.buy {
	  height: 49px;
	  background-color: #f69;
	}
</style>
