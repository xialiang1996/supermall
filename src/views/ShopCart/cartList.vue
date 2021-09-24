<template>
	<div class="cart-list">
		<scroll ref="scroll" class="content">
			<cart-list-item v-for="item in cartList" :item='item'></cart-list-item>
		</scroll>
		<!-- <cart-list-item v-for="item in cartList" :item='item'></cart-list-item> -->
	<!-- 	<div class="cart-list-item" v-for="item in cartList">
			<check-button class="check-btn" :is-checked='item.checked'></check-button>
			<div class="img">
				<img :src="item.image">
			</div>
			<div class="item-info">
				<div class="title">{{item.title}}</div>
				<div class="desc">{{item.desc}}</div>
				<div class="info-bottom">
					<div class="price">￥{{item.price}}</div>
					<div class="count">x{{item.count}}</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import cartListItem from './cartListItem.vue'
	import checkButton from './checkButton.vue'
	import scroll from '@/components/common/scroll/scroll'
	export default {
		components:{
			checkButton,
			cartListItem,
			scroll
		},
		data(){
			return {
			}
		},
		computed: {
			...mapGetters(['cartList']),
		},
		methods:{
		},
		activated () {
		  this.$refs.scroll.refresh();
		}
	}
</script>

<style scoped="scoped">
	.cart-list{
		height: calc(100vh - 44px - 49px - 40px);
	}
	.content{
		height: 100%;
		overflow: hidden;
	}
</style>
