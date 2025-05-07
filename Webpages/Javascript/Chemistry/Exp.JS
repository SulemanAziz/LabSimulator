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

function Titration(m1,v1,m2,v2){
    m1 = parseFloat(m1);
    v1 = parseFloat(v1);
    m2 = parseFloat(m2);
    v2 = parseFloat(v2);
    
    // Input validation
    if (isNaN(m1) || isNaN(v1) || isNaN(m2) || isNaN(v2)) {
        document.getElementById('Titration').innerHTML = "Invalid input values";
        return;
    }
    
    const M_unit = document.querySelector('input[name="M_unit"]:checked')?.value;
    const v_unit = document.querySelector('input[name="v_unit"]:checked')?.value;

    if(M_unit === 'Liter') m1 = m1/22.4;
    if(v_unit === 'mL') v1 = v1/1000;
    if(M_unit === 'Liter') m2 = m2/22.4;
    if(v_unit === 'mL') v2 = v2/1000;

    // Calculate m1v1 and m2v2 separately
    let product1 = m1 * v1;
    let product2 = m2 * v2;
    
    // Display result
    if(isFinite(product1) && isFinite(product2)){
        document.getElementById('Titration').innerHTML = 
            "M₁V₁ = " + product1.toFixed(5) + " mol·L, M₂V₂ = " + product2.toFixed(5) + " mol·L";
    } else {
        document.getElementById('Titration').innerHTML = "Invalid calculation";
    }
}