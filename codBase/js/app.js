function reducir(event){
	// console.log(event);
	event.style.padding = "1%";
	this.pantalla(event);
}

function aumentar(event){
	// console.log(event);
	event.style.padding = "0px";
}

function pantalla(e){
	var display = document.getElementById("display");

	if ( e.id == "on" ){
		display.innerHTML  = "0";
	}else{
		if ( display.innerHTML == 0 ){
			display.innerHTML = e.id;
		}else{
			display.innerHTML = display.innerHTML + e.id;
		}	
	}
	
}
