const express = require("express");

const router = express.Router();

const {
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem
} = require("../controllers/itemController");

// CREATE
router.post("/", createItem);

// READ ALL
router.get("/", getItems);

// READ ONE
router.get("/:id", getItem);

// UPDATE
router.put("/:id", updateItem);

// DELETE
router.delete("/:id", deleteItem);

module.exports = router;