// redir
function clk(sde) {
    window.location.href = sde;
}
// enlaces
function rk(lru){
    // declarar
    if (lru && lru !== '#'){
        window.location.href = lru;
    }
}
//nav  
let menuVisible = false;
function showAndHideM() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function selecionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//tab about
function openTab(tabName) {
    // Ocultar todas las pestañas
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
}
// 
function gogleMap(lp){
    // declarar
    if (lp && lp !== '#'){
        window.location.href = lp;
    }
}
