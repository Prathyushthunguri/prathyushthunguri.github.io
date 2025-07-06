const Data = {
    "6":{
        "NBinch": "1/8",
        "OD": "10.3",
        "Thk":[0, 1.24, 0, 1.45, 1.73, 0, 2.41, 0, 0, 0, 0, 0, 0, 0],
    }
}

function PipeSizing(){
    const NBmm = document.getElementById("NB_mm").value;
    const Sch = document.getElementById("Sch").value;
    const NBinch = document.getElementById("NB_inch");
    const OD = document.getElementById("OD");
    const Thick = document.getElementById("Thk");
    if (NB_mm){
        const selectedData = Data[NBmm];
        NBinch.value = selectedData.NBinch;
        OD.value = selectedData.OD;
        Thick.value = selectedData.Thk[Sch];
    }
}

function PipeID(){
    const OD = parseFloat(document.getElementById("OD").value)||0;
    const Thk = parseFloat(document.getElementById("Thk").value)||0;

    const ID = OD-2*Thk;
    document.getElementById("ID").value = ID;
}