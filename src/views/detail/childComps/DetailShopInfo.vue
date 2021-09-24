<template>
	<div class="shop" v-if="Object.keys(shop).length!==0">
		<div class="shop-top">
			<img :src="shop.logo">
			<span class="shop-name">{{shop.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle-item left">
				<div class="sell">
					<div>{{shop.sells}}</div>
					<div>总销量</div>
				</div>
				<div class="count">
					<div>{{shop.goodsCount}}</div>
					<div>全部宝贝</div>
				</div>
			</div>
			<div class="shop-middle-item right">
				<table border="" cellspacing="" cellpadding="" class="table">
					<tr v-for="item,index in shop.score" :key="index">
						<td>{{item.name}}</td>
						<td>{{item.score}}</td>
						<td><span>{{item.isBetter?'高':'低'}}</span></td>
					</tr>
				</table>
			</div>
		</div>
		<div class="shop-bottom">
			进店逛逛
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			shop: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		created() {
			// console.log(this.shop)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.shop{
		padding: 25px 8px;
		border-bottom: 5px solid #f2f5f8;
		border-top: 5px solid #f2f5f8;
		.shop-top{
			align-items: center;
			display: flex;
			img{
				width: 45px;
				height: 45px;
				border-radius: 50%;
				border: 1px solid rgba(0, 0, 0, 0.1);
			}
			.shop-name{
				margin-left: 10px;
			}
		}
		.shop-middle{
			display: flex;
			align-items: center;
			.shop-middle-item{
				flex: 1;
			}
		}
		table{
					border: none;
					td{
						border: none;
					}
		}
		.shop-bottom{
			text-align: center;
			margin-top: 10px ;
		}
		.sell{
			float: left;
			text-align: center;
		}
		.count{
			float: right;
			text-align: center;
		}
		.table{
			float: right;
		}
	}
</style>
