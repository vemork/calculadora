function reducir(event){
	// console.log(event);
	event.style.padding = "1%";
	this.pantalla(event);
}

function aumentar(event){
	// console.log(event);
	event.style.padding = "0px";
}

function calcular(opera){
	display.innerHTML  = eval((opera));
	//console.log(eval((opera)));
}

function pantalla(e){
	var display = document.getElementById("display");
	var flag = true;

	if ( e.id == "on" ){
		display.innerHTML  = "0";
	}else{
		if ( display.innerHTML == 0 ){

			switch(e.id) {
			    case "menos":
			        display.innerHTML = "-";
			    break;
			    case "mas":
			        display.innerHTML = "+";
			    break;
			    case "por":
			        display.innerHTML = "*";
			    break;
			    case "dividido":
			        display.innerHTML = "/";
			    break;
			    case "punto":
			     	display.innerHTML = display.innerHTML + ".";
			     	flag =  false;
			    break;
			    default:
			        display.innerHTML = e.id;
			}
			
		}else{
			switch(e.id) {
			    case "menos":
			        display.innerHTML = display.innerHTML +  "-";
			        flag = true;
			    break;
			    case "mas":
			         display.innerHTML = display.innerHTML +  "+";
			         flag = true;
			    break;
			    case "por":
			        display.innerHTML = display.innerHTML +  "*";
			        flag = true;
			    break;
			    case "dividido":
			        display.innerHTML = display.innerHTML +  "/";
			        flag = true;
			    break;
			    case "igual":
			      this.calcular(display.innerHTML);
			    break;
			    case "punto":
			    	console.log(flag);
			    	if ( flag ){ 
			        	display.innerHTML = display.innerHTML +  ".";
			        	flag = false;
			    	}
			    break;
			    default:
			        display.innerHTML = display.innerHTML + e.id;
			}
			
		}	
	}
	
}
