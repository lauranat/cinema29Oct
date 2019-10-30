//Lista de variables
const buy = document.getElementById("submit");

const date = document.getElementById("date");
const name = document.getElementById("name");
const last_name = document.getElementById("last_name");
const cell_number = document.getElementById("cell_number");
const email = document.getElementById("email");


//const privacy = document.getElementById("privacy");
const privacy = document.getElementById("privacy");

//funcion para validar cuando se registre
buy.addEventListener("click", () => {
    // name.value == "" || last_name.value == "" || email.value == "" || password.value == "" || cell_number.value == "" || 

    if (date.value == "" || name.value == "" || last_name.value == "" || email.value == "" || privacy.checked == false)// falta privacy
    {
        date.setAttribute("required","true")
        name.setAttribute("required", "true");
        last_name.setAttribute("required", "true");
        email.setAttribute("required", "true");
        privacy.setAttribute("required", "true");
        // return false;
        alert("Por favor revise que haya ingresado todos sus datos y haya aceptado la politica de privacidad. ");
    }
    else {
        window.localStorage.setItem("name", document.getElementById("name").value); // variable para nombre en segunda pagina.
        window.localStorage.setItem("date", document.getElementById("date").value); // variable para fecha en segunda pagina.
    }
})