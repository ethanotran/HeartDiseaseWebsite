export const data = [
  {
    questionType: "input",
    question: "Please input your age in the box below:",
    type: "number",
    upper: 110,
    lower: 0,
    tooltip: ""
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
    value4: 3,
    tooltip: "Angina is a fancy term for chest pain"
  },

  {
    questionType: "input",
    question: "What is your maximum heart rate?",
    type: "number",
    upper: 220,
    lower: 0,
    tooltip: "Maximum heart rate refers to your peak heart rate in beats per minute while active"
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
    value4: null,
    tooltip: "Exercised induced angina refers to having chest discomfort such as pain, pressure, or tightness when exercising"
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
    value4: 3,
    tooltip: ""
  },

  {
    questionType: "input",
    question: "What is your resting heart rate?",
    type: "number",
    upper: 120,
    lower: 30,
    tooltip: "Resting heart rate is the number of times your heart beats per minute while at rest"
  },

  {
    questionType: "input",
    question: "What is your systolic blood pressure?",
    type: "number",
    upper: 250,
    lower: 70,
    tooltip: "This is also known as the top number"
  },

  {
    questionType: "input",
    question: "What is your Creatinie Kinase MB (CK-MB) level? ",
    type: "number",
    upper: 300,
    lower: 0,
    tooltip: "CK-MB is an enzyme that is released into the bloodstream when heart muscle cells are damaged"
  },

  {
    questionType: "input",
    question: "What is your troponin level? ",
    type: "number",
    upper: 15,
    lower: 0,
    tooltip: "Troponin is a protein found in heart and muscle cells. It is released into the blood stream when heart muscle cells are damaged"
  }
]