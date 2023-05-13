const Router = require("express");
const router = new Router();
const LeatherProductsController = require("../controllers/leatherProductsController");

router.post("/", LeatherProductsController.create);
router.get("/", LeatherProductsController.getAll);
router.get("/:id", LeatherProductsController.getOne);

module.exports = router;
