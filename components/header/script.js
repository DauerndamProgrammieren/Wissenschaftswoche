import waitForElm from "/utils/waitForElemnt.js";

!async function(){

await waitForElm("#header-background");
var butRaetsel1 = document.getElementById("q1");
var butRaetsel2 = document.getElementById("q2");
var butRaetsel3 = document.getElementById("q3");
var butRaetsel3Grafik = document.getElementById("Burgstaller");
var butUbersicht = document.getElementById("ubersicht");
var mainSpace = document.getElementById("header-background");

//functions

butRaetsel1.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/components/frage1/index.html");
}

butRaetsel2.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/components/frage2/index.html");
}

butRaetsel3.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/components/frage3/index.html");
}

butUbersicht.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/components/index/index.html");
}

butRaetsel3Grafik.onclick=()=>{
    document.querySelector("#main").setAttribute("src", "/components/frage3-stat/index.html");
}

if(mainSpace.offsetHeight <= 3000+"px"){
    butRaetsel1.style.minWidth="100%";
    butRaetsel2.style.minHeight="100%";
    butRaetsel3.style.minHeight="100%";
    butRaetsel3Grafik.style.minHeight="100%";
    butUbersicht.style.minHeight="100%";
}

}()