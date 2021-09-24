<template>
	<div id="home">
		<nav-bar class="home-nav-bar">
			<div slot='middle'>购物街</div>
		</nav-bar>
		<tabcontrol :titles='titles' class="tabcontrol1" @tabClick='tabClick' ref="tabControl1" v-show="isTabFixed"></tabcontrol>
		<scroll class="home-content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
			@pullingUp="loadMore" :observeImage="true">
			<swiper :bannerList='bannerList' class="swiper" @swiperImageLoad="swiperImageLoad"></swiper>
			<recommend :recommendView='recommendList'></recommend>
			<feature></feature>
			<tabcontrol :titles='titles' class="tabcontrol" @tabClick='tabClick' ref="tabControl2"></tabcontrol>
			<!-- 接收子组件的tabClick后面方法不能加括号或者参数 -->
			<goods-list :GoodList="showGoods"></goods-list>
		</scroll>
		<backtop @click.native="backBtn" v-if="isShowBacktop"></backtop>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar'
	import {
		getHomeMultidata,
		getHomeGoods
	} from '../../network/home'
	import swiper from '@/components/common/swiper/swiper'
	import recommend from '@/components/recommend'
	import feature from '@/components/feature'
	import tabcontrol from '@/components/content/tabcontrol/tabcontrol'
	import GoodsList from '@/components/content/GoodsList/GoodsList'
	import scroll from '@/components/common/scroll/scroll'
	import backtop from '@/components/content/backtop/backtop'
	import {itemListenerMixin} from '@/common/mixin.js'
	export default {
		components: {
			NavBar,
			swiper,
			recommend,
			feature,
			tabcontrol,
			GoodsList,
			scroll,
			backtop
		},
		data() {
			return {
				bannerList: [],
				recommendList: [],
				titles: ['流行', '新款', '精选'],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentType: 'pop',
				isShowBacktop: false,
				tabOffsetTop: 0,
				isTabFixed:false,
				saveY:0
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list;
			}
		},
		activated() {
			//进入时滚动到离开时的位置this.saveY
			this.$refs.scroll.scrollTo(0,this.saveY,0);
			this.$refs.scroll.refresh();//不刷新可能会产生bug
			// console.log('activated');
		},
		deactivated() {
			//记录离开home时srcoll的位置
			this.saveY=this.$refs.scroll.getScrollY();
			//取消全局事件监听（主页图片加载的监听）因为此时设置了keep-alive，所以离开时调用的是deactivated()
			this.$bus.$off('itemImageLoad',this.itemImgListener);
			// console.log(this.saveY);
			// console.log('deactivated');
		},
		mounted() {
			//监听GoodsListItem图片加载完成
			const refresh = this.debounce(this.$refs.scroll.refresh,50);
			
			this.$bus.$on('itemImageLoad',()=>{
				// console.log('-------');
				this.$refs.scroll.refresh();
				refresh();
			})
		},
		created() {
			//发送网络请求,请求轮播图数据
			this.getHomeMultidata();
			//发送网络请求商品数据
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
			// //监听GoodsListItem图片加载完成
			// this.$bus.$on('itemImageLoad',()=>{
			// 	// console.log('-------');
			// 	this.$refs.scroll.refresh();
			// })
		},
		methods: {
			// swiperImageLoad(){
			// 	// console.log(this.$refs.tabControl2.$el.offsetTop);
			// 	this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			// 	// console.log(this.tabOffsetTop);
			// },
			//防抖函数
			debounce(func,delay){
				let timer=null;
				return function(...args){
					if(timer)clearTimeout(timer)
					timer=setTimeout(()=>{
						func.apply(this,args)
					},delay)
				}
			},
			loadMore() {
			// 	console.log("加载更多");
				this.getHomeGoods(this.currentType);
				this.$refs.scroll.finishPullUp();//必须执行这个函数才能加载更多，否则只能加载一次
			},
			contentScroll(position) {
				// console.log(position);要监听上拉加载更多不能打印这个，否则监听不到
				//判断返回顶部是否显示
				this.isShowBacktop = Math.abs(position.y) > 1000;
				//判断tabbar是否吸顶
				this.isTabFixed = (-position.y) > this.$refs.tabControl2.$el.offsetTop;
			},
			backBtn() {
				// console.log('sss');
				this.$refs.scroll.scrollTo(0, 0,200);
			},
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex=index;
				this.$refs.tabControl2.currentIndex=index;
			},
			swiperImageLoad(){
				// console.log(this.$refs.tabControl2.$el.offsetTop);
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
				// console.log(this.tabOffsetTop);
			},
			//以下是网络请求相关方法
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.bannerList = res.data.banner.list;
					this.recommendList = res.data.recommend.list;
					// console.log(this.recommendList);
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list);
					this.goods[type].page += 1;/* 更新data中的页码 */
					// this.$refs.scroll.finishPullUp();
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#home {
		height: 100vh;
		position: relative;
	}

	.home-nav-bar {
		background-color: rgb(255, 129, 152);
		color: #F6F6F6;
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 6; */
	}

	.tabcontrol {
		/* position: sticky;
		top: 41px; */
	}

	.swiper {
		/* margin-top: 36px; */
	}

	.home-content {
		/* height: calc(100% - 93px); */
		/* overflow:hidden; */
		/* margin-top:44px; */
		/* position: absolute; */
		/* top: 44px; */
		/* bottom: 49px; */
		/* left: 0;
		right: 0; */
		/* height: calc(100%-93px); */
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tabcontrol1{
		position: relative;
		z-index: 6;
	}
</style>
