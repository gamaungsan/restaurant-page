
import createMenu from './menu';
import createHomepage from './homepage';
import createAbout from './about';
import './styles.css';

function create(elem = 'div'){
    return elem == 'div' ? document.createElement('div') : document.createElement(elem);
}

const content = create();
content.id = 'content';
document.body.appendChild(content);


function render(){
    const display = create();
    display.classList.add('display');

    const footer = create();
    footer.classList.add('footer');
    footer.innerHTML = '&copy 2024 The Best Ever Restaurant'

    const nav = create();
    nav.classList.add('navbar');

    const menu = create('ul');

    const homepage = create('li');
    const home = create('a');
    home.innerHTML = 'Home';
    homepage.appendChild(home);

    const aboutpage = create('li');
    const about = create('a');
    about.innerHTML = 'About';
    aboutpage.appendChild(about);

    const menupage = create('li');
    const menulink = create('a');
    menulink.innerHTML = 'Menu';
    menupage.appendChild(menulink);

    
    

    menu.appendChild(homepage);
    menu.appendChild(menupage);
    menu.appendChild(aboutpage);

    nav.appendChild(menu);

    display.appendChild(createHomepage());

    homepage.addEventListener('click', ()=>{
        display.innerHTML = '';
        display.appendChild(createHomepage());
    });

    menupage.addEventListener('click', ()=>{
        display.innerHTML = '';
        display.appendChild(createMenu());
    });

    aboutpage.addEventListener('click', ()=>{
        display.innerHTML = '';
        display.appendChild(createAbout());
    });

    content.appendChild(nav);
    content.appendChild(display);
    content.appendChild(footer);

}

render();