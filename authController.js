exports.getLogin = (req, res) => res.render('auth/login');

exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.user = { username };
        return res.redirect('/data/inventaris');
    }
    res.render('auth/login', { error: 'Username or password is incorrect' });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
};
