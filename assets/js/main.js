var NevekListája = []
var rovártrue = document.getElementById("rovás").checked
var nev = document.getElementById("név").innerHTML
var valasztas = document.getElementById("választás").value

function Fogykos()
{
    NevekListája.push(nev)
    document.getElementById("kiir").innerHTML = NevekListája
}