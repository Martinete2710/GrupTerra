let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
///modales

var divInteres = document.getElementById("abrirModal1");
var modal1 = document.getElementById("miModalCamiones");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal1.style.display = "block";
});
function cerrarModal1() {
    document.getElementById("miModalCamiones").style.display = "none";
}

/////maquina
var divInteres = document.getElementById("abrirModal2");
var modal2 = document.getElementById("miModalMaquina");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal2.style.display = "block";
});
function cerrarModal2() {
    document.getElementById("miModalMaquina").style.display = "none";
}
//Geotecnia
var divInteres = document.getElementById("abrirModal3");
var modal3 = document.getElementById("miModalGeotecnia");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal3.style.display = "block";
});
function cerrarModal3() {
    document.getElementById("miModalGeotecnia").style.display = "none";
}
//construccion
var divInteres = document.getElementById("abrirModal4");
var modal4 = document.getElementById("miModalConstruccion");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal4.style.display = "block";
});
function cerrarModal4() {
    document.getElementById("miModalConstruccion").style.display = "none";
}
///ferroscan
var divInteres = document.getElementById("abrirModal5");
var modal5 = document.getElementById("miModalFerro");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal5.style.display = "block";
});
function cerrarModal5() {
    document.getElementById("miModalFerro").style.display = "none";
}
//geologia
var divInteres = document.getElementById("abrirModal6");
var modal6 = document.getElementById("miModalGeolo");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal6.style.display = "block";
});
function cerrarModal6() {
    document.getElementById("miModalGeolo").style.display = "none";
}
//geofisica
var divInteres = document.getElementById("abrirModal7");
var modal7 = document.getElementById("miModalGeofisica");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal7.style.display = "block";
});
function cerrarModal7() {
    document.getElementById("miModalGeofisica").style.display = "none";
}
//topografia
var divInteres = document.getElementById("abrirModal8");
var modal8 = document.getElementById("miModalTopo");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal8.style.display = "block";
});
function cerrarModal8() {
    document.getElementById("miModalTopo").style.display = "none";
}
// demolicion
var divInteres = document.getElementById("abrirModal9");
var modal9 = document.getElementById("miModalDemo");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal9.style.display = "block";
});
function cerrarModal9() {
    document.getElementById("miModalDemo").style.display = "none";
}
////busqueda de agua 
var divInteres = document.getElementById("abrirModal10");
var modal10 = document.getElementById("miModalAgua");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal10.style.display = "block";
});
function cerrarModal10() {
    document.getElementById("miModalAgua").style.display = "none";
}
////Gpr
var divInteres = document.getElementById("abrirModal11");
var modal11 = document.getElementById("miModalGpr");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal11.style.display = "block";
});
function cerrarModal11() {
    document.getElementById("miModalGpr").style.display = "none";
}
//esclerometro
var divInteres = document.getElementById("abrirModal12");
var modal12 = document.getElementById("miModalEscle");

// Asigna un evento de clic al div
divInteres.addEventListener("click", function() {
    // Muestra el modal
    modal12.style.display = "block";
});
function cerrarModal12() {
    document.getElementById("miModalEscle").style.display = "none";
}
