const Item = require("../models/Item");

// CREATE ITEM
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();

        res.status(201).json({
            success: true,
            message: "Item created successfully",
            data: item
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL ITEMS
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            count: items.length,
            data: items
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE ITEM
exports.getItem = async (req, res) => {
    try {

        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.json({
            success: true,
            data: item
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE ITEM
exports.updateItem = async (req, res) => {
    try {

        const item = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.json({
            success: true,
            message: "Item updated",
            data: item
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE ITEM
exports.deleteItem = async (req, res) => {
    try {

        const item = await Item.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }

        res.json({
            success: true,
            message: "Item deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};