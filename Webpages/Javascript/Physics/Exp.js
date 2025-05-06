function Period(g, d, l, v, m) //v stands for viscosity
{

//Reference for the calculations below:
// https://web.physics.ucsb.edu/~lecturedemonstrations/Composer/Pages/40.37.html

// Unit Conversion

const d_unit = document.querySelector('input[name="d_unit"]:checked').value;
const l_unit = document.querySelector('input[name="l_unit"]:checked').value;
const m_unit = document.querySelector('input[name="unit"]:checked').value;

g = parseFloat(g);
d = parseFloat(d);
l = parseFloat(l);
v = parseFloat(v);
m = parseFloat(m);

if (d_unit === 'cm') d = d / 100;
if (l_unit === 'cm') l = l / 100;
if (m_unit === 'g') m = m / 1000;

  // Natural frequency (rad/s)
  var omega = Math.sqrt(g/l);

  // Damping coefficient calculation
  var radius = d/2;
  var B = 6 * Math.PI * v * radius; // Stokes' drag coefficient
  var b = B/(2*m); // Damping factor

  // Check damping conditions
  var discriminant = b*b - omega*omega;

  let period;
  let dampingType;

  if (discriminant > 0) {
      // Overdamped
      period = null;
      dampingType = "Overdamped - no oscillation";
  } 
  else if (discriminant === 0) {
      // Critically damped
      period = null;
      dampingType = "Critically damped - no oscillation";
  }
  else {
      // Underdamped
      const alpha = Math.sqrt(omega*omega - b*b); // Damped frequency
      period = 2 * Math.PI / alpha; // Damped period
      dampingType = "Underdamped";
  }

  if (period !== null) {
      document.getElementById("period").innerHTML = period.toFixed(7) + " +- 0.01 seconds";
  } else {
      document.getElementById("period").innerHTML = dampingType;
  }

}

function ParabolicMotion(d,g,a) {
    const distance = document.querySelector('input[name="distance"]:checked').value;
    const Angle= document.querySelector('input[name="Angle"]:checked').value;

    if(distance === 'Km') d = d*1000;
    if(Angle === 'Degrees') a = a * Math.PI / 180; // Convert degrees to radians
    let vi=Math.sqrt((d*g)/2*Math.sin(a));

    const speed_unit = document.querySelector('input[name="unit"]:checked').value;

    if(speed_unit === 'Km/h'){
      vi = vi * 3.6; // Convert m/s to km/h
      document.getElementById('Vi').innerHTML = vi.toFixed(5) + " +- 0.01 km/h"
  }
    else{
      document.getElementById('Vi').innerHTML = vi.toFixed(5) + " +- 0.1 m/s"
    }

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

