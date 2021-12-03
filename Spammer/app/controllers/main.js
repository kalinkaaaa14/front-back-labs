const Address = require("../models/address.model");
const emailService = require("../services/NodeEmailer");

exports.getAllAddresses = async (req, res) => {
    let sorting = req.query.order;
    try{
        const addresses = await Address.find().sort({email:sorting});
        res.send(addresses);
    }catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
};

exports.createAddress = async (req, res) => {
    try{
        const created = await Address.create(req.body);
        res.send(created);
    }catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
};

exports.updateAddress = (req, res) => {
    Address.findByIdAndUpdate(req.params.id, req.body, function(err, address) {
        if (err) throw err;
        res.status(200).send(address);
    }).catch(err => {
        console.log(err);
    });
}

exports.deleteAddress = async (req, res) => {
    try{
        const address = await Address.deleteOne({
                _id: req.params.id,
            }
        );
        if(!address){
            res.status(404).send(address);
        }
        res.send(address);
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
}

exports.sendEmails = (req, res) => {
    console.log(req.body);
    emailService
        .send(
            req.body.text,
            req.body.receivers.map((receiver) => receiver.email)
        )
        .then((result) =>{
            console.log("Result is: ")
            console.log(result)
           return res.status(200).send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};
