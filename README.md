# AI Text Summarizer

## Overview
This application takes unstructured text input and converts it into structured JSON output including summary, key points, and sentiment.

## Tech Stack
- Node.js
- OpenAI SDK
- OpenRouter API

## How it works
- User enters text
- Text is sent to LLM
- LLM returns structured JSON
- Output is displayed in terminal

## Setup Instructions

1. Install dependencies:
npm install

2. Create .env file:
OPENAI_API_KEY=your_api_key

3. Run the app:
node index.js

## Prompt Design
- Strict JSON format used
- Ensured no extra text
- Limited key points to 3

## Trade-offs
- CLI-based (no UI)
- No error retry mechanism

## Future Improvements
- Add frontend UI
- File upload support
- Better error handling

## Example Input
I love learning new technologies. It helps me grow.

## Example Output
Summary: Learning new technologies is beneficial for growth.
Key Points:
1. Learning is useful
2. Helps growth
3. Improves skills
Sentiment: Positive