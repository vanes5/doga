
let button = document.getElementById("fel");

button.addEventListener("click", ()=>{
    let list = [];

    let szam = document.getElementById("szam");
    list.push(szam);
    let szoveg = "";

    list.forEach(szam => {
        szoveg += szam + ", ";
    });

    document.getElementById("lista").innerHTML = szoveg;


});