var campofiltro = document.querySelector("#pesquisa");
campofiltro.addEventListener("input", function(){

var musicas = document.querySelectorAll(".musica");
if (this.value.lenght>0){
	for (var i = 0; i<musicas.lenght;i++){
		var musica = musicas[i];
		var tdmusica = musica.querySelector(".info-musica");
		var music = tdmusica.textContent;
		var expressao = new RegExp(this.value,"i");
		if (!expressao.test(music)){
			musica.classList.add("invisivel");
			console.log("entrei aqui");
		}else{
			musica.classList.remove("invisivel");
		}
	}
}else {
	for (i=0; i<musicas.lenght;i++){
		var musica = musicas[i];
		musica.classList.remove("invisivel");
	}
}

});