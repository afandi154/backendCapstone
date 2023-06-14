const { Router } = require("express");

// const postUser = require("../controllers/user/post");
const getUsers = require("../controllers/user/getAll");
const editUser = require("../controllers/user/editOne");

const postReport = require("../controllers/report/post");
const getReports = require("../controllers/report/getAll");
const getReport = require("../controllers/report/getOne");

const postSign = require("../controllers/auth/postSign");
const postLogin = require("../controllers/auth/postLogin");

const router = Router();

// USER
router.get("/user", getUsers);
router.patch("/user/:id", editUser);

// REPORT
router.post("/report", postReport);
router.get("/report", getReports);
router.get("/report/:id", getReport);

// SIGN
router.post("/sign-up", postSign);
router.post("/login", postLogin);

module.exports = router;
