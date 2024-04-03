import express from "express";
import Data from "../models/dataModel.js";
const router = express.Router();

// GET all data
router.get("/data", async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// POST new data
router.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  console.log(newData);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// PUT update data
router.put('/data/:id', async (req, res) => {
  try {
    const updatedData = await Data.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// DELETE data
router.delete("/data/:id", async (req, res) => {
  try {
    const removedData = await Data.deleteOne({ _id: req.params.id });
    res.json(removedData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

export default router;
