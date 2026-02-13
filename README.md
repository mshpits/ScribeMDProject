# ScribeMDProject
ScribeMD project for interview.

## Installation
1. git clone git@github.com:mshpits/ScribeMDProject.git
2. cd ScribeMDProject
3. npm install
4. Create User Access Token in Hugging Face (https://huggingface.co/docs/hub/en/security-tokens)
5. Create .env file similar to .env.example and add your Hugging Face Access Key
6. Open terminal and write prompt in the format: "npm start {YOUR TRANSCRIPT HERE}"

### Problem Approach
I viewed this exercise as a wrapper for an LLM API endpoint that functions as a data pipeline.

We have a text input that must pass through an LLM and be returned as a JSON object of required fields.
My approach was to create a MVP to extract the proper information in the proper format and later refine the project.

The steps I took in creating the project are as follows:
1. Set up basic structure for calling an LLM endpoint (to test connection and ability to send prompts and receive response).
2. Find best available (as possible) LLM that specializes in JSON object extraction.
3. Fine tune prompt to have model output required fields with respective information from transcript.
4. Manipulate data the model returns to fit criteria of JSON object.
5. Clean code, comment, refactor and organize project parts such as separating logic into different methods and organizing constants and imported modules (organization also occurred during production).

### AI Tools Used
1. ChatGPT
- ChatGPT helped organize the project into logical steps, specifically in how to call publicly available LLM models using Node.js as the backend service.
It provided fast testing feedback to iterate over the project code and find any easily identifiable errors that can be quickly fixed.
When looking for a specific API from an outside documentation or similar research, I would at times prompt ChatGPT to point me in the right direction.
Overall, I used ChatGPT as an extremely fast documentation retrieval tool and guide for prompting LLMs through an API endpoint. It saved time searching online, but it did not completely replace it.

2. Hugging Face Model: teapoitai/teapotllm
- Teapot is an open-source small language model that specialized in JSON extraction and reducing hallucinations by using context from documents to answer.
I used teapotllm to receive the text transcript and return the JSON object with the desired fields. It did not however, return the object in the final required format.

### What To Improve On
1. Fine-tune prompt to output consistently and accurately. The model does not always output the "urgency" field and often hallucinates information in fields missing info from the transcript.
2. Modulize the prompt to consist of several variables/constants to allow for easier editing and iteration of the prompt.
3. Create constants for various keywords that would trigger the LLM to assign a value of low, medium, or high urgency depending on the keywords found, rather than relying on the model's opinion in all cases.
4. Create responses to user depending on urgency level of their call such as advising them to call an ambulance or seek help if their call is flagged as "high" urgency.
5. Create frontend to receive user's transcript and show filled-out form with the fields and info, asking the user if it is correct. If done over telephone, it would repeat the info using text-to-voice and ask user if it was all correct. (only if call is not flagged "high" urgency).
6. Create MongoDB database to store the objects for future reference/usage.

