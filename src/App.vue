<template>
  <div id="app">
	  <header class="container">
		  <app-header/>
	  </header>
	  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
	  // 为了不和header标签重名
	appHeader: Header
  }
}
</script>

<style>

</style>
