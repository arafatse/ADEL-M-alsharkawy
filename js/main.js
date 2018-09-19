var menuToggle = true;

function openMenu(){
	if (menuToggle) {document.getElementById('nav-menu').style.transform = "scale(1)"; menuToggle = false;}
	else {document.getElementById('nav-menu').style.transform = "scaleY(0)"; menuToggle = true;}
	
}
