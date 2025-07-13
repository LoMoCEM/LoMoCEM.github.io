export const researchData = {
  title: "LaMoCEM: A Prompt-Driven Cost Evaluation Framework using Large Language Models in Agile Development",
  authors: [
    {
      name: "Muhammad Saim",
      designation: "Department of Artificial Intelligence, UMT Lahore",
      email: "saim.codefraft@gmail.com",
      isCorresponding: true
    },
    {
      name: "Muhammad Umer", 
      designation: "Independent Researcher",
      email: "saridalsmash@gmail.com",
      isCorresponding: false
    },
    {
      name: "Ali Hussain",
      designation: "Department of Artificial Intelligence, UMT Lahore",
      email: "F2021376030@umt.edu.pk",
      isCorresponding: false
    },
    {
      name: "Abdullah Akram Gondal",
      designation: "Department of Artificial Intelligence, UMT Lahore",
      email: "F2021266527@umt.edu.pk",
      isCorresponding: false
    }
  ],
  abstract: `Agile methodologies have improved flexibility and developer-client collaboration, but cost estimation remains a major challenge due to unpredictable scope changes. Traditional models struggle to adapt to rapid project dynamics, leading to inaccurate forecasts. We propose LaMoCEM (Large Model Cost Evaluation Model), a novel LLM-based approach that evaluates project cost by dynamically selecting the best estimation strategy based on project context. The system presents three cost estimation strategies to an LLM, which selects the most suitable one and returns a tailored Lambda function to compute cost from input data. This model integrates prompt engineering, dynamic tool usage, and real-time code execution, enabling adaptive cost forecasting in Agile environments. Our implementation demonstrates enhanced precision and flexibility across various project scenarios.`,
  keywords: [
    "Cost Estimation",
    "LLM", 
    "Prompt Engineering",
    "Lambda Functions",
    "Agile Forecasting",
    "Dynamic Code Generation"
  ],
  methodology: {
    steps: [
      {
        title: "Scenario Input",
        description: "Project data gathered including employees, salary, LOC, and task hours"
      },
      {
        title: "Strategy Definition", 
        description: "Three cost models: Hourly-based, LOC-based, and Hybrid approaches"
      },
      {
        title: "LLM Decision",
        description: "LLM evaluates scenario and generates Lambda function"
      },
      {
        title: "Execution",
        description: "Lambda compiled and executed for cost output"
      }
    ],
    codeExamples: {
      inputCsv: `import pandas as pd

# Sample project data
project_data = {
    'Project': 'CRM Integration',
    'Employees': 4,
    'Monthly_Salary': 100000,
    'Total_Hours': 360,
    'Estimated_LOC': 12000
}

df = pd.DataFrame([project_data])
print(df.to_csv(index=False))`,
      lambdaFunction: `# LLM-generated Lambda function
cost_lambda = lambda data: (
    data['Total_Hours'] * 
    (data['Monthly_Salary'] / 160) +
    data['Estimated_LOC'] * 2.5 +
    data['Employees'] * 5000
)

# Execution
result = cost_lambda(project_data)
print(f"Estimated Cost: PKR {result:,.0f}")`,
      toolsJson: `{
  "models": [
    {
      "name": "Hourly-Based",
      "description": "Cost = Total Hours × Hourly Rate",
      "formula": "lambda data: data['Total_Hours'] * (data['Monthly_Salary'] / 160)"
    },
    {
      "name": "LOC-Based", 
      "description": "Cost = LOC × Cost per LOC",
      "formula": "lambda data: data['Estimated_LOC'] * 2.5"
    },
    {
      "name": "Hybrid",
      "description": "Combines LOC + Hours + Team Size",
      "formula": "lambda data: data['Total_Hours'] * (data['Monthly_Salary'] / 160) + data['Estimated_LOC'] * 2.5 + data['Employees'] * 5000"
    }
  ]
}`
    }
  },
  results: {
    comparison: [
      {
        model: "COCOMO",
        estimated: 720000,
        actual: 460000,
        errorMargin: 56,
        adaptability: "Static"
      },
      {
        model: "HuBiCEM", 
        estimated: 495000,
        actual: 460000,
        errorMargin: 7.6,
        adaptability: "Moderate"
      },
      {
        model: "LaMoCEM",
        estimated: 462000,
        actual: 460000,
        errorMargin: 0.4,
        adaptability: "Dynamic"
      }
    ]
  },
  downloads: {
    paper: "/assets/lamocem-paper.pdf",
    framework: "https://github.com/LoMoCEM/framework",
    datasets: "https://github.com/LoMoCEM/datasets",
    organization: "https://github.com/LoMoCEM/LoMoCEM.github.io"
  },
  citation: `@article{saim2024lamocem,
  title={LaMoCEM: A Prompt-Driven Cost Evaluation Framework using Large Language Models in Agile Development},
  author={Saim, Muhammad and Umer, Muhammad},
  journal={arXiv preprint},
  year={2024},
  institution={University of Management and Technology, Lahore}
}`
};
