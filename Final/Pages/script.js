vat item = document.getElementById("image");
item.addEventLstener("mouseover", func, false);
item.addEventLstener("mouseout", func1, false);

function func() {
	document.getElementById("text").setAttribute("style", "display:block;")
}

function func1() {
	document.getElementById("text").setAttribute("style", "display:none;")
}