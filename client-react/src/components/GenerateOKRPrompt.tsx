import {useState} from "react";
import {generateOKRHandler} from "../data/okr-data.ts";

export default function GenerateOKRPrompt() {
    const [prompt, setPrompt] = useState("");
    
    async function generateOkr() {
        await generateOKRHandler(prompt);
        setPrompt("");
    }
    
    return (
        <div className="space-y-4">
            <input
                className="border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                type="text"
                placeholder="what's in your mind ?"
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button
                className="bg-green-500 p-3 hover:bg-green-700 text-white rounded-lg w-full uppercase font-semibold"
                onClick={generateOkr}
            >
                Generate
            </button>
        </div>
    );
}