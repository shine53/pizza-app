<template lang="html">
  <div class="home container">
	  <div class="my-card card p-5" style='width:80%'>
	  	<div class="card-body text-center">
			<h2 class="card-title py-3">欢迎大家品尝pizza！</h2>
			<h3 class="pb-5">这里有你非常喜欢的pizza！</h3>
			<button type="button" class="btn btn-success" @click='order()'>Let's order!</button>
	  	</div>
	  </div>
  </div>
</template>

<script>

export default {
	name:'appHome',
	methods: {
		order() {
			this.$router.push('/menu')
		}
	}
}
</script>

<style lang="css" scoped>
	.home {
		padding: 10% 15%;
		background: url(../../assets/pizza.jpg);
		height: 100vh;
	}
	.my-card {
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.5);
	}
	.my-card .card-body {
	}
</style>
