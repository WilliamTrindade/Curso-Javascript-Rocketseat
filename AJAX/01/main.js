//AJAX
//Asynchronous JavaScript and XML
var xhr = new XMLHttpRequest();

//pego os dados da api de users do github
xhr.open('GET', 'https://api.github.com/users/WilliamTrindade');
xhr.send(null);

xhr.onreadystatechange = function(){
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText))
	}
}
