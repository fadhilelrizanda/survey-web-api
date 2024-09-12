const mongoose = require("mongoose");

const surveyAsuhSchema = new mongoose.Schema(
  {
    question: {
      required: true,
      type: String,
    },
    questionType: {
      required: true,
      type: Number,
    },
    keyAnswer: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const personalQuestSchema = new mongoose.Schema(
  {
    question: {
      required: true,
      type: String,
    },
    questionType: {
      required: true,
      type: Number,
    },
    surveyType: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    uniqueId: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    currentDate: {
      required: true,
      type: String,
    },
    childname: {
      required: true,
      type: Number,
    },
    childDate: {
      required: true,
      type: String,
    },
    age: {
      required: true,
      type: Number,
    },
    gender: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const surveyPeriksaSchema = new mongoose.Schema(
  {
    question: {
      required: true,
      type: String,
    },
    questionType: {
      required: true,
      type: Number,
    },
    keyAnswer: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const surveySikatSchema = new mongoose.Schema(
  {
    question: {
      required: true,
      type: String,
    },
    questionType: {
      required: true,
      type: Number,
    },
    keyAnswer: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const questionSurveySchema = new mongoose.Schema(
  {
    question: {
      required: true,
      type: String,
    },
    questionType: {
      required: true,
      type: Number,
    },
    keyAnswer: {
      required: true,
      type: Number,
    },
    surveyType: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const answerSchema = new mongoose.Schema(
  {
    pq: {
      required: true,
      type: Map,
      of: String,
    },
    ans: {
      required: true,
      type: [Number],
    },
    score: {
      required: true,
      type: Number,
    },
    surveyType: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const AsuhModel = mongoose.model("Survey Pola Asuh ", surveyAsuhSchema);
const periksaModel = mongoose.model("Survey Periksa ", surveyPeriksaSchema);
const SikatModel = mongoose.model("Survey Menyikat", surveySikatSchema);
const AnswerModel = mongoose.model("Answer", answerSchema);
const questionModel = mongoose.model("Question", questionSurveySchema);
const userModel = mongoose.model("UserWeb", userSchema);

const personalQuestModel = mongoose.model(
  "Personal Question",
  personalQuestSchema
);

module.exports = {
  AsuhModel,
  periksaModel,
  SikatModel,
  personalQuestModel,
  AnswerModel,
  questionModel,
  userModel,
};
