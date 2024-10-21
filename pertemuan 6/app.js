const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'library_secret',
    resave: false,
    saveUninitialized: true,
}));

let users = { admin: 'password123' }; 
let books = ['Buku A', 'Buku B', 'Buku C'];
let borrowedBooks = {};

function checkAuth(req, res, next) {
    if (req.session.loggedin) {
        return next();
    }
    res.redirect('/login');
}

app.get('/', checkAuth, (req, res) => {
    res.render('index', { books, username: req.session.username });
});

app.get('/login', (req, res) => {
    res.render('login', { message: req.session.message || '' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        req.session.loggedin = true;
        req.session.username = username;
        req.session.message = 'Login successful!';
        res.redirect('/');
    } else {
        req.session.message = 'Invalid credentials!';
        res.redirect('/login');
    }
});

app.post('/borrow', checkAuth, (req, res) => {
    const bookTitle = req.body.title;
    if (books.includes(bookTitle)) {
        borrowedBooks[req.session.username] = borrowedBooks[req.session.username] || [];
        borrowedBooks[req.session.username].push(bookTitle);
        books = books.filter(book => book !== bookTitle);
        req.session.message = `You have borrowed "${bookTitle}"`;
    } else {
        req.session.message = `"${bookTitle}" is not available`;
    }
    res.redirect('/');
});

app.post('/return', checkAuth, (req, res) => {
    const bookTitle = borrowedBooks[req.session.username]?.pop();
    if (bookTitle) {
        books.push(bookTitle);
        req.session.message = `You have returned "${bookTitle}"`;
    } else {
        req.session.message = `You have no borrowed books`;
    }
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost3000:${PORT}`);
});
