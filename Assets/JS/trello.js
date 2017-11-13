function trello(){
	var input = document.createElement('input');
	var nodoText = document.createTextNode('Guardar');
	var container = document.getElementById('container')
	var btn = document.createElement('button');

	//Para agregar atributos:
	input.setAttribute('id','valor');

	//Nodos

	btn.appendChild(nodoText);
	container.appendChild(btn);
	container.appendChild(input);

	btn.addEventListener('click', function(){
		var list = document.getElementById('valor').value //Rescatar valor dentro del input
		document.getElementById('valor').value = "";
		var contiene = document.getElementById('contiene');
		var parrafo = document.createElement('p');
		var textNuevo = document.createTextNode(list);
		var add = document.createElement('a');
		add.setAttribute('href', '#')
		var textAdd = document.createTextNode('Añadir tarjeta');

		parrafo.appendChild(textNuevo);
		contiene.appendChild(parrafo);

		add.appendChild(textAdd);
		contiene.appendChild(add);

	add.addEventListener('click', function(){
		var textarea = document.createElement('textarea')
		var add = document.createElement('a')
		add.setAttribute('href', '#')
		var textAdd = document.createTextNode('Añadir tarjeta')

		add.appendChild(textAdd)
		contiene.appendChild(textarea)
		contiene.appendChild(add)
	})

	})

}