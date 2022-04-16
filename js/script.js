let bookTemplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);
console.log(bookTemplate);
const listaKsiazek = document.getElementsByClassName('books-list');
console.log(listaKsiazek);
const booksListElement = listaKsiazek.item(0);

function render() {
    for (let book of dataSource.books) {
        const generatedHTML = bookTemplate(book);
        const DOMElement = utils.createDOMFromHTML(generatedHTML);
        booksListElement.appendChild(DOMElement);
    }
}

render();

////////////////////////////////

const favoriteBooks = [];
const initActions = function () {
    const listaOkładek = document.getElementsByClassName('book__image');
    const listaOkładekTablica = Array.from(listaOkładek);
    console.log(listaOkładekTablica);

    for (let okładka of listaOkładekTablica) {
        okładka.addEventListener('dblclick', function (event) {
            event.preventDefault();
            //console.log(event.target);
            okładka.classList.add('favorite'); 
            const clickedElement = okładka;
            console.log(clickedElement);

            //let element = document.getElementById('myDivID');
            const dataID = clickedElement.getAttribute('data-id');
            console.log(dataID);
            favoriteBooks.push(dataID);
            console.log(favoriteBooks);
        });
    }
}


initActions();