  
  export default function header(){
  //create top nav div
  const topNav= document.createElement('div');
  topNav.setAttribute('id','topNav');
  let x = document.querySelector('body');
document.body.prepend(topNav);
//create home Nav button
const homeNav = document.createElement('a');
homeNav.setAttribute('id','homeNav');
topNav.appendChild(homeNav);
const homeNavText=document.createTextNode('Home');
homeNav.appendChild(homeNavText);
//create menu button
const menuNav = document.createElement('a');
menuNav.setAttribute('id','menu');
topNav.appendChild(menuNav);
const menuText=document.createTextNode('Menu');
menuNav.appendChild(menuText);
  };