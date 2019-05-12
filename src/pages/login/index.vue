<template lang="html">
  <div class="login">
  	<div class="w-100 py-3">
  		<img class="d-block mx-auto" src="../../assets/icon.png" alt="">
  	</div>
	<form class="px-5">
		<div class="form-group">
			<label for="inputEmail">邮箱</label>
			<input type="email" class="form-control" id="inputEmail" v-model="email" @blur='cEmail'>
			<span class="small text-danger">{{sureEmail}}</span>
		</div>
		<div class="form-group">
			<label for="inputPassword">密码</label>
			<input type="password" class="form-control" id="inputPassword" v-model="password" @blur='cPassord'>
			<span class="small text-danger">{{passwordLength}}</span>
		</div>
		<input type="submit" class="form-control bg-success text-white" value="登陆" @click.prevent="submit()">

	</form>
  </div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			email:'',
			sureEmail:'',
			password:'',
			passwordLength:''
		}
	},
	methods: {
		cEmail(){
			var rex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email);
			if(rex) {
				this.sureEmail=''
			}else{
				this.sureEmail='请填写正确的邮箱格式'
			}
		},
		cPassord(){
			if(this.password.length<6) {
				this.passwordLength='密码不能少于6位'
			}
			if(this.password.length>15) {
				this.passwordLength='密码不能大于15位'
			}
			if(this.password.length>=6&&password.length<=15) {
				this.passwordLength=''
			}
		},
		submit(){
			if(this.email.length===0) {
				this.sureEmail = '邮箱不能为空'
			}
			if(this.password.length < 6&&this.password.length>15) {
				this.passwordLength = '请输入正确的密码格式'
			}
			var user = JSON.parse(localStorage.getItem('user'))
			if(this.email!==user.email) {
				alert('邮箱不存在！')
			}
			if(this.password!==user.password) {
				alert('密码不正确！')
			}
			if(this.email===user.email&&this.password===user.password) {
				this.$router.push('/home')
			}
		}
	}
}
</script>
