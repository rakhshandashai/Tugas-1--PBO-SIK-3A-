let books = [];

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const borrower = document.getElementById('borrower').value;
    const loanDate = document.getElementById('loanDate').value || new Date().toISOString().split('T')[0];

    const book = {
        id: Date.now(),
        title,
        author,
        borrower,
        loanDate,
    };

    books.push(book);
    displayBooks();
    this.reset();
});

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.borrower}</td>
            <td>${new Date(book.loanDate).toLocaleDateString()}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editBook(${book.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Hapus</button>
            </td>
        `;
        bookList.appendChild(row);
    });
}

function editBook(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('borrower').value = book.borrower;
        document.getElementById('loanDate').value = book.loanDate;
        deleteBook(id); 
    }
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    displayBooks();
}
