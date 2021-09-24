<template>
		<div v-if="Object.keys(detailInfo).length !== 0 && detailInfo.detailImage[0].list !== null">
		    <div class="desc">{{detailInfo.desc}}</div>
		    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
		    <div class="info-list">
		        <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" @load="imgLoad">
		    </div>
		</div>
</template>

<script>
	export default{
		props:{
			detailInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods: {
		  imgLoad () {
		        this.$emit('imgLoad');
				// console.log('------')
		  }
		},
		created() {
			// console.log(this.detailInfo)
			// console.log('------')
		},
		watch: {
		  detailInfo () {
		    // this.imagesLengeth = this.detailInfo.detailImage[0].list.length
		  }
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.desc{
		padding: 8px;
	}
	.info-key{
		padding: 8px;
	}
	.info-list img{
		width: 100%;
	}
</style>
