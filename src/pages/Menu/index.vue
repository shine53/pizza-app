<template lang="html">
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-7">
  			<table class="table">
  				<thead>
  					<tr>
  						<th>尺寸</th>
  						<th>价格</th>
  						<th>加入</th>
  					</tr>
  				</thead>
				<tbody v-for='pizza in getPizza' :key='pizza.name'>
					<tr>
						<td><h6>{{pizza.name}}</h6></td>
					</tr>
					<tr v-for='item in pizza.options' :key='item.size'>
						<td>{{item.size}}寸</td>
						<td>{{item.price}}RMB</td>
						<td>
							<a class="add" href="#" @click='getNum(pizza.name,item.price)'>+</a>
						</td>
					</tr>
				</tbody>
  			</table>
  		</div>
  		<div class="col-xs-12 col-sm-5">
			<p v-if='caretPizzas.length === 0'>您还没有添加任何商品</p>
			<div class="caret" v-else>
				<table class="table">
					<thead>
						<tr>
							<td>数量</td>
							<td>品种</td>
							<td>价格</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for='(caretPizza,index) in caretPizzas'>
							<td>
								<button type="button" class="btn btn-sm bg-light" @click='reduceNum(caretPizza,index)'>-</button>
								<span>{{caretPizza.num}}</span>
								<button type="button" class="btn btn-sm bg-light" @click='addNum(caretPizza)'>+</button>
							</td>
							<td>{{caretPizza.name}}</td>
							<td>{{caretPizza.price*caretPizza.num}}</td>
						</tr>
					</tbody>
				</table>
				<p>
					<span>总价：{{sum}}RMB</span>
				</p>
				<button type="button" class="btn btn-success btn-block">提交</button>
			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	name: 'appMenu',
	data() {
		return {
			num:'',
			bol:true,
			caretPizzas:[],
			getPizza: {
				1:{
					'name':'榴莲pizza',
					"description":"这是喜欢吃榴莲朋友的最佳选择",
					"options":[
						{
							"size": 9,
							"price": 38
						},
						{
							"size": 12,
							"price": 48
						}
					]
				},
				2:{
					"name":"芝士pizza",
					"description":"芝士杀手，浓浓的芝士丝，食欲瞬间爆棚",
					"options":[{
						"size": 9,
						"price": 38
					},
					{
						"size": 12,
						"price": 48
					}]
				},
				3:{
					"name":"夏威夷pizza",
					"description":"众多人的默认选择",
					"options":[{
						"size": 9,
						"price": 38
					},
					{
						"size": 12,
						"price": 48
					}]
				}
			}
		}
	},
	computed: {
		// hasCaret() {
		// 	if(this.caretPizzas.length !== 0) {
		// 		this.bol = false;
		// 	}else{
		// 		this.bol = true;
		// 	}
		// 	console.log(this.bol);
		// 	return this.bol;
		// }
		sum(){
			var total = 0;
			for (var key in this.caretPizzas) {
				total += this.caretPizzas[key].price*this.caretPizzas[key].num
			}
			return total;
		}
	},
	methods: {
		getNum(name,price){
			var clickNum = 1;
			var flag = false;

			this.caretPizzas.filter(function(item){
				if(item.name===name&&item.price===price) {
					flag = true;
					item.num ++;
				}
			})
			if(!flag) {
				this.caretPizzas.push({'name':name, 'price':price,'num':clickNum})
			}
		},
		reduceNum(item,index){
			item.num--;
			console.log(item.num)
			if(item.num<=0) {
				this.caretPizzas.splice(index,1)
			}
			// console.log(this.caretPizzas);
		},
		addNum(item) {
			item.num++;
		}
	}
}
</script>

<style lang="css" scoped>
td h6 {
	margin: 0;
}
.add {
	display: block;
	padding: 0 5px;
	width: 23px;
	border: 1px solid #ccc;
	color: #666;
}
.add:hover {
	text-decoration: none;
	color: #666;
}
</style>
