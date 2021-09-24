import {request} from './request.js'
export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}
export class Goods{//创建一个类来获取商品详情页数据并导出让详情页组件引入并使用
	constructor(itemInfo,columns,services) {
		this.title=itemInfo.title;//详情页商品标题
		this.desc=itemInfo.desc;
		this.newPrice=itemInfo.price;
		this.oldPrice=itemInfo.oldPrice;
		this.discount=itemInfo.discountDesc;
		this.realPrice=itemInfo.lowNowPrice
		this.columns=columns;
		this.services=services;
	}
}
export class Shop{
	constructor(shopInfo){
		this.logo=shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods;
	}
}
export class GoodsParam {
    constructor(info,rule) {
        // images可能没有值，所以要判断一下
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables
    }
}