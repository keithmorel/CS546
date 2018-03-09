const express = require("express");
const router = express.Router();
const mongoCollection = require("../mongoCollections");
const {recipes} = mongoCollection.recipes;
const uuidv1 = require("uuid/v1");

// Get all recipes route
router.get("/", async (req, res) => {
    const recipesCollection = await recipes(); 
    const recipes = await recipesCollection.find({}).toArray();
    return recipes;
});

//router.get("/:id", (req, res) => {
//    if (!id) throw "You 

router.get("*", (req, res) => {
    res.status(404).json({ message: "not found!" });
});

module.exports = router;

