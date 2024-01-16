function create(elem = 'div'){
    return elem == 'div' ? document.createElement('div') : document.createElement(elem);
}

function title(title){
    const div = create();

    const h1 = create('h1');
    h1.innerText = title;
    h1.classList.add('header');

    div.appendChild(h1);

    return div;
}

function description(description=''){
    const container = create();
    const p = create('p');
    p.innerText = 'Interdum consectetur libero id faucibus. Eu lobortis elementum nibh tellus molestie nunc non. Ac tortor vitae purus faucibus ornare suspendisse sed. Quis blandit turpis cursus in hac habitasse platea dictumst. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Etiam sit amet nisl purus in mollis nunc sed id. Nunc vel risus commodo viverra maecenas. Volutpat maecenas volutpat blandit aliquam etiam. Vel facilisis volutpat est velit. Neque sodales ut etiam sit amet. Non nisi est sit amet facilisis magna etiam tempor orci. Ante in nibh mauris cursus mattis molestie a. Et sollicitudin ac orci phasellus egestas tellus. Leo vel orci porta non pulvinar. Nibh tellus molestie nunc non blandit massa. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Mauris pharetra et ultrices neque ornare aenean. Hac habitasse platea dictumst vestibulum. Sed pulvinar proin gravida hendrerit lectus a.';
    container.appendChild(p);

    container.classList.add('description');

    return container;
}

function hours(){
    const container = create();
    const h3 = create('h3');
    h3.innerText = 'Business Hours';

    const monday = create();
    const d1 = create('p');
    d1.innerText = 'Monday';
    const h1 = create('p');
    h1.innerText = '8am - 8pm';
    monday.appendChild(d1);
    monday.appendChild(h1);
    monday.classList.add('days');

    const tuesday = create();
    const d2 = create('p');
    d2.innerText = 'Tuesday';
    const h2 = create('p');
    h2.innerText = '8am - 8pm';
    tuesday.appendChild(d2);
    tuesday.appendChild(h2);
    tuesday.classList.add('days');

    const wednesday = create();
    const d3 = create('p');
    d3.innerText = 'Wednesday';
    const h31 = create('p');
    h31.innerText = '8am - 8pm';
    wednesday.appendChild(d3);
    wednesday.appendChild(h31);
    wednesday.classList.add('days');

    const thursday = create();
    const d4 = create('p');
    d4.innerText = 'Thursday';
    const h4 = create('p');
    h4.innerText = '8am - 8pm';
    thursday.appendChild(d4);
    thursday.appendChild(h4);
    thursday.classList.add('days');

    const friday = create();
    const d5 = create('p');
    d5.innerText = 'Friday';
    const h5 = create('p');
    h5.innerText = '9am - 10pm';
    friday.appendChild(d5);
    friday.appendChild(h5);
    friday.classList.add('days');

    const saturday = create();
    const d6 = create('p');
    d6.innerText = 'Saturday';
    const h6 = create('p');
    h6.innerText = '9am - 7pm';
    saturday.appendChild(d6);
    saturday.appendChild(h6);
    saturday.classList.add('days');

    const sunday = create();
    const d7 = create('p');
    d7.innerText = 'Sunday';
    const h7 = create('p');
    h7.innerText = '9am - 5pm';
    sunday.appendChild(d7);
    sunday.appendChild(h7);
    sunday.classList.add('days');

    container.appendChild(h3);
    container.appendChild(monday);
    container.appendChild(tuesday);
    container.appendChild(wednesday);
    container.appendChild(thursday);
    container.appendChild(friday);
    container.appendChild(saturday);
    container.appendChild(sunday);


    container.classList.add('hours');
    return container;
}

function rlocation(){
    const container = create();
    const h3 = create('h3');
    h3.innerText = 'Address';

    const address1 = create('p');
    address1.innerText = '1699 Blanding Blvd';
    const address2 = create('p');
    address2.innerText = 'Jacksonville, FL';
    const address3 = create('p');
    address3.innerText = '32216';

    container.appendChild(h3);
    container.appendChild(address1);
    container.appendChild(address2);
    container.appendChild(address3);

    container.classList.add('location');

    return container;
}

export default function createHomepage(){
    const container = create();

    container.appendChild(title('The Best Ever Restaurant'));
    container.appendChild(description());
    container.appendChild(hours());
    container.appendChild(rlocation());

    return container;
}
