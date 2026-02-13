import 'dotenv/config';
import { parseTranscript } from './app';
import { PROMPT } from './constants';

const transcript = process.argv.slice(2).join(" ");

if (!transcript) {
    console.error("Please provide a transcript as argument.");
    process.exit(1);
}

// Format response to be parsed as JSON
const parseResponse = (res) => {
    return JSON.parse('{' + res + '}')
}

// Define and immediately call expression to call model with our prompt.
(async () => {
    try {
        const result = await parseTranscript(PROMPT + '\n' + transcript);
        const parsed = parseResponse(result[0]["generated_text"])

        console.log(parsed);
    } catch (err) {
        console.error("Error:", err);
    }
})();