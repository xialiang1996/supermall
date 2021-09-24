import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home/Home')
const Category = () => import('@/views/CateGory/Category')
const Profile = () => import('@/views/Profile/Profile')
const ShopCart = () => import('@/views/ShopCart/ShopCart')
const detail = () => import('@/views/detail/detail')

Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	}, 
	{
		path: '/shopcart',
		component: ShopCart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/detail/:iid',
		component: detail
	}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
