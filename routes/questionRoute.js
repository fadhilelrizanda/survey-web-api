const express = require("express");
const router = express.Router();
const { questionModel } = require("../model/model");

router.get("/", (req, res) => {
  console.log("GET /surveyasuh");
  res.send("Survey ASUH route is working!");
});

// Post Method
router.post("/post", async (req, res) => {
  console.log("POST /surveyasuh/post");
  console.log("Request Body:", req.body);

  const data = new questionModel({
    question: req.body.question,
    questionType: req.body.questionType,
    keyAnswer: req.body.keyAnswer,
    score: req.body.score,
    surveyType: req.body.surveyType,
  });

  try {
    const dataToSave = await data.save();
    console.log("Data saved successfully:", dataToSave);
    res.status(200).json(dataToSave);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/getLatest", async (req, res) => {
  try {
    const data = await questionModel.find().sort({ _id: -1 }).limit(1);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all Method
router.get("/getAll", async (req, res) => {
  const { surveyType } = req.query; // Get surveyType from query parameters

  try {
    // Filter data based on surveyType
    const data = await questionModel.find({ surveyType: Number(surveyType) });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await questionModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await questionModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update latest document
router.patch("/updateLatest", async (req, res) => {
  try {
    const updatedData = req.body;
    const options = { new: true };

    const result = await questionModel.findOneAndUpdate({}, updatedData, {
      sort: { _id: -1 },
      ...options,
    });
    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "No document found to update." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await questionModel.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    const result = await questionModel.deleteMany({});
    res.send(`${result.deletedCount} documents have been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
