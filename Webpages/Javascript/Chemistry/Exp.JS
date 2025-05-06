function Concentration(n,v,mm){
    const s_unit=document.querySelector('input[name="s_unit"]:checked').value;
    const sol_unit= document.getElementById('input[name="sol_unit"]:checked').value;
     
    if(s_unit==='gram') n=n/mm;
    
    if(sol_unit==='ml')v=v/1000;
    
    let m=n/v;

    document.getElementById('Concentration').innerHTML = m.toFixed(5) + " mol/L";
}

function PH(){
    


}

function Titration(m1,v1,m2,v2){
    


}