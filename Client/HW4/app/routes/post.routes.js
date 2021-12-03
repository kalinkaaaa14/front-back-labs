const controller = require("../controllers/posts.controller");
const ImageController = require("../controllers/image.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

    app.route("/posts").get(controller.getAllPosts);
    app.route("/posts").post(controller.createPost);
  app.route("/images/:id").get(ImageController.getImageById);
    app.route("/images").get(ImageController.getAllImages);
    app.route("/images").post(ImageController.createImage);
};
