function Concentration(n,v,mm){
    
    n = parseFloat(n);
    v = parseFloat(v);    
    mm = parseFloat(mm);

    // Input validation
    if (isNaN(n) || isNaN(v) || isNaN(mm) || v === 0) {
        document.getElementById('Concentration').innerHTML = "Invalid input values";
        return;
    }

    
    const s_unit = document.querySelector('input[name="s_unit"]:checked')?.value;
    const sol_unit = document.querySelector('input[name="sol_unit"]:checked')?.value;

    
     
    if(s_unit === 'gram') n = n/mm;
    if(sol_unit === 'mL') v = v/1000;
    
    
    let m = n/v;

    // Display result
    if(isFinite(m)){
        document.getElementById('Concentration').innerHTML = m.toFixed(5) + " mol/L";
    } else {
        document.getElementById('Concentration').innerHTML = "Invalid calculation";
    }
}

function FinalPH(pH1, V1, pH2, V2) {
    // Convert pH values to [H+] concentrations
    const H1 = Math.pow(10, -pH1);
    const H2 = Math.pow(10, -pH2);

    const V1_unit = document.querySelector('input[name="Volume1"]:checked')?.value;

    if(V1_unit=="mL")
    {
        V1 = V1/1000;
    }

    const V2_unit = document.querySelector('input[name="Volume2"]:checked')?.value;
    if(V2_unit=="mL")
    {
        V2 = V2/1000;
    }

    const L1 = V1;
    const L2 = V2;

    // Calculate moles of H+ in each solution
    const n1 = H1 * L1;
    const n2 = H2 * L2;

    // Total moles and volume
    const totalMoles = n1 + n2;
    const totalVolume = L1 + L2;

    // Final [H+] concentration
    const Hfinal = totalMoles / totalVolume;

    // Final pH
    const pHFinal = -Math.log10(Hfinal);

    document.getElementById('FPH').innertHTML = pHFinal.toFixed(2);
    document.getElementById('FV').innertHTML = totalVolume;

    console.log("pHFinal");
}





function Titration(m1,v1,v2){
    m1 = parseFloat(m1);
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    
    if (isNaN(m1) || isNaN(v1) || isNaN(v2)) {
        document.getElementById('Titration').innerHTML = "Invalid input values";
        return;
    }
    const M_unit = document.querySelector('input[name="M_unit"]:checked')?.value;
    const v_unit = document.querySelector('input[name="v_unit"]:checked')?.value;

    if(M_unit === 'Liter') m1 = m1/22.4;
    if(v_unit === 'mL') v1 = v1/1000;
    if(M_unit === 'Liter') v2 = v2/22.4;
    
    let m2 = (m1*v1)/v2;

    document.getElementById('Titration').innerHTML = 
        m2.toFixed(5) + " +- 0.1 mol";
}