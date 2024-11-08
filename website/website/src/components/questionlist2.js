export const data = [
  {
    questionType: "input",
    question: "Please input your age in the box below:",
    type: "number",
    upper: 110,
    lower: 0
  },

  {
    questionType: "mc",
    question: "What gender do you identify as?",
    option1: "male",
    option2: "female",
    option3: "other",
    option4: "prefer not to answer"
  },

  {
    questionType: "slider",
    question: "What is your impulse level? (Impulse refers to the number of times your heart beats per minute, usually within 60-100 times for the average adult)",
    type: "number",
    upper: 150,
    lower: 30
  },

  {
    questionType: "slider",
    question: "What is your systolic blood pressure? (Top number)",
    type: "range",
    upper: 150,
    lower: 0
  },

  {
    questionType: "slider",
    question: "What is your diastolic blood pressure? (Bottom number)",
    type: "range",
    upper: 150,
    lower: 0
  },

  {
    questionType: "slider",
    question: "What are is your glucose level? (Usual range: 70-110)",
    type: "range",
    upper: 150,
    lower: 45
  },

  {
    questionType: "slider",
    question: "What is your troponin level?",
    type: "range",
    upper: 150,
    lower: 45
  }
]