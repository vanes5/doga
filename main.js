
let button = document.getElementById("fel");
let list = [];


button.addEventListener("click", ()=>{

    let sz = parseInt(document.getElementById("szam").value);
    list.push(sz);
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

    document.getElementById("legkisebb").innerHTML = "A legkisebb szám a listában: " + legkis;
})
