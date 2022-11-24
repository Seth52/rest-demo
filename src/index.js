
import _ from 'lodash';
import './style.css';
//import home from './home.js'; 
import homePage from './home.js';
import menu from './menu.js';
import header from './header.js';


//const content = document.querySelector('#content');
//function page(){
  //header();
  

//}
header();

function navi() {

homeNav.addEventListener('click', function(){
  const content = document.querySelector('#content');
  content.removeChild(content.children[0]);
  content.removeChild(content.children[0]);
  menu(); // need to figure out how to make this module work 
 });

  };
navi();

 
 homePage();
 // menu();