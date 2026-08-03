const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    itemName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String
    },

    status: {
        type: String,
        default: "active"
    }

},
{
    timestamps: true
});

module.exports =
    mongoose.model("Item", itemSchema);