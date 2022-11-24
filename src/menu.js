export default function menu(){

    //menu title
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";
    menuTitle.setAttribute('id', 'menuHeader');
    menuTitle.classList.add('title');
       const content = document.querySelector('#content');
    content.appendChild(menuTitle);  


}