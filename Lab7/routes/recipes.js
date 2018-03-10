const express = require("express");
const router = express.Router();
const {recipes} = require("../mongoCollections");
const uuidv1 = require("uuid/v1");

// Get all recipes route
router.get("/", async (req, res) => {
    const recipesCollection = await recipes(); 
    const allRecipes = await recipesCollection.find({}).toArray();
    if (!allRecipes) throw "No Recipes Found";
    res.send(allRecipes.map(recipe => {
        return { _id: recipe._id, title: recipe.title };
    }));
});

// req.params.id = :id

// Get single recipe route
router.get("/:id", async (req, res) => {
    if (!req.params.id) throw "You must provide an id to search for!";

    const recipesCollection = await recipes();
    const item = await recipesCollection.findOne({ _id: req.params.id });
    if (item === null) throw "Can't find that recipe!";
    res.send(item);
});

// Add new recipe route
router.post("/", async (req, res) => {
   const uuid = uuidv1();
   const recipesCollection = await recipes();
   let newRecipe = {
       _id: uuid,
       title: req.body.title,
       ingredients: req.body.ingredients,
       steps: req.body.steps
   }
   const insertInfo = await recipesCollection.insertOne(newRecipe);
   if (insertInfo.insertedCount === 0) throw "Failed to add recipe";
   
   res.send(newRecipe);
})

// Update whole recipe route
router.put("/:id", async (req, res) => {
    if (!req.params.id) throw "You must provide an id to put!";

    const recipesCollection = await recipes();
    const to_update = await recipesCollection.findOne({ _id: req.params.id });
    if (to_update === null) throw "Can't find that item!";

    const updated_recipe = await recipesCollection.updateOne(
        { _id: req.params.id },
        { $set: {title: req.body.title, ingredients: req.body.ingredients, steps: req.body.steps} }
    );
    if (updated_recipe.modifiedCount === 0) throw "Could not update recipe successfully";

    res.send(await recipesCollection.findOne({ _id: req.params.id }));
})

// Update only supplied changes route
router.patch ("/:id", async (req, res) => {
    if (!req.params.id) throw "You must provide an id to patch!";

    const recipesCollection = await recipes();
    const to_update = await recipesCollection.findOne({ _id: req.params.id });
    if (to_update === null) throw "Can't find that item!";

    // Update fields provided
    if (req.body.title !== to_update.title) {
        const updated_recipe = await recipesCollection.updateOne(
            { _id: req.params.id},
            { $set: {title: req.body.title} }
        );
        if (updated_recipe.modifiedCount === 0) throw "Could not update title successfully";
    }    
    if (JSON.stringify(req.body.ingredients) !== JSON.stringify(to_update.ingredients)) {
        const updated_recipe = await recipesCollection.updateOne(
            { _id: req.params.id},
            { $set: {ingredients: req.body.ingredients} }
        );
        if (updated_recipe.modifiedCount === 0) throw "Could not update ingredients successfully";
    }
    if (JSON.stringify(req.body.steps) !== JSON.stringify(to_update.steps)) {
        const updated_recipe = await recipesCollection.updateOne(
            { _id: req.params.id},
            { $set: {steps: req.body.steps} }
        );
        if (updated_recipe.modifiedCount === 0) throw "Could not update steps successfully";
    }

    res.send(await recipesCollection.findOne({ _id: req.params.id }));
})

// Delete route
router.delete("/:id", async (req, res) => {
    if (!req.params.id) throw "You must provide an id to delete!";

    const recipesCollection = await recipes();
    const to_delete = await recipesCollection.removeOne({ _id: req.params.id });
    if (to_delete.deletedCount === 0) throw "Can't find that recipe!";
})
// Error route
router.get("*", (req, res) => {
    res.status(404).json({ message: "not found!" });
});

module.exports = router;
