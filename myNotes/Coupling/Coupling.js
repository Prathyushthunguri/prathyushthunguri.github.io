function TorquekW(){
    const Power_kW = parseFloat(document.getElementById("Power_kW").value)||0;
    const Rpm = parseFloat(document.getElementById("Rpm").value)||0;
    const FOS = parseFloat(document.getElementById("FOS").value)||0;

    const Tor_kW = 9550*Power_kW/Rpm;
    const Tor_Comp_kW = Tor_kW*FOS;

    document.getElementById("Tor_kW").value = Tor_kW.toFixed(2);
    document.getElementById("Tor_Comp_kW").value = Tor_Comp_kW.toFixed(2);
}

function TorqueHp(){
    const Power_Hp = parseFloat(document.getElementById("Power_Hp").value)||0;
    const Rpm = parseFloat(document.getElementById("Rpm").value)||0;
    const FOS = parseFloat(document.getElementById("FOS").value)||0;

    const Power = Power_Hp*0.745;
    const Tor_Hp = 9550*Power/Rpm;
    const Tor__Comp_Hp = Tor_Hp*FOS;

    document.getElementById("Tor_Hp").value = Tor_Hp.toFixed(2);
    document.getElementById("Tor__Comp_Hp").value = Tor__Comp_Hp.toFixed(2);
}