let bookTemplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);
console.log(bookTemplate);
const listaKsiazek = document.getElementsByClassName('books-list');
console.log(listaKsiazek);
const booksListElement = listaKsiazek.item(0);

function render() {
const thisBook = this;
for (let book of dataSource.books) {
        const generatedHTML = bookTemplate(book);
        const DOMElement = utils.createDOMFromHTML(generatedHTML);
        booksListElement.appendChild(DOMElement);
console.log(book);
    }
}

render();