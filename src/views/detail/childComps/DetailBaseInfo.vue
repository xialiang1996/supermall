<template>
	<div class="detail-base-info" v-if="Object.keys(goods).length !==0">
		<div class="title">{{goods.title}}</div>
		<div class="price">
			<span class="new-price">{{goods.newPrice}}</span>
			<span class="old-price">{{goods.oldPrice}}</span>
			<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="column">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-service">
		    <span class="info-service-item" v-for="index in goods.services.length-1"
		    :key="index">
		        <img :src="goods.services[index-1].icon" alt="">
		        <span>{{goods.services[index-1].name}}</span>
		    </span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.detail-base-info {
		.title{
			padding: 10px;
		}

		.price {
			margin-left: 10px;
			.new-price{
				color: red;
				font-size: 20px;
			}
			.old-price{
				text-decoration: line-through;
				color: #ccc;
				font-size: 14px;
				margin-left: 5px;
			}
			.discount{
				background-color: deeppink;
				border-radius: 8px;
				padding: 3px 10px;
				color: #fff;
			}
		}

		.column {
			margin-top: 10px;
			display: flex;
			color: #ccc;
			span{
				flex: 1;
				text-align: center;
				font-size: 14px;
			}
		}
		.info-service{
			display: flex;
			// justify-content: space-between;
			font-size: 14px;
			span{
				flex: 1;
				text-align: center;
			}
			img{
				width: 16px;
				height: 16px;
				position: relative;
				top: 2px;
				vertical-align: center;
			}
		}
	}

	.detail-base-info>.price {
		// color: palevioletred;
	}
</style>
