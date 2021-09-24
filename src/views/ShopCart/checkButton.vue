<template>
	<div class="check-btn">
		<img src="../../assets/img/cart/tick.svg" :class="{active:isChecked}">
	</div>
</template>

<script>
	export default{
		props:{
			isChecked:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		methods:{
		}
	}
</script>

<style scoped="scoped" lang="scss">
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
</style>
