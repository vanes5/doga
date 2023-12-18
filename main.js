
document.getElementById("gomb").addEventListener("click", ()=>{
    let list = [];

    let szam = document.getElementById("szam");
    list.add(szam);
    let szoveg = "";

    list.forEach(szam => {
        szoveg += szam + ", ";
    });

    document.getElementById("lista").innerHTML = szoveg;


});