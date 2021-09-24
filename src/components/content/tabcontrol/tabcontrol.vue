<template>
	<div class="tab-control">
		<div v-for="item,index in titles" class="tab-control-item" @click="tabControlBtn(index)">
			<span :class="{active:index===currentIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:['titles'],
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			tabControlBtn(index){
				this.currentIndex=index;
				this.$emit('tabClick',index)
				// console.log("sss")
			}
		}
	}
</script>

<style scoped="scoped">
	.tab-control{
		display: flex;
		/* width: 100%; */
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 15px;	
		background-color: #fff;
	}
	.tab-control>.tab-control-item{
		flex: 1;
	}
	.tab-control>.tab-control-item>span{
		padding: 5px;
	}
	.active{
		color: #FF1493;
		border-bottom: 3px solid #FF1493;
	}
</style>
