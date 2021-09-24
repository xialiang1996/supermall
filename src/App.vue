<template>
  <div>
	  <!-- 必须给组件加上name属性exclude和include才能生效！！！！！！！！！！！！！！！ -->
	  <keep-alive exclude="detail">
		  <router-view></router-view>
	  </keep-alive>
	  <main-tab-bar></main-tab-bar>
  </div>
</template>

<script type="text/javascript">
	import MainTabBar from '@/components/content/MainTabBar'
	export default{
		components:{
			MainTabBar
		}
	}
</script>

<style lang="scss">
</style>
