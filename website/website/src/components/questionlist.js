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
    question: "What is your chest pain type?",
    dataType: "number",
    upper: 3,
    lower: 0
  },

  {
    question: "What is your maximum heart rate?",
    dataType: "number",
    upper: 210,
    lower: 0
  },

  {
    question: "Do you have exercise induced angina?",
    dataType: "number",
    upper: 1,
    lower: 0
  },

  {
    question: "What was the number of major vessels colored by cardiac fluoroscopy?",
    dataType: "number",
    upper: 3,
    lower: 0
  },

  {
    questionType: "slider",
    question: "What is your impulse level? (Impulse refers to the number of times your heart beats per minute at rest, usually within 60-100 times for the average adult)",
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
    question: "What is your Creatinie Kinase MB (CK-MB) level? ",
    type: "range",
    upper: 300,
    lower: 0,
    step: 5
  },

  {
    questionType: "slider",
    question: "What is your troponin level? ",
    type: "number",
    upper: 15,
    lower: 0,

  },
]