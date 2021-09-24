<template>
	<div id="tab-bar-item" @click="btnClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path===this.path;//方法1，活跃的路由就是当前的路由
				// return this.$route.path.indexOf(this.path)!==-1;//方法2，判断当前的路由是不是活跃的路由
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			btnClick(){
				// console.log(this.path);
				this.$router.replace(this.path).catch(()=>{});
			}
		}
	}
</script>

<style scoped>
	#tab-bar-item {
		height: 49px;
		background-color: #f6f6f6;
		flex: 1;
		text-align: center;
		font-size: 14px;

	}
	img {
		 margin-top: 3px;
		 /* padding-bottom: 3px; */
		vertical-align: middle;
		width: 24px;
		height: 24px;
	}
	/* .active{
		color: red;
	} */
</style>
