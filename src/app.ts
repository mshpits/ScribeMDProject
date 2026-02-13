import { pipeline } from "@huggingface/transformers";
import { MODEL_NAME } from "./constants";

export const parseTranscript = async (fullPrompt: string) => {
    const pipe = await pipeline('text2text-generation', MODEL_NAME);
    const output = await pipe(fullPrompt, {
        max_new_tokens: 300,
    });

    return output;
}