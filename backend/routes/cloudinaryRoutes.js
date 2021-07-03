import path from "path";
import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
  } catch (error) {
    console.error(error);
  }
});

export default router;
