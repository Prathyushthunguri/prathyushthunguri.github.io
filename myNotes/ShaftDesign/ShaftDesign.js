function Torsion(){
    const Span_len = parseFloat(document.getElementById("Span_len").value)||0;
    const Power_hp = parseFloat(document.getElementById("Power_hp").value)||0;
    const Shaft_rpm = parseFloat(document.getElementById("Shaft_rpm").value)||0;
    const Mod_rigidity = parseFloat(document.getElementById("Mod_rigidity").value)||0;
    const theta_deg = parseFloat(document.getElementById("theta_deg").value)||0;

    const Power_watt = Power_hp*745.699872;
    document.getElementById("Power_watt").value = Power_watt.toFixed(0);

    const Twist_moment_Nm = Power_watt*60/(2*3.14*Shaft_rpm);
    document.getElementById("Twist_moment_Nm").value = Twist_moment_Nm.toFixed(0);

    const Twist_moment_Nmm = Twist_moment_Nm*1000;
    document.getElementById("Twist_moment_Nmm").value = Twist_moment_Nmm.toFixed(0);

    const theta_rad = (theta_deg*3.14)/180;
    document.getElementById("theta_rad").value = theta_rad.toFixed(4);

    const Dia = ((32*Twist_moment_Nmm*Span_len)/(3.14*Mod_rigidity*theta_rad))**(0.25);
    document.getElementById("Dia").value = Dia.toFixed(1);
}