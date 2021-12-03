const Address = require("../models/address.model");
const controller = require("../controllers/main");
const READY_MESSAGES = require('../additional/ready-messages').READY_MESSAGES;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.route("/").get((req, res) => {

    Address.find({}).sort({email: 1})
      .then((addresses) => {
        res.render('index.ejs', {
          receivers:addresses,
          messages:READY_MESSAGES
        })
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.route("/send").post(controller.sendEmails);
  app.route("/receivers").get(controller.getAllAddresses);
  app.route("/receivers").post(controller.createAddress);
  app.route("/receivers/:id").patch(controller.updateAddress);
  app.route("/receivers/:id").delete(controller.deleteAddress);

};
