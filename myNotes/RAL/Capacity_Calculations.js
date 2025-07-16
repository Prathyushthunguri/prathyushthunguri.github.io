function RotorVol(){
    const Rotor_OD = parseFloat(document.getElementById("Rotor_OD").value)||0;
    const Rotor_ID = parseFloat(document.getElementById("Rotor_ID").value)||0;
    const Rotor_Width = parseFloat(document.getElementById("Rotor_Width").value)||0;
    const Vane_Thk = parseFloat(document.getElementById("Vane_Thk").value)||0;
    const Vane_Num = parseFloat(document.getElementById("Vane_Num").value)||0;

    const Area_OD = 3.14*Rotor_OD*Rotor_OD/4000000;
    document.getElementById("Area_OD").value = Area_OD.toFixed(4);

    const Area_ID = 3.14*Rotor_ID*Rotor_ID/4000000;
    document.getElementById("Area_ID").value = Area_ID.toFixed(4);

    const Area_Vanes = Rotor_Width*(Rotor_OD-Rotor_ID)/2000000;
    document.getElementById("Area_Vanes").value = Area_Vanes.toFixed(4);

    const Vol_Rotor_Lit = Rotor_Width*(Area_OD-Area_ID) - Area_Vanes*Vane_Thk*Vane_Num;
    const Vol_Rotor = Vol_Rotor_Lit/1000;
    document.getElementById("Vol_Rotor").value = Vol_Rotor.toFixed(4);
    document.getElementById("Vol_Rotor_Lit").value = Vol_Rotor_Lit.toFixed(1);
}

function RotorRPM(){
    const Rotor_Vol_rpm = parseFloat(document.getElementById("Rotor_Vol_rpm").value)||0;
    const BulkDensity_rpm = parseFloat(document.getElementById("BulkDensity_rpm").value)||0;
    const Filling_rpm = parseFloat(document.getElementById("Filling_rpm").value)||0;
    const Capacity_rpm = parseFloat(document.getElementById("Capacity_rpm").value)||0;

    const Rotor_RPM_rpm = Capacity_rpm/(60*BulkDensity_rpm*Filling_rpm/100*Rotor_Vol_rpm/1000);
    document.getElementById("Rotor_RPM_rpm").value = Rotor_RPM_rpm.toFixed(1)
}

function Capacity(){
    const Rotor_Vol_cap = parseFloat(document.getElementById("Rotor_Vol_cap").value)||0;
    const BulkDensity_cap = parseFloat(document.getElementById("BulkDensity_cap").value)||0;
    const Filling_cap = parseFloat(document.getElementById("Filling_cap").value)||0;
    const Rotor_RPM_cap = parseFloat(document.getElementById("Rotor_RPM_cap").value)||0;

    const Capacity_cap = (Filling_cap/100)*BulkDensity_cap*(Rotor_RPM_cap*60)*(Rotor_Vol_cap/1000);
    document.getElementById("Capacity_cap").value = Capacity_cap.toFixed(1)
}