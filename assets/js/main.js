var szam = 1;

function Fogykos()
{
    var rovártrue = document.getElementById("rovás")
    var nev = document.getElementById("név").value
    var valasztas = document.getElementById("választás").value
    if (rovártrue.checked)
    {
        
        document.getElementById("kiir").innerHTML += '<option onclick="torol()" id="'+szam+'">'+nev+" "+valasztas+" !!!"+'</option>'
        szam++
    } else
    {
        document.getElementById("kiir").innerHTML += '<option onclick="torol()" id="'+szam+'">'+nev+" "+valasztas+'</option>'
        szam++
    }
}

function torol()
{
    document.getElementById("kiir").remove(document.getElementById("kiir").selectedIndex)
}
