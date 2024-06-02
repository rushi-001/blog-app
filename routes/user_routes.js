const { handleUserShignInPage, handleUserShignUpPage } = require("./controllers/user_controller.js");
const { Router } = require("express");

const router = Router();

router.get("/sightin", handleUserShignInPage);
router.post("/sighin",)
router.get("/sightup", handleUserShignUpPage);