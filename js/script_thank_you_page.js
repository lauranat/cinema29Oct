const confirmed=document.getElementById("confirmed");


var name = window.localStorage.getItem("name");
var date = window.localStorage.getItem("date");
/* var date = window.localStorage.getItem("date");
var movie = window.localStorage.getItem("movie");
confirmed.innerHTML= name + ", te esperamos el " date + "para tu función de" + movie; */
confirmed.innerHTML= name + ", te esperamos el "+ date;