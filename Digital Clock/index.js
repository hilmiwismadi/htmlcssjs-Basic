const elmnJam = document.getElementById("Jam")
const elmnMnt = document.getElementById("Menit")
const elmnDtk = document.getElementById("Detik")


function jam_gerak(){
    let j = new Date().getHours()
    let m = new Date().getMinutes()
    let d = new Date().getSeconds()

    j = j < 10 ? "0" + j : j;
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    elmnJam.innerText = j;
    elmnMnt.innerText = m;
    elmnDtk.innerText = d;
    
    setTimeout(()=>{
        jam_gerak()
    },1000)
}

jam_gerak()