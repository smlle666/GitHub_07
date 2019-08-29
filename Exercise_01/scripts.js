function show_nav() {
    navbar = document.getElementsByClassName("navbar")[0];
    if (navbar.style.display == "none" || navbar.style.display == "") {
        navbar.style = "display: inline-block; animation: move_nav 1s 1 ease-in-out;";
        document.getElementsByClassName("show-nav")[0].style = "display: inline-block; animation: move_nav 1s 1 ease-in-out; border: none; background-color: white; transform: rotate(180deg); transition-duration:1s;outline: none;";
    } else {
        navbar.style = "display: inline-block; animation: hide_nav 1s 1 ease-in-out;";
        document.getElementsByClassName("show-nav")[0].style = "display: inline-block; animation: hide_button 1s 1 ease-in-out; border: none; background-color: white;outline: none;";
        setTimeout('navbar.style = "display: none;";', 1000);
    }
}

function form_appraise(form) {
    if ((form.elements["title"].value.trim().length == 0) || (isNaN(form.elements["year"].value.split('.').join('s')))) {
        btn = document.querySelector('input[type="submit"]');
        btn.disabled = true;
        btn.style = "background-color: red; transition-duration: 2s;";
    }
    if ((form.elements["title"].value == "World of Tanks") && (form.elements["year"].value == "2010")) {
        img = document.getElementsByClassName("scalable-image")[0];
        img.style = "width: 300px; animation: easter_egg 10s infinite linear;"
    }   
    return false;
}