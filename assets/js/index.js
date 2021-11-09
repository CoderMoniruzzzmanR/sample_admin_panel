// let toggle_bar = document.querySelector(".menu-bar-icon");
// let sidebar = document.querySelector(".sidebar");
// let main_body = document.querySelector(".wrapper");
// toggle_bar.addEventListener("click", function(){
//     sidebar.classList.toggle("sidebaractive");
//     main_body.classList.toggle("main-body");
// });

var dark_icon =  document.getElementById("dark-icon");
dark_icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        dark_icon.src = "assets/img/sunny-outline.svg";
        dark_icon.title = "Light theme";
    }
    else{
        dark_icon.src = "assets/img/moon-outline.svg";
    }
}