//uma função que deixa trabalhar com .then e .catch
//no caso com a lib diminui o código
//permite todos os tipos de envio(get, post, etc.)
axios.get('https://api.github.com/users/WilliamTrindsade')
 .then(function(response){
 	console.log(response)
 })
 .catch(function(error){
 	console.warn(error)
 })