function nhapdiem_059(){
    mssv = document.frmNhapDiem_059.txtMSSV_059.value;
    ht = document.frmNhapDiem_059.txtHTen_059.value;

    dtrr = document.frmNhapDiem_059.txtTRRac_059.value;
    sltrr = document.frmNhapDiem_059.slTRRac_059.value;

    dtkw = document.frmNhapDiem_059.txtTKWeb_059.value;
    sltkw = document.frmNhapDiem_059.slTKWeb_059.value;

    ddacsn = document.frmNhapDiem_059.txtDACSN_059.value;
    sldacsn = document.frmNhapDiem_059.slDACSN_059.value;

    ttc = eval(sltrr) + eval(sltkw)  + eval(sldacsn); 
    dtb = eval(dtrr*sltrr + dtkw*sltkw + ddacsn*sldacsn) / eval(ttc);

    if(mssv.length != 9){
        alert("Mã số sinh viên phải đúng 9 ký tự");
        document.frmNhapDiem_059.mssv.value="";
        document.frmNhapDiem_059.mssv.focus();
    }
    if(ht==""){
        alert("Bạn chưa nhập họ tên");
        document.frmNhapDiem_059.ht.focus();
    }
    else{
        document.getElementById("mssv").innerHTML = mssv;
        document.getElementById("ht").innerHTML = ht;
        if(dtrr==""){
            dtrr = 0;
            document.getElementById("dtrr").innerHTML = dtrr;
        }
        else{
            document.getElementById("dtrr").innerHTML = dtrr;
        }
        if(dtkw==""){
            dtkw = 0;
            document.getElementById("dtkw").innerHTML = dtkw;
        }
        else{
            document.getElementById("dtkw").innerHTML = dtkw;
        }
        if(ddacsn==""){
            ddacsn = 0;
            document.getElementById("ddacsn").innerHTML = ddacsn;
        }
        else{
            document.getElementById("ddacsn").innerHTML = ddacsn;
        }
        document.getElementById("dtb").innerHTML = dtb;
    }
}