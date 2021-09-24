<template>
	<div class="nav-bar">
		<nav-bar>
			<div slot='left' class="left" @click="leftBack">
				<img src="../../../assets/img/common/back.svg" >
			</div>
			<div slot='middle' class="title" >
				<div v-for="item,index in titles" :class="{active:currentIndex===index}" @click="itemClick(index)">
					{{item}}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	export default{
		components:{
			NavBar
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index;
				this.$emit('clickItem',index);
			},
			leftBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped">
	.nav-bar{
		/* position: relative; */
		/* position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		background-color: #fff; */
	}
	.title{
		display: flex;
	}
	.title div{
		flex: 1;
		font-size: 14px;
	}
	.active{
		color: #FF1493;
	}
.left {
margin-top: 6px;
}
</style>
