<template>
		<div class="toast" v-show="show">
			{{message}}
		</div>
</template>

<script>
	export default{
		props:{
			message:{
				type:String,
				default:''
			},
			show:{
				type:Boolean,
				default:false
			}
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		background-color: rgba(0,0,0,0.7);
		color: #fff;
		padding: 10px 8px;
		transform: translatex(-50%);
	}
</style>
