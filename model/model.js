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
};
