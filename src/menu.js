function create(elem = 'div'){
    return elem == 'div' ? document.createElement('div') : document.createElement(elem);
}

function header(){
    const div = create();
    const h1 = create('h1');
    h1.innerText = 'Menu';

    div.classList.add('header');
    div.appendChild(h1);
    return div;
}

function createItem(item){
    const myitem = create();
    const name = create('h3');
    const description = create('p');
    const price = create('p');
    //const picture = create('img');

    name.innerText = item.name;
    description.innerText = item.description;
    price.innerText = item.price;
    //picture = item.picture;

    //myitem.appendChild(picture);
    myitem.appendChild(name);
    myitem.appendChild(description);
    myitem.appendChild(price);

    myitem.classList.add('items');
    return myitem;

}

function entrees(entreelist){
    const container = create();
    const header = create('h2');
    header.innerText = 'Entrees';
    container.appendChild(header);
    entreelist.forEach((element) => container.appendChild(createItem(element)));

    container.classList.add('entree');
    return container;
}

function appetizers(applist){
    const container = create();
    const header = create('h2');
    header.innerText = 'Appetizers';
    container.appendChild(header);
    applist.forEach((element) => container.appendChild(createItem(element)));

    container.classList.add('appetizer');
    return container;
}

function sides(sidelist){
    const container = create();
    const header = create('h2');
    header.innerText = 'Sides';
    container.appendChild(header);
    sidelist.forEach((element) => container.appendChild(createItem(element)));

    container.classList.add('side');

    return container;   
}

function desserts(dessertlist){
    const container = create();
    const header = create('h2');
    header.innerText = 'Desserts';
    container.appendChild(header);
    dessertlist.forEach((element) => container.appendChild(createItem(element)));

    container.classList.add('dessert');

    return container;
}

function drinks(drinklist){
    const container = create()
    const header = create('h2');
    header.innerText = 'Drinks';
    container.appendChild(header);
    drinklist.forEach((element) => container.appendChild(createItem(element)));
    
    container.classList.add('drink')
    return container;
}

function createImage(source){
    const img = new Image();
    img.src = source;
}

const appetizerslist = [
    {
        name: "Samosa",
        description: "Fried potato and onion fillings with wrapping",
        price: "$2.99",
        //picture: createImage('./assets/images/samosas.jpg'),
    }
]

const entreeslist = [
    {
        name: "Mohinga",
        description: "Noodle with fish based soup with eggs, fried critters, and bananan tree toppings",
        price: "$8.99",
        //picture: createImage('./assets/images/mohinga.jpg'),
    }
]

const sideslist = [
    {
        name: "Stir Fry Water Spinach",
        description: "Water spinach stir fried with garlic",
        price: "$3.99",
        //picture: createImage('./assets/images/Stir-Fry-Water-Spinach.jpeg'),
    }
]

const dessertslist = [
    {
        name: "Shwe Yin Aye",
        description: "Burmese dessert consisting of milk base with milk and jelly",
        price: "$4.49",
        //picture: createImage('./assets/images/shweyinaye.jpg'),
    }
]

const drinkslist = [
    {
        name: "Burmese Milk Tea",
        description: "Imported tea from Burma brewed in house with condensed milk",
        price: "$2.99",
        //picture: createImage('./assets/images/milktea.jpg'),
    }
]

export default function createMenu(){
    const container = create();

    const menuHeader = header();

    const appetizer = appetizers(appetizerslist);
    const entree = entrees(entreeslist);
    const side = sides(sideslist);
    const dessert = desserts(dessertslist);
    const drink = drinks(drinkslist);

    container.appendChild(menuHeader);
    container.appendChild(appetizer);       
    container.appendChild(entree);
    container.appendChild(side);
    container.appendChild(dessert);
    container.appendChild(drink);


    return container;
}

