const express = require("express");
const admin = require("../firebaseAdmin");

const router = express.Router();
const db = admin.firestore();

router.post("/save", async (req, res) => {
  const { uid, recipe } = req.body;

  try {
    await db.collection("users").doc(uid).collection("favorites").add(recipe);
    res.json({ message: "Recipe saved!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving recipe" });
  }
});

router.get("/:uid", async (req, res) => {
  const { uid } = req.params;

  try {
    const snapshot = await db.collection("users").doc(uid).collection("favorites").get();
    const favorites = snapshot.docs.map((doc) => doc.data());
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Error fetching favorites" });
  }
});

module.exports = router;
