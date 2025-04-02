const express = require("express");
const admin = require("../firebaseAdmin");

const router = express.Router();

router.post("/verify-token", async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
