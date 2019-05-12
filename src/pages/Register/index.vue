<template lang="html">
  <div class="register">
  	<div class="w-100 py-3">
  		<img class="d-block mx-auto" src="../../assets/icon.png" alt="">
  	</div>
	<form class="px-5">
		<div class="form-group">
			<label for="inputEmail">邮箱</label>
			<input type="email" class="form-control" id="inputEmail" v-model="email" @blur='cEmail()'>
			<span class="small text-danger">{{sureEmail}}</span>
		</div>
		<div class="form-group">
			<label for="inputPassword">密码</label>
			<input type="password" class="form-control" id="inputPassword" v-model="password" @blur='cPassword()'>
			<span class="small text-danger">{{passwordLength}}</span>
		</div>
		<div class="form-group">
			<label for="inputPasswordAgain">确认密码</label>
			<input type="password" class="form-control" id="inputPasswordAgain" v-model="confirmPassword" @blur='cConfirm()'>
			<span class="small text-danger">{{confirm}}</span>
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
			confirmPassword:'',
			sureEmail:'',
			passwordLength:'',
			confirm:'',
			bolObj: {
				email:false,
				password:false,
				confirmPassword: false
			}
		}
	},
	methods: {
		cEmail(){
			var rex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email);
			if(rex) {
				this.sureEmail='';
				this.bolObj.email=true
			}else{
				this.sureEmail='请填写正确的邮箱格式'
			}
		},
		cPassword(){
			if(this.password.length<5) {
				this.passwordLength='密码不能少于6位'
			}
			if(this.password.length>15) {
				this.passwordLength='密码不能大于15位'
			}
			if(this.password.length>=6&&this.password.length<=15) {
				this.passwordLength='';
				this.bolObj.password=true
			}
		},
		cConfirm(){
			if(this.password !== this.confirmPassword) {
				this.confirm = '两次密码不一致'
			}else{
				this.confirm = ''
				this.bolObj.confirmPassword = true
			}
		},
		submit(){
			var bol = false
			if(this.email.length===0) {
				this.sureEmail = '邮箱不能为空'
			}
			if(this.password.length < 6&&this.password.length>15) {
				this.passwordLength = '请输入正确的密码格式'
			}
			for (var key in this.bolObj) {
				if(this.bolObj[key]) {
					bol = true
				}else{
					bol = false
				}
			}
			if(bol) {
				var obj = {
					"email": this.email,
					"password": this.password
				}
				obj = JSON.stringify(obj)
				// 第一个参数是字符串，所有上面要转换成字符串
				localStorage.setItem('user',obj)
				this.$router.push('/login')
			}
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
