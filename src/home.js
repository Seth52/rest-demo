/*export default function home() {
    const element = document.createElement('div');
  element.textContent = "test test";
  element.classList.add('header');   
  const content = document.querySelector('#content');
//const x = document.getElementById('content');
  content.appendChild(element);  
  }*/

  export default function homePage(){

    //title
    const title = document.createElement('h1');
    title.textContent = "Beerbelly's Bungalow";
    title.setAttribute('id', 'homeHeader');
    title.classList.add('title');
       const content = document.querySelector('#content');
    content.appendChild(title);  

    //store stuff formatting
    const storeStuff = document.createElement('div');
    storeStuff.setAttribute('id','storestuff');
    content.appendChild(storeStuff);
    //info box
    const info=document.createElement('div');
    info.setAttribute('id', 'info');
    storeStuff.appendChild(info);
    //info header
    const infoHeader=document.createElement('h4');
    infoHeader.setAttribute('id', 'header');
    infoHeader.textContent="Store Infah";
    info.appendChild(infoHeader);
    //text content for info box
    const infoContent= document.createTextNode('This is quite the place to eat guy');
    info.appendChild(infoContent);
    //hours box
    const hours = document.createElement('div');
    hours.setAttribute('id','info');
    storeStuff.appendChild(hours);
    //hours header
    const hoursHeader=document.createElement('h4');
    hoursHeader.setAttribute('id','header');
    hoursHeader.textContent='Hours';
    hours.appendChild(hoursHeader);
    //hours content
    const hoursContent=document.createTextNode(' All Day, Erryday');
    hours.appendChild(hoursContent);
    //loaction box
    const location = document.createElement('div');
    location.setAttribute('id', 'info');
    storeStuff.appendChild(location);
    //location header
    const locationHeader = document.createElement('h4');
    locationHeader.setAttribute('id','header');
    locationHeader.textContent='Location'
    location.appendChild(locationHeader);
    //location content
    const locationContent=document.createTextNode('In your Heart + iykyk + yktv + L + ratio')
    location.appendChild(locationContent);
   
  }