
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

document.getElementById("legkis").addEventListener("click", ()=>{
    let legkis = list[0];

    list.forEach(szam =>{
        if(szam < legkis){
            legkis = szam;
        }
    });

    document.getElementById("legkis").innerHTML = "A legkisebb szám a listában: " + legkis;
})
