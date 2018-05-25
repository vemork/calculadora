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
	var num = eval("1000*200");
	display.innerHTML  = num
	//console.log(eval((opera)));
}

var flag = true;
function pantalla(e){
	var display = document.getElementById("display");

	if ( e.id == "on" ){
		display.innerHTML  = "0";
		flag = true;
	}else{
		if ( display.innerHTML == "0" ){
			switch(e.id) {
			    case "menos":
			        display.innerHTML = "-";
			        flag = true;
			    break;
			    case "mas":
			        display.innerHTML = "+";
			        flag = true;
			    break;
			    case "por":
			        display.innerHTML = "*";
			        flag = true;
			    break;
			    case "dividido":
			        display.innerHTML = "/";
			        flag = true;
			    break;
			    case "punto":
			    	if ( flag ){
			    		display.innerHTML = display.innerHTML + ".";
			    		flag = false;
			    	   }
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
