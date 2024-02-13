import {GoogleGenerativeAI, HarmBlockThreshold, HarmCategory} from "@google/generative-ai";
import {generationConfig, safetySettings} from "../utils";
import {API_KEY} from "../config";
const MODEL_NAME = "gemini-pro";

export async function runChat(startData:string,question:string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });


    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: "w jakim hotelu jestem.",
            },
            {
                role: "model",
                parts: `Jesteś w hotelu ${startData}, `,
            },
        ],
    });
    try {
        const {response:{text}} = await chat.sendMessage(question);
        return text();
    }catch (err) {
       return JSON.stringify(err)
    }
}
