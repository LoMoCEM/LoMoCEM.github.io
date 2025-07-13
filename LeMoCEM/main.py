import pandas as pd
import json
from openai import OpenAI


# Load input
df = pd.read_csv('input.csv')
row = df.iloc[0]

client =  OpenAI(api_key="You API KEY")

# rest of the code...


scenario = f"""
Project: {row['project_name']}
Employees: {row['num_employees']}
Monthly Salary: {row['monthly_salary']}
Total Task Hours: {row['total_task_hours']}
Estimated LOC: {row['estimated_loc']}
"""

# Load instructions and tools
with open('instructions.txt', 'r') as f:
    system_prompt = f.read()

with open('tools.json', 'r') as f:
    tools = json.load(f)

# Call OpenAI
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"Here is the scenario:\n{scenario}"},
    ],
    tools=tools,
    tool_choice={"type": "function", "function": {"name": "send_cost_lambda"}}
)

# Extract lambda code
lambda_code = response.choices[0].message.tool_calls[0].function.arguments
lambda_str = json.loads(lambda_code)["lambda_code"]


# Compile and run lambda
cost_fn = eval(lambda_str)
result = cost_fn(
    row['estimated_loc'],
    row['monthly_salary'],
    row['num_employees']
)



print("Selected Lambda Output:", result)