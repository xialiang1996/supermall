<template>
	<div class="swiper">
		<div v-for="item,index in bannerList" class="swiper-item" v-show="index===currentIndex">
			<a :href="item.link">
				<img :src="item.image" @load="imageLoad">
			</a>
			<div class="pre btn" @click="preBtn()">上一张</div>
			<div class="next btn" @click="nextBtn()">下一张</div>
			<div class="zero"><span :class="{active:i==currentIndex}" v-for="item,i in bannerList"></span></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['bannerList'],
		data(){
			return {
				currentIndex:0,
				isLoad:false
			}
		},
		computed: {
		},
		methods:{
				imageLoad () {
					// this.$emit('swiperImageLoad');
				  if(!this.isLoad){
				    this.$emit('imageLoad')
				    this.isLoad = true // 只加载一张图片就可以了，提高性能
				  }
				},
			preBtn(){
				if(this.currentIndex>0){
					this.currentIndex--;
				}else if(this.currentIndex==0){
					this.currentIndex=this.bannerList.length-1;
				}
			},
			nextBtn(){
				if(this.currentIndex<this.bannerList.length-1){
					this.currentIndex++;
				}else if(this.currentIndex==this.bannerList.length-1){
					this.currentIndex=0;
				}
			},
			autoPlay(){
				setInterval(()=>this.nextBtn(),3000);
			}
		},
		mounted() {
			this.autoPlay();
		}
	}
</script>

<style scoped="scoped">
	.swiper>.swiper-item{
		position: relative;
	}
	.swiper>.swiper-item>a>img{
		width: 100%;
		height: 100%;
	}
	.swiper>.swiper-item>.btn{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: 40px;
		line-height: 40px;
		width: 50px;
	}
	.swiper>.swiper-item>.pre{
		left: 0;
	}
	.swiper>.swiper-item>.next{
		right: 0;
	}
	.swiper>.swiper-item>.zero{
		position: absolute;
		bottom: 5px;
		left: 50%;
		transform: translateX(-50%);
	}
	.swiper>.swiper-item>.zero>span{
		margin-right: 10px;
		display: inline-block;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		background-color: #ccc;
	}
	.swiper>.swiper-item>.zero>span.active{
		background-color: deeppink;
	}
</style>
