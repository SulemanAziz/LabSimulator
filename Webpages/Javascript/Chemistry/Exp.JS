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

function PH(){
    


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
        "V₂ = " + m2.toFixed(5) + " +- 0.1 mol";
}