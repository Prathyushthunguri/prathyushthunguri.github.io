function pressureUnits(){
    const Vin_atm = parseFloat(document.getElementById("Vin_atm").value)||0;
    const Vin_Kgcm2 = parseFloat(document.getElementById("Vin_Kgcm2").value)||0;
    const Vin_psi = parseFloat(document.getElementById("Vin_psi").value)||0;
    const Vin_mmHg = parseFloat(document.getElementById("Vin_mmHg").value)||0;
    const Vin_mmH2O = parseFloat(document.getElementById("Vin_mmH2O").value)||0;
    const Vin_mbar = parseFloat(document.getElementById("Vin_mbar").value)||0;

    const Vout_atm_atm = Vin_atm;
    const Vout_atm_Kgcm2 = Vin_atm*1.033;
    const Vout_atm_psi = Vin_atm*14.7;
    const Vout_atm_mmHg = Vin_atm*760;
    const Vout_atm_mmH2O = Vin_atm*10340;
    const Vout_atm_mbar = Vin_atm*1013;

    document.getElementById("Vout_atm_atm").value = Vout_atm_atm;
    document.getElementById("Vout_atm_Kgcm2").value = Vout_atm_Kgcm2;
    document.getElementById("Vout_atm_psi").value = Vout_atm_psi;
    document.getElementById("Vout_atm_mmHg").value = Vout_atm_mmHg;
    document.getElementById("Vout_atm_mmH2O").value = Vout_atm_mmH2O;
    document.getElementById("Vout_atm_mbar").value = Vout_atm_mbar;

    const Vout_Kgcm2_atm = Vin_Kgcm2*0.9678;
    const Vout_Kgcm2_Kgcm2 = Vin_Kgcm2;
    const Vout_Kgcm2_psi = Vin_Kgcm2*14.22;
    const Vout_Kgcm2_mmHg = Vin_Kgcm2*735.6;
    const Vout_Kgcm2_mmH2O = Vin_Kgcm2*10010;
    const Vout_Kgcm2_mbar = Vin_Kgcm2*980.7;

    document.getElementById("Vout_Kgcm2_atm").value = Vout_Kgcm2_atm;
    document.getElementById("Vout_Kgcm2_Kgcm2").value = Vout_Kgcm2_Kgcm2;
    document.getElementById("Vout_Kgcm2_psi").value = Vout_Kgcm2_psi;
    document.getElementById("Vout_Kgcm2_mmHg").value = Vout_Kgcm2_mmHg;
    document.getElementById("Vout_Kgcm2_mmH2O").value = Vout_Kgcm2_mmH2O;
    document.getElementById("Vout_Kgcm2_mbar").value = Vout_Kgcm2_mbar;

    const Vout_psi_atm = Vin_psi*0.06805;
    const Vout_psi_Kgcm2 = Vin_psi*0.07031;
    const Vout_psi_psi = Vin_psi;
    const Vout_psi_mmHg = Vin_psi*51.71;
    const Vout_psi_mmH2O = Vin_psi*703.7;
    const Vout_psi_mbar = Vin_psi*68.95;

    document.getElementById("Vout_psi_atm").value = Vout_psi_atm;
    document.getElementById("Vout_psi_Kgcm2").value = Vout_psi_Kgcm2;
    document.getElementById("Vout_psi_psi").value = Vout_psi_psi;
    document.getElementById("Vout_psi_mmHg").value = Vout_psi_mmHg;
    document.getElementById("Vout_psi_mmH2O").value = Vout_psi_mmH2O;
    document.getElementById("Vout_psi_mbar").value = Vout_psi_mbar;

    const Vout_mmHg_atm = Vin_mmHg*0.00136;
    const Vout_mmHg_Kgcm2 = Vin_mmHg*0.001316;
    const Vout_mmHg_psi = Vin_mmHg*0.01934;
    const Vout_mmHg_mmHg = Vin_mmHg;
    const Vout_mmHg_mmH2O = Vin_mmHg*13.6;
    const Vout_mmHg_mbar = Vin_mmHg*1.333;

    document.getElementById("Vout_mmHg_atm").value = Vout_mmHg_atm;
    document.getElementById("Vout_mmHg_Kgcm2").value = Vout_mmHg_Kgcm2;
    document.getElementById("Vout_mmHg_psi").value = Vout_mmHg_psi;
    document.getElementById("Vout_mmHg_mmHg").value = Vout_mmHg_mmHg;
    document.getElementById("Vout_mmHg_mmH2O").value = Vout_mmHg_mmH2O;
    document.getElementById("Vout_mmHg_mbar").value = Vout_mmHg_mbar;

    const Vout_mmH2O_atm = Vin_mmH2O*0.000967;
    const Vout_mmH2O_Kgcm2 = Vin_mmH2O*0.0000999;
    const Vout_mmH2O_psi = Vin_mmH2O*0.001421;
    const Vout_mmH2O_mmHg = Vin_mmH2O*0.07349;
    const Vout_mmH2O_mmH2O = Vin_mmH2O;
    const Vout_mmH2O_mbar = Vin_mmH2O*0.098;

    document.getElementById("Vout_mmH2O_atm").value = Vout_mmH2O_atm;
    document.getElementById("Vout_mmH2O_Kgcm2").value = Vout_mmH2O_Kgcm2;
    document.getElementById("Vout_mmH2O_psi").value = Vout_mmH2O_psi;
    document.getElementById("Vout_mmH2O_mmHg").value = Vout_mmH2O_mmHg;
    document.getElementById("Vout_mmH2O_mmH2O").value = Vout_mmH2O_mmH2O;
    document.getElementById("Vout_mmH2O_mbar").value = Vout_mmH2O_mbar;

    const Vout_mbar_atm = Vin_mbar*0.0009868;
    const Vout_mbar_Kgcm2 = Vin_mbar*0.0102;
    const Vout_mbar_psi = Vin_mbar*0.0145;
    const Vout_mbar_mmHg = Vin_mbar*0.7501;
    const Vout_mbar_mmH2O = Vin_mbar*10.21;
    const Vout_mbar_mbar = Vin_mbar;

    document.getElementById("Vout_mbar_atm").value = Vout_mbar_atm;
    document.getElementById("Vout_mbar_Kgcm2").value = Vout_mbar_Kgcm2;
    document.getElementById("Vout_mbar_psi").value = Vout_mbar_psi;
    document.getElementById("Vout_mbar_mmHg").value = Vout_mbar_mmHg;
    document.getElementById("Vout_mbar_mmH2O").value = Vout_mbar_mmH2O;
    document.getElementById("Vout_mbar_mbar").value = Vout_mbar_mbar;
}

function LengthUnits(){
    const Vin_ft = parseFloat(document.getElementById("Vin_ft").value)||0;
    const Vin_m = parseFloat(document.getElementById("Vin_m").value)||0;
    const Vin_inch = parseFloat(document.getElementById("Vin_inch").value)||0;
    const Vin_mm = parseFloat(document.getElementById("Vin_mm").value)||0;

    const Vout_ft_ft = Vin_ft;
    const Vout_ft_m = Vin_ft*0.3048;
    const Vout_ft_inch = Vin_ft*12;
    const Vout_ft_mm = Vin_ft*304.8;

    document.getElementById("Vout_ft_ft").value = Vout_ft_ft;
    document.getElementById("Vout_ft_m").value = Vout_ft_m;
    document.getElementById("Vout_ft_inch").value = Vout_ft_inch;
    document.getElementById("Vout_ft_mm").value = Vout_ft_mm;

    const Vout_m_ft = Vin_m*3.2808;
    const Vout_m_m = Vin_m;
    const Vout_m_inch = Vin_m*39.3701;
    const Vout_m_mm = Vin_m*1000;

    document.getElementById("Vout_m_ft").value = Vout_m_ft;
    document.getElementById("Vout_m_m").value = Vout_m_m;
    document.getElementById("Vout_m_inch").value = Vout_m_inch;
    document.getElementById("Vout_m_mm").value = Vout_m_mm;

    const Vout_inch_ft = Vin_inch*0.0833;
    const Vout_inch_m = Vin_inch*0.0254;
    const Vout_inch_inch = Vin_inch;
    const Vout_inch_mm = Vin_inch*25.4;

    document.getElementById("Vout_inch_ft").value = Vout_inch_ft;
    document.getElementById("Vout_inch_m").value = Vout_inch_m;
    document.getElementById("Vout_inch_inch").value = Vout_inch_inch;
    document.getElementById("Vout_inch_mm").value = Vout_inch_mm;

    const Vout_mm_ft = Vin_mm*0.0033;
    const Vout_mm_m = Vin_mm*0.001;
    const Vout_mm_inch = Vin_mm*0.0394;
    const Vout_mm_mm = Vin_mm;

    document.getElementById("Vout_mm_ft").value = Vout_mm_ft;
    document.getElementById("Vout_mm_m").value = Vout_mm_m;
    document.getElementById("Vout_mm_inch").value = Vout_mm_inch;
    document.getElementById("Vout_mm_mm").value = Vout_mm_mm;
}

function WeightUnits(){
    const Vin_pound = parseFloat(document.getElementById("Vin_pound").value)||0;
    const Vin_Kg = parseFloat(document.getElementById("Vin_Kg").value)||0;

    const Vout_pound_pound = Vin_pound;
    const Vout_pound_Kg = Vin_pound*0.454;
    const Vout_Kg_pound = Vin_Kg*2.203;
    const Vout_Kg_Kg = Vin_Kg;

    document.getElementById("Vout_pound_pound").value = Vout_pound_pound;
    document.getElementById("Vout_pound_Kg").value = Vout_pound_Kg;
    document.getElementById("Vout_Kg_pound").value = Vout_Kg_pound;
    document.getElementById("Vout_Kg_Kg").value = Vout_Kg_Kg;
}

function PowerUnits(){
    const Vin_Hp = parseFloat(document.getElementById("Vin_Hp").value)||0;
    const Vin_kW = parseFloat(document.getElementById("Vin_kW").value)||0;

    const Vout_Hp_Hp = Vin_Hp;
    const Vout_Hp_kW = Vin_Hp*0.745;
    const Vout_kW_Hp = Vin_kW*1.341;
    const Vout_kW_kW = Vin_kW;

    document.getElementById("Vout_Hp_Hp").value = Vout_Hp_Hp;
    document.getElementById("Vout_Hp_kW").value = Vout_Hp_kW;
    document.getElementById("Vout_kW_Hp").value = Vout_kW_Hp;
    document.getElementById("Vout_kW_kW").value = Vout_kW_kW;
}

function DensityUnits(){
    const Vin_lbscuft = parseFloat(document.getElementById("Vin_lbscuft").value)||0;
    const Vin_Kgm3 = parseFloat(document.getElementById("Vin_Kgm3").value)||0;

    const Vout_lbscuft_lbscuft = Vin_lbscuft;
    const Vout_lbscuft_Kgm3 = Vin_lbscuft*16.01846;
    const Vout_Kgm3_lbscuft = Vin_Kgm3/16.01846;
    const Vout_Kgm3_Kgm3 = Vin_Kgm3;

    document.getElementById("Vout_lbscuft_lbscuft").value = Vout_lbscuft_lbscuft;
    document.getElementById("Vout_lbscuft_Kgm3").value = Vout_lbscuft_Kgm3;
    document.getElementById("Vout_Kgm3_lbscuft").value = Vout_Kgm3_lbscuft;
    document.getElementById("Vout_Kgm3_Kgm3").value = Vout_Kgm3_Kgm3;
}

function TempUnits(){
    const Vin_degF = parseFloat(document.getElementById("Vin_degF").value)||0;
    const Vin_degC = parseFloat(document.getElementById("Vin_degC").value)||0;

    const Vout_degF_degF = Vin_degF;
    const Vout_degF_degC = (Vin_degF-32)*5/9;
    const Vout_degC_degF = Vin_degC*9/5+32;
    const Vout_degC_degC = Vin_degC;

    document.getElementById("Vout_degF_degF").value = Vout_degF_degF;
    document.getElementById("Vout_degF_degC").value = Vout_degF_degC.toFixed(2);
    document.getElementById("Vout_degC_degF").value = Vout_degC_degF.toFixed(2);
    document.getElementById("Vout_degC_degC").value = Vout_degC_degC;
}