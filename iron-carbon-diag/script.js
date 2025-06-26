document.addEventListener("DOMContentLoaded", function () {
    const phaseData = [
        { compositionMin: 0.0, compositionMax: 0.02, tempMin: 20, tempMax: 912, phase: "Ferrite (α)", grain: "BCC Ferrite Grains", hardness: "80 HB", treatment: ["Annealing"] },
        { compositionMin: 0.02, compositionMax: 0.4, tempMin: 600, tempMax: 900, phase: "Ferrite + Pearlite", grain: "Fine Pearlite with Ferrite", hardness: "150 HB", treatment: ["Annealing", "Normalizing"] },
        { compositionMin: 0.4, compositionMax: 0.8, tempMin: 727, tempMax: 1000, phase: "Pearlite", grain: "Lamellar Pearlite", hardness: "200 HB", treatment: ["Normalizing"] },
        { compositionMin: 0.8, compositionMax: 1.0, tempMin: 727, tempMax: 1400, phase: "Austenite (γ)", grain: "Equiaxed Austenitic Grains", hardness: "200 HB", treatment: ["Quenching", "Tempering"] },
        { compositionMin: 1.0, compositionMax: 1.2, tempMin: 600, tempMax: 727, phase: "Pearlite + Bainite", grain: "Bainitic and Pearlite Mixture", hardness: "250 HB", treatment: ["Tempering"] },
        { compositionMin: 1.2, compositionMax: 1.5, tempMin: 600, tempMax: 800, phase: "Pearlite + Cementite", grain: "Lamellar Pearlite", hardness: "300 HB", treatment: ["Hardening", "Tempering"] },
        { compositionMin: 1.5, compositionMax: 2.0, tempMin: 400, tempMax: 727, phase: "Cementite + Pearlite", grain: "Cementite Plates in Pearlite Matrix", hardness: "500 HB", treatment: ["Annealing"] },
        { compositionMin: 2.0, compositionMax: 2.1, tempMin: 400, tempMax: 700, phase: "Ledeburite + Cementite", grain: "Massive Cementite Network", hardness: "600 HB", treatment: ["Annealing"] }
    ];

    function getPhaseInfo(composition, temperature) {
        return phaseData.find(data =>
            composition >= data.compositionMin && composition <= data.compositionMax &&
            temperature >= data.tempMin && temperature <= data.tempMax
        );
    }

    const diagram = document.getElementById("diagram");
    const tooltip = document.getElementById("tooltip");

    if (!diagram || !tooltip) {
        console.error("Diagram or tooltip element missing in HTML.");
        return;
    }

    diagram.addEventListener("click", function (event) {
        let rect = this.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let composition = (x / this.clientWidth) * 2.0;
        let temperature = ((1 - (y / this.clientHeight)) * 1600);

        const phaseInfo = getPhaseInfo(composition, temperature);

        if (phaseInfo) {
            tooltip.innerHTML = `
                <strong>Phase:</strong> ${phaseInfo.phase}<br>
                <strong>Composition:</strong> ${composition.toFixed(2)}% C<br>
                <strong>Temperature:</strong> ${Math.round(temperature)}°C<br>
                <strong>Grain Structure:</strong> ${phaseInfo.grain}<br>
                <strong>Hardness:</strong> ${phaseInfo.hardness}<br>
                <strong>Recommended Treatments:</strong> ${phaseInfo.treatment.join(", ")}
            `;
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
        } else {
            tooltip.innerHTML = "<p>No phase data available for this selection.</p>";
        }
    });

    diagram.addEventListener("mousemove", (event) => {
        tooltip.style.top = event.pageY + 10 + "px";
        tooltip.style.left = event.pageX + 10 + "px";
    });

    diagram.addEventListener("mouseleave", () => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    });

    function updateGrainStructure(phase) {
        const grainSVG = document.getElementById("grain-structure");
        if (!grainSVG) {
            console.error("Grain structure element missing.");
            return;
        }

        let grainPattern = "";
        switch (phase) {
            case "Ferrite (α)":
                grainPattern = `<circle cx="20" cy="20" r="10" fill="gray" />`;
                break;
            case "Pearlite":
                grainPattern = `<line x1="10" y1="10" x2="90" y2="10" stroke="black" stroke-width="2" />`;
                break;
            case "Austenite (γ)":
                grainPattern = `<rect x="10" y="10" width="30" height="30" fill="blue" />`;
                break;
            default:
                grainPattern = `<rect width="100" height="100" fill="white" />`;
        }

        grainSVG.innerHTML = grainPattern;
    }

    document.getElementById("openCCT").addEventListener("click", function () {
        document.getElementById("cctModal").style.display = "block";
    });

    document.querySelector(".close").addEventListener("click", function () {
        document.getElementById("cctModal").style.display = "none";
    });

    document.getElementById("coolingSlider").addEventListener("input", function () {
        let coolingRate = parseInt(this.value);
        let phase = "";

        if (coolingRate < 30) {
            phase = "Pearlite Formation";
        } else if (coolingRate >= 30 && coolingRate < 70) {
            phase = "Bainite Formation";
        } else {
            phase = "Martensite Formation";
        }

        updateGrainStructure(phase);
    });

    document.getElementById("zoomContainer").addEventListener("click", function () {
        this.classList.toggle("zoomed");

        let tooltip = document.getElementById("grainTooltip");
        let description = "";

        if (this.classList.contains("zoomed")) {
            let phase = document.getElementById("coolingRateValue").innerText;
            description = phase.includes("Pearlite") ? "Pearlite: Ductile and soft." :
                          phase.includes("Bainite") ? "Bainite: Tougher than Pearlite." :
                          phase.includes("Martensite") ? "Martensite: Hard and brittle." : "Unknown Phase";

            tooltip.innerText = description;
            tooltip.style.display = "block";
        } else {
            tooltip.style.display = "none";
        }
    });
});
