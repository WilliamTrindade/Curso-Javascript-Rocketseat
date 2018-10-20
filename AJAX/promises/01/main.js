//uma função que deixa trabalhar com .then e .catch
var minhaPromise = function(){
	return new Promise(function(resolve, reject) {

		var xhr = new XMLHttpRequest();

		//pego os dados da api de users do github
		xhr.open('GET', 'https://api.github.com/users/WilliamTrindade');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if(xhr.status === 200){
					resolve(JSON.parse(xhr.responseText))
				}else{
					reject('Erro na Requisição')
				}
				
			}
		}


	})
}

minhaPromise()
 .then(function(response){
 	console.log(response)
 })
 .catch(function(error){
 	console.warn(error)
 })
