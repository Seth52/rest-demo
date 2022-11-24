
import _ from 'lodash';
import './style.css';
//import home from './home.js'; 
import homePage from './home.js';
import menu from './menu.js';
import header from './header.js';

homePage();

const content = document.querySelector('#content');
function page(){
header();
topNav.addEventListener('click', function(e){
  const menuNav = document.querySelector('menuNav');
  let checkChild = content.children[0].id;
  let checkClick = e.target.id
  if (checkChild === 'homeHeader' && checkClick ==='menuNav'){
    content.removeChild(content.children[0]);
    content.removeChild(content.children[0]);
    menu();
  }
  else if(checkChild ==='menuHeader' && checkClick === 'homeNav'){
    content.removeChild(content.children[0]);
    homePage();
  };
})
 

};page();



//header();
/*
function navi() {

homeNav.addEventListener('click', function(){
  const content = document.querySelector('#content');
  content.removeChild(content.children[0]);
  content.removeChild(content.children[0]);
  menu(); // need to figure out how to make this module work 
 });

  };
navi();*/

 
 //homePage();
 // menu();