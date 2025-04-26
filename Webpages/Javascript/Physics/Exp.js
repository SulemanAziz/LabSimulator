function Period(g, d, l, v, m) //v stands for viscosity
{
  g=parseFloat(g);
  d=parseFloat(d);
  l=parseFloat(l);
  v=parseFloat(v);
  m=parseFloat(m);

  const B = (6 * Math.Pi * v * (d / 2)); //Coeffecient

  const Period = (B * B) * (l / 4) * (m * m) * g;
  document.getElementById("Period").innerText = Period + " seconds";
}

function ParabolicMotion() {
  
}

function Hooks_Law(m, g, x) {

  let mass = parseFloat(m);
  let gravity = parseFloat(g);
  let x0 = parseFloat(x);
  let k = (mass * gravity) / x0; //Hook's Law

  const random = Math.random();

  if (random % 2 == 0) {
    k += 0.05;
  }
  else {
    k -= 0.05;
  }

  document.getElementById("springConstant").innerText = k; //Spring constant
}