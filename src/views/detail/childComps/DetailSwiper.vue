<template>
	<div>
		<div v-for="item,index in topImages" class="swiper-item" v-show="index===currentIndex">
			<img :src="item">
			<div class="pre btn" @click="preBtn()">上一张</div>
			<div class="next btn" @click="nextBtn()">下一张</div>
			<div class="zero"><span v-if="topImages.length>1" :class="{active:i==currentIndex}" v-for="item,i in topImages"></span>
			</div>
		</div>
		<!-- <div class="pre btn" @click="preBtn()">上一张</div>
		<div class="next btn" @click="nextBtn()">下一张</div>
		<div class="zero"><span :class="{active:i==currentIndex}" v-for="item,i in topImages"></span>
		</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			preBtn() {
				if (this.currentIndex > 0) {
					this.currentIndex--;
				} else if (this.currentIndex == 0) {
					this.currentIndex = this.topImages.length - 1;
				}
			},
			nextBtn() {
				if (this.currentIndex < this.topImages.length - 1) {
					this.currentIndex++;
				} else if (this.currentIndex == this.topImages.length - 1) {
					this.currentIndex = 0;
				}
			},
			autoPlay() {
				setInterval(() => this.nextBtn(), 3000);
			},
		},

		mounted() {
			this.autoPlay();
		},
		props: {
			topImages: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.swiper-item {
		position: relative;
		height: 300px;
		overflow: hidden;
	}

	.swiper-item>img {
		width: 100%;
		/* height: 100%; */
	}

	.swiper-item>.btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: 40px;
		line-height: 40px;
		width: 50px;
	}

	.swiper-item>.pre {
		left: 0;
	}

	.swiper-item>.next {
		right: 0;
	}

	.swiper-item>.zero {
		z-index: 9;
		position: absolute;
		bottom: 5px;
		left: 50%;
		transform: translateX(-50%);
	}

	.swiper-item>.zero>span {
		margin-right: 10px;
		display: inline-block;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		background-color: #ccc;
	}

	.swiper-item>.zero>span.active {
		background-color: deeppink;
	}
</style>
