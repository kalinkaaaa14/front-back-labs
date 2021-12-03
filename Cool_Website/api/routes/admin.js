const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('config');
const title = config.get('App.title');
const domain = config.get('App.domain');
const color = config.get('App.color');
let emailVerify = config.get('App.emailVerify');
const emailService = require("../services/NodeEmailer");
const Application = require('../models/application');
const Training = require('../models/training');


router.get('/', (req,res,next) => {
    Application.find().exec().then(docs => {
        console.log(docs);
        Training.find().exec().then(data => {
            res.status(200).render('admin.ejs', {
                emailVerify: emailVerify,
                applications: docs,
                trainings: data,
                title: title,
                domain: domain,
                color: color
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/verify', (req,res,next) => {
console.log(req.body);
});

router.get('/applications', (req,res,next) => {
    Application.find().exec().then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message: "No applications found"
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/trainings', (req,res,next) => {
        Training.find().exec().then(doc => {
            console.log(doc);
            if(doc){
                res.status(200).json(doc);
            }else{
                res.status(404).json({
                    message: "No trainings found"
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req,res,next) => {
    const application = new Application({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        surname: req.body.surname,
        mail: req.body.mail,
        phoneNum: req.body.phoneNum,
        applicText: req.body.applicText
    });

    application.save().then(result => {
        console.log(result);
        res.status(201).redirect('/admin');
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/post', (req,res,next) => {
    const mailToSendTo = req.body.mail;
    const application = new Application({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        surname: req.body.surname,
        mail: req.body.mail,
        phoneNum: req.body.phoneNum,
        applicText: req.body.applicText
    });

    application.save().then(result => {
        console.log(result);
        if(emailVerify){
            emailService
                .send(
                   "Ваша заявка прийнята",
                    mailToSendTo
                )
                .then((result) =>{
                    console.log("Result is: ")
                    console.log(result)
                    res.status(201).redirect('/home');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/training', (req,res,next) => {
    const training = new Training({
        _id: new mongoose.Types.ObjectId(),
        nameT: req.body.nameT,
        descrShort: req.body.descrShort,
        descrLong: req.body.descrLong
    });

    training.save().then(result => {
        console.log(result);
        res.status(201).redirect('/admin');
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:applicId', (req,res,next) => {
    const id = req.params.applicId;
    Application.findById(id).select('firstName surname _id').then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message: "No applicator found for provided ID"
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/delete/:applicId', (req,res,next) => {
    const id = req.params.applicId
    Application.remove({
       _id: id
    }).then(result => {
        res.status(200).redirect('/admin');
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});


module.exports = router;