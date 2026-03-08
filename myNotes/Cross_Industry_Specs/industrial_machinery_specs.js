const industries = [
    { label: "Food & Beverage",   cls: "food"   },
    { label: "Pharmaceutical",    cls: "pharma" },
    { label: "Chemical",          cls: "chem"   },
    { label: "Paints & Coatings", cls: "paint"  },
    { label: "Minerals & Mining", cls: "min"    },
];

const tables = {
moc: [
    ["Primary Body MOC","SS 304L / SS 316L (FDA compliant)","SS 316L mandatory (ASME BPE)","SS 316L, Hastelloy C-276, Alloy 20, PTFE-lined CS","SS 304/316, Epoxy-lined CS, FRP, HDPE-lined","Cast Iron (CI), WCB, Hardox, Hi-Chrome Iron"],
    ["Shaft / Impeller MOC","SS 316L, SS 304","SS 316L (electropolished)","SS 316L, Hastelloy, Duplex 2205","SS 304/316, CI (low cost), PP / PVDF (corrosive paint)","Hi-Chrome Iron, Ni-Hard, WCB + Hardox overlay"],
    ["Seals & Gaskets MOC","EPDM, Silicone, PTFE (FDA/USP Class VI)","PTFE, Silicone (USP VI), Viton (non-product contact)","PTFE, Viton, Grafoil, Klingersil (acid service)","EPDM, Viton, Nitrile (solvent resistance)","Neoprene, Nitrile, EPDM (abrasion & dust service)"],
    ["Fastener MOC","SS 316 (A4-70 grade)","SS 316 (A4-80 grade)","SS 316 / Hastelloy / Monel (HF service)","SS 304 / Galvanised CS (outdoor service)","CS (HDG), SS 304 (corrosive mineral areas)"],
    ["Internal Surface Finish","Ra ≤ 0.8 µm (electropolished) for product contact","Ra ≤ 0.4 µm (EP) ASME BPE SF4","Pickled & Passivated; PTFE lining for acid service","Shot-blasted Sa 2.5 + Epoxy lining (2-coat)","Hard-facing overlay / HVOF WC-Co on wear zones"],
    ["External Surface Finish","Ra ≤ 1.6 µm (matte polish) or as per client","Ra ≤ 0.8 µm (2B / BA finish) Electropolished preferred","Passivated / Painted (2-coat epoxy)","Primer + Polyurethane topcoat (outdoor)","Primer + Epoxy or Bituminous coating (wet)"],
    ["Coating / Lining","No coating on product-contact parts (all SS)","No coating on product-contact; EP or PVD on external wear","Rubber lining, PTFE lining, Glass lining (HCl service)","Epoxy-phenolic lining, Zinc-rich primer","HVOF, Hard Chrome, Rubber lining (slurry)"],
],
mech: [
    ["Design Pressure","0–10 bar g (CIP/SIP up to 3 bar g)","Up to 10 bar g (Autoclave: up to 3 bar g)","Up to 150+ bar g (reactor vessels)","Atmospheric to 6 bar g","Atmospheric to 25 bar g (slurry pumps / mills)"],
    ["Design Temperature","-10°C to +150°C (CIP/SIP: 135°C)","-20°C to +150°C (sterilisation: 135°C)","-100°C to +400°C (reactor / distillation)","0°C to +80°C (ambient to hot mix)","-10°C to +250°C (drying / calcination)"],
    ["Operating Pressure","0.5–6 bar g","0.5–6 bar g","1–100 bar g (varies by process)","0.5–5 bar g","1–20 bar g"],
    ["Pressure Rating Standard","ASME B16.5 / EN 1092 Class 150 (PN 20)","ASME BPE / ASME B16.5 Class 150–300","ASME B16.5 Class 150–2500 / EN 1092 PN 16–400","ASME B16.5 Class 150 / PN 10–16","ASME B16.5 Class 150–600 / PN 16–100"],
    ["Equipment Design Standard","ASME VIII Div. 1, FDA 21 CFR, EHEDG","ASME BPE-2022, ASME VIII, FDA / EU GMP Annex 1","ASME VIII Div. 1 & 2, AD-2000, PED 2014/68/EU","IS 2825 / ASME VIII, BS EN 14015","ASME VIII, IS 2825, Mine Safety Regulations"],
    ["Flange Standard","ASME B16.5 / DIN 11851 (hygienic tri-clamp)","ASME BPE Tri-clamp (SF1/SF4 finish)","ASME B16.5 / ANSI RTJ / Spiral Wound","ASME B16.5 / EN 1092 Raised Face (RF)","ASME B16.5 / ANSI Flat Face (FF) / RF"],
    ["Connection Type","Tri-clamp (hygienic), Threaded SS (small bore)","Tri-clamp (ASME BPE), Orbital-welded tubing","Flanged (ANSI/DIN), Buttwelds, screwed NPT","Flanged (ANSI/DIN), Threaded","Flanged heavy-duty, Mechanical grooved joints"],
    ["Weld Joint Efficiency","100% (full penetration, NDE on all welds)","100% (orbital weld, 100% borescope inspection)","85–100% (ASME VIII Category A/B/C welds)","85% (spot radiography)","85% (visual + MPT/UT)"],
],
equip: [
    ["Primary Equipment Types","CIP tanks, blenders, homogenisers, pasteurisers, fill-seal machines","Reactors, fermenters, autoclaves, lyophilisers, filter-dryers","Reactors, distillation columns, heat exchangers, storage vessels","Dissolvers, dispersers, bead mills, storage tanks, filling machines","Ball mills, jaw crushers, hydrocyclones, slurry pumps, vibrating screens"],
    ["Pump Type","Centrifugal (hygienic), Positive displacement (Lobe / Peristaltic)","Centrifugal (ASME BPE), Diaphragm, Peristaltic (sterile transfer)","Centrifugal, Gear, AODD, Magnetic drive (hazardous liquids)","Centrifugal, Gear, AODD (solvent-based)","Heavy-duty slurry centrifugal, Piston, Pneumatic diaphragm"],
    ["Valve Type","Butterfly (hygienic), Diaphragm, Ball (SS) — dead-leg-free design","Diaphragm (ASME BPE), Ball (full-bore, EP), Needle (WFI service)","Ball, Gate, Globe, Check, Control valves (Class IV / V leakage)","Ball, Butterfly (lined), Gate (solvent resistant)","Knife Gate, Pinch, Slurry Ball valve, Heavy-duty butterfly"],
    ["Agitator / Mixer Type","Anchor, Paddle, High-shear homogeniser (CIP-able)","Anchor, Retreat curve, Pitched blade turbine (GMP top-entry)","Rushton turbine, Anchor, Flat blade (multi-stage for high viscosity)","High-speed disperser (Cowles), Anchor, Planetary mixer","Heavy paddle, Ribbon mixer, Drum mixer (dry / wet ore)"],
    ["Heat Exchanger Type","Plate (hygienic gasket), Tubular (scraped surface for viscous products)","Shell & Tube (BEU/BEM), Double-pipe (sterile), Plate (CIP-able)","Shell & Tube (TEMA B/C/R), Double-pipe, Spiral (polymerisation service)","Shell & Tube, Plate (solvent heat recovery)","Shell & Tube (slurry cooling), Immersion coils"],
    ["Filter / Separation","Bag filter, Cartridge, Centrifuge (hygienic), UF/NF membranes","Sterile filter (0.22 µm), TFF membrane, Centrifuge (GMP contained)","Pressure leaf, Rotary vacuum drum, Cartridge (acid-resistant)","Bag / Cartridge filter, Air classifier (powder pigments)","Hydrocyclone, Vibrating screen, Magnetic separator, Thickener"],
    ["Conveying Equipment","Enclosed screw conveyor (SS, hygienic trough), Pneumatic (dense phase)","Contained transfer system (CTS), Isolator-based, Robotic dispensing","Screw conveyor (lined), Pneumatic (dilute phase), Gravity chute (lined)","Screw conveyor (epoxy-lined), Pneumatic (closed system)","Belt conveyor (rubber), Apron feeder, Screw (Hardox-lined)"],
],
instr: [
    ["Pressure Instruments","SS 316L diaphragm seal, IP65, 4–20 mA HART (sanitary process conn.)","SS 316L diaphragm, IP67, 21 CFR Pt 11 compliant, validated calibration","SS 316/Hastelloy, IP67, SIL-rated (SIL 2/3 for hazardous duty)","SS 304/316, IP65, standard 4–20 mA","SS 316 / CI, IP65, heavy-duty (abrasion-resistant wetted parts)"],
    ["Temperature Instruments","PT100 / Thermocouple, SS316L hygienic pocket, IP67","PT100 (validated), SS 316L, IP67, ASME BPE tri-clamp","Thermocouple Type K/J, SS316L / Hastelloy thermowell, SIL capable","PT100 / Type K, SS316L pocket, IP65","Type K Thermocouple, SS316L / CI thermowell (high-temp / kiln)"],
    ["Flow Instruments","Electromagnetic (SS316L, EPDM lining, hygienic), Coriolis (high accuracy)","Coriolis (validated), Magnetic (ASME BPE), Ultrasonic (CIP service)","Magnetic, Coriolis, Vortex, DP-type (corrosion-resistant wetted)","Magnetic (lined), Gear meter (solvent), DP flow (viscous paints)","Magnetic (rubber-lined), DP transmitter, Slurry Coriolis (dense slurry)"],
    ["Level Instruments","Guided wave radar, Capacitance (hygienic), Ultrasonic (non-contact)","Load cell (GMP validated), Guided wave radar, Capacitance (CIP-rated)","DP transmitter, Guided wave radar, Magnetic float (corrosive media)","Ultrasonic (non-contact), Float switch, DP level (dense paint)","Nucleonic gauge (slurry), Ultrasonic (ore bin), DP transmitter"],
    ["Analytical Instruments","pH (sanitary electrode), Conductivity (CIP), Turbidity, TOC monitor","pH (WFI-grade), TOC (<500 ppb), Conductivity, Particle counter (cleanroom)","pH, ORP, Gas analyser (LEL/O2), Viscosity, Density (process)","Viscometer (inline), Particle size analyser, pH, Colour sensor","Density meter (slurry), pH (mill water), Particle size (PSD)"],
    ["Control System","SCADA / PLC (Siemens / Allen Bradley), 21 CFR Pt 11 (export markets)","DCS (DeltaV / Emerson), FDA 21 CFR Pt 11, GAMP 5 validated","DCS (Honeywell/ABB), SIS (SIL 2/3), HAZOP reviewed, ESD system","PLC + SCADA, ATEX (Zone 1/2 solvent areas), Basic PID control","PLC / SCADA, Load optimisation, SAG mill auto-control"],
    ["Safety System","CIP/SIP interlocks, PRV (SS316L), Rupture disc (food grade)","Containment (OEB1–5), Ventilated enclosures, PRV + Rupture disc","SIL 2/3 ESD, HAZOP, Fire & Gas detection, BLEVE relief systems","ATEX Zone 1 (solvent), Flameproof enclosures, Explosion vents","Dust explosion vent (coal/mineral dust), SIL 1/2 ESD"],
],
comply: [
    ["Governing Standards","FDA 21 CFR Parts 110/117, EHEDG, 3-A Sanitary","FDA 21 CFR Parts 210/211, EU GMP Annex 1, ICH Q7","OSHA PSM (29 CFR 1910), EU SEVESO III, REACH","OSHA, EPA (VOC limits), REACH, RoHS","MSHA, IS 4693 / BS 4604, Mine Safety Act"],
    ["Pressure Vessel Code","ASME Section VIII Div. 1 (U-stamp preferred)","ASME Section VIII Div. 1 (U-stamp, TS-stamp)","ASME VIII Div. 1 & 2, AD-2000, BS PD 5500","ASME VIII Div. 1, IS 2825","ASME VIII Div. 1, IS 2825"],
    ["Piping Code","ASME B31.3 (food grade) + DIN 11850 tubing","ASME BPE, ASME B31.3 (high-purity systems)","ASME B31.3 (process), ASME B31.1 (utility)","ASME B31.3, IS 1239 / IS 3589","ASME B31.3 / B31.11 (slurry pipelines)"],
    ["Welding Standard","AWS D1.6 (SS welding), ASME IX (PQR/WPS)","ASME BPE welding, ASME IX (100% borescope)","ASME IX, AWS D1.1, EN ISO 15614","ASME IX / AWS D1.1, IS 7307","AWS D1.1 / ASME IX, IS 7307"],
    ["NDE / Inspection","Visual + borescope, PT (dye penetrant), PMI","100% visual + borescope, PT, PMI, Particle count (cleanroom validation)","RT / UT / MT per ASME VIII, PWHT where required (P1 to P5 materials)","Visual + PT (spot), Hydrotest (1.5× MAWP)","UT (wear thickness), MT / PT, Hardness test (Brinell on wear castings)"],
    ["Hygienic / Clean Design","Dead-leg-free, CIP/SIP designable, EHEDG cert. preferred","Zero dead-leg (ASME BPE), Drainable, CIP/SIP + Steam sterilisable","Not applicable (clean-in-place optional for speciality chemicals)","Flush-bottom outlets, Easy cleanout (colour change requirements)","Not applicable (open/rugged design, washdown only)"],
    ["Hazardous Area","Generally non-ATEX (except alcohol-based products: Zone 2)","ATEX Zone 1 (solvent), Zone 2 (general area), EX-rated instruments","ATEX Zone 0/1/2 (full HAZOP required), EX-d or EX-e enclosures","ATEX Zone 1 (solvent/paint vapours), EX-rated motors & panels","ATEX (coal dust: Zone 21), Mine Zone classification, Dust explosion prevention"],
    ["Environmental Compliance","Effluent pH 6–9, BOD/COD limits, Food waste regulations","Pharmaceutical effluent guidelines (WHO), Solvent recovery mandatory","REACH, RoHS, EPA TRI reporting, emission limits (VOC, SO2, NOx)","VOC emission control, HAPS regulations, Solvent recovery units","Mine water treatment, Dust suppression, Tailing pond management"],
],
maint: [
    ["Cleaning Method","CIP (Clean-in-Place) 80°C NaOH + HNO3 cycle; SIP (Steam)","CIP + SIP mandatory; WFI rinse; validated cleaning procedures","Mechanical + chemical flush; steam-out; N2 purge before entry","Solvent flush (toluene / xylene); water wash (waterborne paints)","High-pressure water jetting; dry cleaning (dry mineral duties)"],
    ["Sterilisation / Sanitation","Hot water (85°C), Steam-in-place (SIP) 135°C / 30 min","Autoclaving (121°C / 15 min or 135°C), VHP (vaporised H2O2)","Not applicable (chemical passivation after maintenance)","Not applicable","Not applicable"],
    ["Maintenance Frequency","PM every 500–1000 hr; Gasket & seal change every 12–18 months","Validation-driven PM; gasket change every 6–12 months (GMP)","PM every 3–6 months; inspection per risk-based maintenance plan","PM every 6–12 months; agitator seal every 12 months","PM every 250–500 hr (high wear); liner change every 3–6 months"],
    ["Lubrication","Food-grade lubricant mandatory (NSF H1) for incidental contact","NSF H1 / Pharma-grade lubricant (white mineral oil or NSF H1)","Industrial grade (NLGI 2 grease or PAO oil), no restriction","Industrial grade; solvent-resistant grease (near solvent zones)","Heavy-duty EP grease (NLGI 2/3), high-load bearings"],
    ["Utility Requirements","Steam (3 bar g, clean), Chilled water, CIP water (softened / DM water)","WFI, Pure Steam, N2 blanket, Compressed air (ISO 8573-1)","Cooling water (closed loop), Steam, N2, CW, Instrument air (ISA 7.0.01)","Compressed air, Solvent vapour extraction, Cooling water","Process water, Compressed air, High-voltage power (mills / crushers)"],
    ["Spare Parts Strategy","2-year critical spares: seals, gaskets, O-rings, impellers (SS316L)","Validated spares only; change control required; Certificate of conformance","Criticality-based spare parts (RCM); fast-moving: seals, packings, bearings","Seals, agitator blades, filter bags, wear liners (12-month stock)","Wear liners, impellers, crusher jaws, screen mesh (3–6 month stock)"],
],
};

const summaryData = [
    { name:"Food & Beverage",   driver:"Hygienic design + CIP/SIP cleanability", challenge:"Eliminating dead-legs and contamination traps in piping and equipment", compliance:"FDA 21 CFR / EHEDG / 3-A Sanitary Standards", critical:"Surface finish Ra ≤ 0.8 µm; NSF H1 lubrication; dead-leg-free design" },
    { name:"Pharmaceutical",    driver:"GMP compliance + sterility + containment", challenge:"Validated cleaning, sterile boundary integrity and cross-contamination prevention", compliance:"FDA 21 CFR Pt 211, EU GMP Annex 1, ASME BPE, GAMP 5", critical:"Zero dead-leg; 100% weld inspection; validated instruments; OEB containment" },
    { name:"Chemical",          driver:"Chemical resistance + process safety (SIL / HAZOP)", challenge:"Handling toxic, flammable or high-P/T fluids with full process safety compliance", compliance:"OSHA PSM, ATEX, SEVESO III, ASME VIII, SIL 2/3", critical:"Material compatibility, SIL-rated ESD, PRV sizing (API 520/521)" },
    { name:"Paints & Coatings", driver:"Solvent resistance + colour change flexibility + VOC control", challenge:"Solvent vapour hazard management (ATEX) and complete product cleanout between batches", compliance:"ATEX Zone 1, EPA VOC limits, REACH, RoHS", critical:"Agitator seal integrity; epoxy-lined vessels; ATEX-rated electrical equipment" },
    { name:"Minerals & Mining", driver:"Abrasion / impact resistance + continuous availability", challenge:"Extreme wear on impellers, liners and piping requiring frequent replacement", compliance:"MSHA, IS 4693, Dust explosion (ATEX Zone 21), Mine Safety Act", critical:"Liner hardness (HRC 55–68); wear monitoring; Hardox / Hi-Chrome construction" },
];

// Build tables
Object.entries(tables).forEach(([key, rows]) => {
    const tbl = document.getElementById('tbl-' + key);
    if (!tbl) return;

// Header
const thead = tbl.createTHead();
const hr = thead.insertRow();
['Technical Parameter', ...industries.map(i => i.label)].forEach((lbl, i) => {
    const th = document.createElement('th');
    th.textContent = lbl;
    if (i > 0) th.className = industries[i-1].cls;
    hr.appendChild(th);
});

// Body
const tbody = tbl.createTBody();
rows.forEach(row => {
        const tr = tbody.insertRow();
        row.forEach((cell, ci) => {
            const td = tr.insertCell();
            td.textContent = cell;
            if (ci === 0) td.style.fontWeight = 'bold';
        });
    });
});

// Build summary
const sc = document.getElementById('summary-container');
summaryData.forEach(s => {
    sc.innerHTML += `<div class="summary-card">
    <h3>${s.name}</h3>
    <div class="row"><div class="lbl">Defining Design Driver</div><div class="val">${s.driver}</div></div>
    <div class="row"><div class="lbl">Biggest Engineering Challenge</div><div class="val">${s.challenge}</div></div>
    <div class="row"><div class="lbl">Critical Compliance</div><div class="val">${s.compliance}</div></div>
    <div class="row"><div class="lbl">Most Critical Equipment Parameter</div><div class="val">${s.critical}</div></div>
    </div>`;
});

function showTab(id, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-bar button').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    btn.classList.add('active');
}