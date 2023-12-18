document.addEventListener("DOMContentLoaded", ()=>{
    lista = [];
})

document.getElementById("gomb").addEventListener("click", ()=>{
    szam = document.getElementById("szam");
    lista.add(szam);
    szoveg = "";

    lista.forEach(szam => {
        szoveg += szam + ", ";
    });

    document.getElementById("lista").innerHTML = szoveg;


})