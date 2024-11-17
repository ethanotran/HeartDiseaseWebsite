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
    question: "What is your sex?",
    option1: "male",
    option2: "female",
    option3: "other",
    option4: "prefer not to answer",
    value1: 0,
    value2: 1,
    value3: null,
    value4: null
  },
  
  {
    questionType: "dropdown",
    question: "What is your chest pain type?",
    option1: "typical angina",
    option2: "atypical angina",
    option3: "non-anginal pain",
    option4: "asymptomatic",
    value1: 0,
    value2: 1,
    value3: 2,
    value4: 3
  },

  {
    questionType: "input",
    question: "What is your maximum heart rate?",
    type: "number",
    upper: 220,
    lower: 0
  },

  {
    questionType: "dropdown",
    question: "Do you have exercise induced angina?",
    dataType: "number",
    option1: "yes",
    option2: "no",
    option3: "unknown",
    option4: "prefer not to answer",
    value1: 1,
    value2: 0,
    value3: null,
    value4: null
  },

  {
    questionType: "dropdown",
    question: "What was the number of major vessels colored by cardiac fluoroscopy?",
    option1: "0",
    option2: "1",
    option3: "2",
    option4: "3",
    value1: 0,
    value2: 1,
    value3: 2,
    value4: 3
  },

  {
    questionType: "input",
    question: "What is your impulse level? (Impulse refers to the number of times your heart beats per minute, usually within 60-100 times for the average adult)",
    type: "number",
    upper: 120,
    lower: 30,
  },

  {
    questionType: "input",
    question: "What is your systolic blood pressure? (Top number)",
    type: "number",
    upper: 250,
    lower: 70,
  },

  {
    questionType: "input",
    question: "What is your Creatinie Kinase MB (CK-MB) level? ",
    type: "number",
    upper: 300,
    lower: 0,
  },

  {
    questionType: "input",
    question: "What is your troponin level? (Troponin appears in the blood stream when the heart has been damaged, indicating previous damage to the heart)",
    type: "number",
    upper: 15,
    lower: 0
  },
]