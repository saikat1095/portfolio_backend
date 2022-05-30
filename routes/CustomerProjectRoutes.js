const express = require("express");

const CustomerProjectController = require("../controllers/CustomerProjectController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

// create post.
router.post('/create', CustomerProjectController.createProject);
router.post('/delete/:id', CustomerProjectController.deleteProject);
router.get('/:projectId', CustomerProjectController.getAProject);
router.post('/update/:projectId', checkAuth , CustomerProjectController.updateProject);



module.exports = router;
