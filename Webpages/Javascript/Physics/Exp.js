function Period(g, d, l, v, m) //v stands for viscosity
{
  B = (6 * Math.Pi * v * (d / 2)); //Coeffecient
  Period = (B * B) * (l / 4) * (m * m) * g;
  return Period + " seconds";
}

function ParabolicMotion() {

}

function Hooks_Law(m, g, x) {

  let mass = parseInt(m);
  let gravity = parseInt(g);
  let x0 = parseInt(x);
  console.log(mass);
  let k = (mass * gravity) / x0; //Hook's Law

  console.log(typeof(k));
  console.log(k);
  const random = Math.random();

  if (random % 2 == 0) {
    k += 0.05;
  }
  else {
    k -= 0.05;
  }

  document.getElementById("springConstant").innerText = k; //Spring constant
}