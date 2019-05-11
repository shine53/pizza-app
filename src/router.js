import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from './pages/Register'
// import Register from './pages/Register'
import AppMenu from './pages/Menu'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name:'Home',
			component: Register
		},
		{
			path: '/register',
			name:'Register',
			component: Register
		},
		{
			path: '/menu',
			name:'Menu',
			component: AppMenu
		},
	]
})
