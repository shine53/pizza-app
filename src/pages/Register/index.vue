<template lang="html">
  <div class="register">
  	<div class="w-100 py-3">
  		<img class="d-block mx-auto" src="../../assets/icon.png" alt="">
  	</div>
	<form class="px-5">
		<div class="form-group">
			<label for="inputEmail">邮箱</label>
			<input type="email" class="form-control" id="inputEmail" v-model="email" @blur='cEmial'>
		</div>
		<div class="form-group">
			<label for="inputPassword">密码</label>
			<input type="password" class="form-control" id="inputPassword" v-model="password" @blur='cPassord'>
		</div>
		<div class="form-group">
			<label for="inputPasswordAgain">确认密码</label>
			<input type="password" class="form-control" id="inputPasswordAgain" v-model="confirmPassword" @blur='cConfirm'>
		</div>
		<input type="submit" class="form-control bg-success text-white" value="注册" @click.prevent="submit()">

	</form>
  </div>
</template>

<script>
export default {
	name: 'register',
	data() {
		return {
			email:'',
			password:'',
			confirmPassword:''
		}
	},
	methods: {
		cEmail(){

		},
		cPassord(){

		},
		cConfirmPassord(){

		},
		submit(){

		}
	}
}
</script>

<style lang="css" scoped>

/* input[type=submit] {
	background: green;
	color: #fff;
} */
</style>
