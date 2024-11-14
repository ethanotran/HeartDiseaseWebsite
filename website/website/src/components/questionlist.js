export const data = [
  {
    questionType: "input",
    question: "Please input your age in the box below:",
    type: "number",
    upper: 110,
    lower: 0
  },

  {
    questionType: "dropdown",
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
    upper: 120,
    lower: 30,
    step: 1
  },

  {
    questionType: "slider",
    question: "What is your systolic blood pressure? (Top number)",
    type: "range",
    upper: 150,
    lower: 0,
    step: 1
  },

  {
    questionType: "slider",
    question: "What is your diastolic blood pressure? (Bottom number)",
    type: "range",
    upper: 150,
    lower: 0,
    step: 5
  },

  {
    questionType: "slider",
    question: "What are is your glucose level? (Usual range: 70-110)",
    type: "range",
    upper: 130,
    lower: 50,
    step: 10
  },

  {
    questionType: "slider",
    question: "What is your troponin level?",
    type: "range",
    upper: 1,
    lower: 0,
    step: 0.1
  }
]