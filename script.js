let jelszoDoboz = document.getElementById("jelszo")
let general = document.getElementById("generalas")
let hosszusag = document.getElementById("sliHosszusag")
let phosszusag = document.getElementById("pHosszusag")
let masol = document.getElementById("masol")
let nagy = document.getElementById("nagy")
let kis = document.getElementById("kis")
let szam = document.getElementById("szam")
let specialis = document.getElementById("specialis")

let biztonsagiSzintek = {
    "Nagyon Gyenge": {
        "Minimális": 0,
        "Szín": ""
    },
    "Gyenge": {
        "Minimális": 0,
        "Szín": ""
    },
    "Közepes": {
        "Minimális": 0,
        "Szín": ""
    },
    "Erős": {
        "Minimális": 0,
        "Szín": ""
    },
    "Nagyon Erős": {
        "Minimális": 0,
        "Szín": ""
    },
}

function generalas() {
    let karakterek = ""

    if (nagy.checked) {
        for (var i = 65; i <= 91; i++) karakterek += String.fromCharCode(i)
    }
    if (kis.checked) {
        for (var i = 97; i <= 122; i++) karakterek += String.fromCharCode(i)
    }
    if (szam.checked) {
        for (var i = 48; i <= 57; i++) karakterek += String.fromCharCode(i)
    }
    if (specialis.checked) {
        for (var i = 33; i <= 47; i++) karakterek += String.fromCharCode(i)
        for (var i = 58; i <= 64; i++) karakterek += String.fromCharCode(i)
    }

    if (karakterek === "") {
        alert("Nem lehet jelszót generálni")
        return
    }

    let jelszoGeneral = ""

    for (let n = 0; n < hosszusag.value; n++) {
        jelszoGeneral += karakterek[Math.floor(Math.random() * karakterek.length)]
    }
    
    jelszoDoboz.innerText = jelszoGeneral
}

function frissitHosszusag() {
    phosszusag.innerText = hosszusag.value
}

function masolas() {
    navigator.clipboard.writeText(jelszoDoboz.innerText)
}

masol.addEventListener("click", masolas)
hosszusag.addEventListener("input", frissitHosszusag)
general.addEventListener("click", generalas)

frissitHosszusag()