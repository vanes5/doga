
let button = document.getElementById("fel");
let list = [];

button.addEventListener("click", ()=>{

    let szam = document.getElementById("szam");
    szam = JSON.stringify(szam);
    szam = parseInt(szam);
    list.push(szam);
    let szoveg = "";

    list.forEach(szam => {
        szoveg += szam + ", ";
    });

    document.getElementById("lista").innerHTML = szoveg;


});
