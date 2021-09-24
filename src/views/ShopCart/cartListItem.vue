<template>
	<div class="cart-list-item">
		<check-button class="check-btn" :is-checked='item.checked' @click.native="checkBtn"></check-button>
		<div class="img" @click="toDetail">
			<img :src="item.image">
		</div>
		<div class="item-info" @click="toDetail">
			<div class="title">{{item.title}}</div>
			<div class="desc">{{item.desc}}</div>
			<div class="info-bottom">
				<div class="price">￥{{item.price}}</div>
				<div class="count">x{{item.count}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import checkButton from './checkButton.vue'
	export default{
		components:{
			checkButton
		},
		props:{
			item:Object
		},
		methods:{
			checkBtn(){
				this.item.checked=!this.item.checked;
			},
			toDetail(){
				this.$router.push('/detail/'+this.item.iid);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.cart-list {
		width: 100%;
		// height: 100%;
		overflow: hidden;
		.cart-list-item {
			padding: 5px;
			display: flex;
			border-bottom: 1px solid #ccc;
			.check-btn{
				// float: left;
				display: flex;
				justify-content:center;
				align-items:center;
				.active{
					background-color: red;
				}
				img{
					width: 18px;
					height: 18px;
					background-color: #ccc;
					border-radius: 50%;
					// &.active{
					// 	background-color: red;
					// }
				}
			}
			.img {
				// float: left;
				img {
					width: 80px;
					height: 80px;
				}
			}
	
			.item-info {
				width: 70%;
				margin-left: 5px;
				font-size: 14px;
				.info-bottom{
					position: relative;
					bottom: -20px;
					.price{
						float: left;
					}
					.count{
						float: right;
					}
				}
				.title {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.desc{
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
	
			}
		}
	}
</style>
