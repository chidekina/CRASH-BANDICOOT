var loading;

function loadGame(){
    loading = setTimeout(showPage, 7000);
}

function showPage(){
    document.getElementById("animation").style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("crash__trilogy").style.display = "block";
}