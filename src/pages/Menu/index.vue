<template lang="html">
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-6">
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
						<td><h6>{pizza}</h6></td>
					</tr>
					<tr v-for='item in pizza.options' :key='item.size'>
						<td>{item.size}寸</td>
						<td>{item.price}RMB</td>
						<td>
							<input type="number">
							<a class="add" href="#">+</a>
						</td>
					</tr>
				</tbody>
  			</table>
  		</div>
  		<div class="col-xs-12 col-sm-6">

  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	name: 'appMenu',
	data() {
		return {
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
	methods: {

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
