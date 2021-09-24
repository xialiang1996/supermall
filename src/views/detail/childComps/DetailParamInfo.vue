<template>
	<div class="param-info">
		<table border="" cellspacing="" cellpadding="" v-for="item,x in paramInfo.sizes" :key="x">
			<tr v-for="tr,y in item" :key="y"><td v-for="td,z in tr" :key="z">{{td}}</td></tr>
		</table>
		<table border="" cellspacing="" cellpadding="">
			<tr v-for="item,x in paramInfo.infos">
				<td class="key">{{item.key}}</td>
				<td class="value">{{item.value}}</td>
			</tr>
		</table>
		<div class="img">
			<img :src="paramInfo.image" >
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			paramInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.param-info table{
		border: none;
		width: 100%;
		border-collapse: collapse;
	}
	.param-info td{
		text-align: center;
		border: none;
	}
	.param-info{
		padding:  20px 15px;
	}
	.param-info table tr {
		height: 42px;
	  // width: 100%;
	  // border-collapse: collapse;
	}
	.key{
		/*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
		width: 95px;
	}
	.img img{
		width: 100%;
	}
</style>
