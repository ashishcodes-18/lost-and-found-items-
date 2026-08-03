require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");

// ========================================
// CREATE EXPRESS APP
// ========================================

const app = express();

// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());
app.use(express.json());

// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {
    res.send("Lost & Found Portal Backend is running!");
});

// ========================================
// TEST API
// ========================================

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Lost & Found API is working!"
    });
});

// ========================================
// ITEM ROUTES
// ========================================

app.use("/api/items", itemRoutes);

// ========================================
// CONNECT MONGODB
// ========================================

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {

        console.log("✅ MongoDB Connected");

        app.listen(process.env.PORT || 5000, () => {

            console.log(
                `✅ Server running at http://localhost:${process.env.PORT || 5000}`
            );

        });

    })
    .catch((error) => {

        console.error("❌ MongoDB Connection Error:");
        console.error(error);

    });