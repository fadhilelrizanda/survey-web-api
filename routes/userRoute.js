const express = require("express");
const router = express.Router();
const { userModel } = require("../model/model");

router.get("/", (req, res) => {
  console.log("GET /userModel");
  res.send("userModel route is working!");
});

// Post Method
router.post("/post", async (req, res) => {
  const data = new userModel({
    uniqueId: req.body.uniqueId,
    name: req.body.name,
    currentDate: req.body.currentDate,
    childname: req.body.childname,
    childDate: req.body.childDate,
    age: req.body.age,
    gender: req.body.gender,
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
    const data = await userModel.find().sort({ _id: -1 }).limit(1);
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
    const data = await userModel.find({
      surveyType: Number(surveyType),
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await userModel.findById(req.params.id);
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

    const result = await userModel.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update surveyA state by ID Method
router.patch("/updateSurveyA/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { surveyA } = req.body; // Expect surveyA in request body

    if (surveyA === undefined) {
      return res.status(400).json({ message: "surveyA field is required." });
    }

    const result = await userModel.findByIdAndUpdate(
      id,
      { surveyA },
      { new: true }
    );

    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "No document found to update." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update surveyA state by ID Method
router.patch("/updateSurveyB/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { surveyB } = req.body; // Expect surveyA in request body

    if (surveyB === undefined) {
      return res.status(400).json({ message: "surveyA field is required." });
    }

    const result = await userModel.findByIdAndUpdate(
      id,
      { surveyB },
      { new: true }
    );

    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "No document found to update." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update surveyA state by ID Method
router.patch("/updateSurveyC/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { surveyC } = req.body; // Expect surveyA in request body

    if (surveyC === undefined) {
      return res.status(400).json({ message: "surveyA field is required." });
    }

    const result = await userModel.findByIdAndUpdate(
      id,
      { surveyC },
      { new: true }
    );

    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "No document found to update." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update latest document
router.patch("/updateLatest", async (req, res) => {
  try {
    const updatedData = req.body;
    const options = { new: true };

    const result = await userModel.findOneAndUpdate({}, updatedData, {
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
    const data = await userModel.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    const result = await userModel.deleteMany({});
    res.send(`${result.deletedCount} documents have been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
