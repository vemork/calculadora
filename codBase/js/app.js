function reducir(event){
	console.log(event);
}

// document.getElementById("on").addEventListener("onmousedown", function(event){
//     console.log("wow");
// });
document.addEventListener("mousedown", function(event){
	event.path[0].style.height = "15%";
	console.log(event);
});

document.addEventListener("mouseup", function(event){
	event.path[0].style.height = "62.91px";
	// event.path[0].firstElementChild.style.height = "62.91px";
	// console.log(event.path[0].firstElementChild);
});
