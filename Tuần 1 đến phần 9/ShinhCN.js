

function ShinhCN(){
    let inputwidth= parseInt(document.getElementById("txtWidth").value)
    let inputheight= parseInt(document.getElementById("txtHeight").value)
    let S=inputwidth*inputheight

    document.getElementById("xuatKQ").innerHTML='Diện tích hình chữ nhật:'+S
}