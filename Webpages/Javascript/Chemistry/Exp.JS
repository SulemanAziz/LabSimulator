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
    


}