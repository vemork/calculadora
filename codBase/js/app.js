var flag = true;

var calculadora = {

reducir : function (event){
	// console.log(event);
	event.style.padding = "1%";
	this.pantalla(event);
},

aumentar : function (event){
	// console.log(event);
	event.style.padding = "0px";
},

calcular : function (opera){
	var num = eval(opera);
	var n = num.toString();

	if ( n.length < 8 ){
		display.innerHTML  =  n;
	}else{
		display.innerHTML  =  n.slice(0, 8);
	}
},

pantalla : function (e) {
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
			    case "sign":
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
			    	  if ( flag  ){
			    		display.innerHTML = display.innerHTML +  ".";
			    		flag = false;
			    	   }
			    break;
			    case "sign":
			    	if ( display.innerHTML.indexOf("-") >= 0){
			    		display.innerHTML = display.innerHTML.substring(1, display.innerHTML.length);
			    	}else{
			    		display.innerHTML = "-" + display.innerHTML;
			    	}
			    break;
			    default:
			        display.innerHTML = display.innerHTML + e.id;
			}
			
		}	
	}
	
}

}

function reducir(event){
	this.calculadora.reducir(event);
}

function aumentar(event){
	this.calculadora.aumentar(event);
}

function calcular(opera){
	this.calculadora.calcular(opera);
}


function pantalla(e){
	this.calculadora.pantalla(e);
}

