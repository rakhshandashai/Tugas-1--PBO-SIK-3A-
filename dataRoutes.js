const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Middleware untuk mengecek untuk login
const isAuthenticated = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/auth/login');
};

router.get('/inventaris', isAuthenticated, dataController.getInventaris);
router.get('/personel', isAuthenticated, dataController.getPersonel);
router.get('/transaksi', isAuthenticated, dataController.getTransaksi);
router.get('/surat', isAuthenticated, dataController.getSurat);

module.exports = router;
