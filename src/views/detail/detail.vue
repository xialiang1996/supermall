<template>
	<div class="detail">
		<detail-nav-bar class="nav-bar" @clickItem="clickItem" ref="nav"></detail-nav-bar>
		<scroll class="content" ref='scroll' @scroll='contentScroll' :probe-type="3">
			<!-- <detail-nav-bar class="nav-bar"></detail-nav-bar> -->
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imgLoad='imgLoad'></detail-goods-info>
			<detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
			<detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
			<goods-list :GoodList="recommend" ref="recommend"></goods-list>
		</scroll>
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
		<backtop @click.native="backBtn" v-if="isShowBacktop"></backtop>
		<toast :message='message' :show="show"></toast>
		<!-- <detail-nav-bar class="nav-bar"></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
		<detail-shop-info :shop="shop"></detail-shop-info>
		<detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
		<detail-param-info :paramInfo="paramInfo"></detail-param-info>
		<detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
		<goods-list :GoodList="recommend"></goods-list>
		<detail-bottom-bar></detail-bottom-bar> -->

	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
	import DetailSwiper from '@/views/detail/childComps/DetailSwiper'
	import {
		getDetail,
		Goods,
		Shop,
		GoodsParam,
		getRecommend
	} from '../../network/detail.js'
	import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
	import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
	import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
	import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo'
	import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo'
	import GoodsList from '@/components/content/GoodsList/GoodsList'
	import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'
	import scroll from '@/components/common/scroll/scroll'
	import backtop from '@/components/content/backtop/backtop'
	import toast from '@/components/common/toast/toast'
	import {debounce} from '@/common/utils.js'

	export default {
		name: 'detail', //必须给组件加上name属性exclude和include才能生效！！！！！！！！！！！！！！！
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodsList,
			DetailBottomBar,
			scroll,
			backtop,
			toast
		},
		data() {
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommend: [],
				isShowBacktop: false,
				topY:[],
				getTopY:null,
				currentIndex:0,
				message:'',
				show:false
			}
		},
		created() {
			this.iid = this.$route.params.iid
			//根据id请求数据
			getDetail(this.iid).then(res => {
				// console.log(res.result);
				const data = res.result;
				//获取详情页轮播图数据
				this.topImages = data.itemInfo.topImages;
				//获取详情页商品数据
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
				// console.log(data.shopInfo);
				// console.log(this.iid)
				//获取详情页商家数据
				this.shop = new Shop(data.shopInfo);
				//获取商品详细数据
				this.detailInfo = data.detailInfo;
				//获取商品参数数据
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
				//获取评论数据
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0];
				}
			})
			//请求推荐数据
			getRecommend().then(res => {
				this.recommend = res.data.list;
			})
			//为getTopY设置防抖，避免频繁调用影响性能
			this.getTopY=debounce(()=>{
				this.topY=[];
				this.topY.push(0);
				this.topY.push(this.$refs.param.$el.offsetTop);
				this.topY.push(this.$refs.comment.$el.offsetTop);
				this.topY.push(this.$refs.recommend.$el.offsetTop);
				// console.log(this.topY);
			},100)
		},
		updated() { //详情页不能滚动必须在updated刷新才可以滚动
			this.$nextTick(function() {
				this.$refs.scroll.refresh();
				// this.topY=[];
				// this.topY.push(0);
				// this.topY.push(this.$refs.param.$el.offsetTop);
				// this.topY.push(this.$refs.comment.$el.offsetTop);
				// this.topY.push(this.$refs.recommend.$el.offsetTop);
				// console.log(this.topY);
			})
		},
		methods: {
			// clickItem(index){
			// 	this.$refs.scroll.scrollTo(0,-this.topY[index],200);
			// },
			imgLoad() {
				this.$refs.scroll.refresh();
				this.getTopY();
				// console.log('goodsloads');
				//必须在图片刷新后监听图片高度才正常
				// this.topY=[];
				// this.topY.push(0);
				// this.topY.push(this.$refs.param.$el.offsetTop);
				// this.topY.push(this.$refs.comment.$el.offsetTop);
				// this.topY.push(this.$refs.recommend.$el.offsetTop);
				// console.log(this.topY);
			},
			clickItem(index){
				this.$refs.scroll.scrollTo(0,-this.topY[index],200);
				// console.log(this.topY[index]);
			},
			backBtn() {
				// console.log('sss');
				this.$refs.scroll.scrollTo(0, 0,200);
			},
			contentScroll(position) {
				// console.log(position);要监听上拉加载更多不能打印这个，否则监听不到
				//判断返回顶部是否显示
				this.isShowBacktop = -(position.y) > 1000;
				// for(let i in this.topY){
				// 	console.log(i);
				// }
				let positionY=-position.y;
				let length=this.topY.length;
				for(let i=0;i<length;i++){
					if(this.currentIndex!==i&&(positionY>=this.topY[i]&&positionY<this.topY[i+1])||(i==length-1)&&positionY>=this.topY[i]){
						// console.log(i);
						this.currentIndex=i;
						this.$refs.nav.currentIndex=this.currentIndex;
					}
				}
			},
			addToCart(){
				// console.log("sss");
				//获取商品详情页要展示的信息
				let cartList={};
				cartList.image=this.topImages[0];
				cartList.title=this.goods.title;
				cartList.desc=this.goods.desc;
				cartList.price=this.goods.realPrice;
				cartList.iid=this.iid;
				//将商品添加进购物车
				// this.$store.commit('addToCart',cartList);
				this.$store.dispatch('addToCart',cartList).then(res=>{
					// console.log(res);
					this.message=res;
					this.show=true;
					setTimeout(()=>{
						this.message='';
						this.show=false;
					},2000)
				});
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.detail {
		position: relative;
		z-index: 9;
		background-color: #FFFFFF;
		height: 100vh;

		.content {
			height: calc(100% - 44px);
			overflow: hidden;
		}
	}
</style>
