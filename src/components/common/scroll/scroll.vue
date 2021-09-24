<template>
	<div class="wrapper" ref="wrapper">
	    <div class="content">
	        <slot></slot> <!-- 插槽就是将主页里<sroll>的内容替换过来 -->
	    </div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return {
				scroll:null
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			},
			observeDOM: {
			  type: Boolean,
			  default: false,
			},
			observeImage: {
			  type: Boolean,
			  default:false
			},
			data: {
			  type: Array,
			  default () {
			    return []
			  }
			}
		},
		mounted(){
			//创建scroll对象
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				observeDOM:this.observeDOM,//一开始不能滚动加这个属性才能滚动
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad,
				observeImage: this.observeImage
			})
				// probeType:3,
				// pullUpLoad:true
			// this.scroll.scrollTo();
			//监听滚动位置
			if(this.probeType===2 || this.probeType===3){
			  this.scroll.on('scroll', position => {
			  // console.log(position)
			  this.$emit('scroll',position)
			})
			}
			// this.scroll.on('scroll',(position)=>{
			// 	// console.log(position)
			// 	this.$emit('scroll',position)
			// 	})
				//监听滚动到底部
				if(this.pullUpLoad){ // pullUpLoad为true时，到达底部，为false的组件不用监听此事件，提升效率
				  this.scroll.on('pullingUp',()=>{
				    // console.log('bottom'); 到达底部时才触发函数
				    this.$emit('pullingUp')
				})
				}
				// this.scroll.on('pullingUp',()=>{
				// 	// console.log('监听到滚动底部');
				// 	this.$emit('pullingUp');//发出监听到滚动到底部的数据
				// })
		},
		methods:{
			scrollTo(x,y,time){
				this.scroll && this.scroll.scrollTo(x,y,time);
			},
			finishPullUp(){
				//必须执行这个函数才能加载更多，否则只能加载一次
				this.scroll && this.scroll.finishPullUp();
			},
			refresh(){
				this.scroll && this.scroll.refresh();
				// console.log('ssssss')
			},
			getScrollY(){
				return this.scroll?this.scroll.y:0;
			}
		},
		destroyed() {
			// console.log('destoryed')
		}
	}
</script>

<style>
</style>
