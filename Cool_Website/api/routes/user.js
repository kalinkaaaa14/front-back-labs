const express = require('express');
const router = express.Router();
const config = require('config');
const title = config.get('App.title');
const domain = config.get('App.domain');
const color = config.get('App.color');
const emailVerify = config.get('App.emailVerify');
const pages = config.get("App.pages");

const image = config.get('App.image');

router.get('/home', (req, res) => {
    res.render('home', {
        layout: './layouts/regular-layout', emailVerify: emailVerify,
        title: title, color: color, pages: pages, domain: domain, image: image
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        layout: './layouts/regular-layout', emailVerify: emailVerify,
        title: title, color: color, pages: pages, domain: domain
    });
});


router.get('/trainings', (req, res) => {
    res.render('trainings', {
        layout: './layouts/regular-layout', emailVerify: emailVerify,
        title: title, color: color, pages: pages, domain: domain
    });
});


module.exports = router;