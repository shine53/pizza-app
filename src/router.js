import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from './pages/Register'
import Login from './pages/Login'
import AppMenu from './pages/Menu'
import AppHome from './pages/Home'
import Manager from './pages/Manager'
import About from './pages/About'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name:'Home',
			component: AppHome
		},
		{
			path: '/home',
			name:'Home',
			component: AppHome
		},
		{
			path: '/register',
			name:'Register',
			component: Register
		},
		{
			path: '/login',
			name:'Login',
			component: Login
		},
		{
			path: '/menu',
			name:'Menu',
			component: AppMenu
		},
		{
			path: '/manager',
			name:'Manager',
			component: Manager
		},
		{
			path: '/about',
			name:'About',
			component: About
		}
	]
})
