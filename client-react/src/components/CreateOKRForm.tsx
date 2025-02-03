import {useContext, useState} from "react";
import {KeyResultInsertType} from "../types/okr-types";
import {getOKRObjectives, insertOKRObjective} from "../data/okr-data";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

const emptyKeyResult = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metric: "",
};

export default function CreateOKRForm() {
    const {setObjectives} = useContext(OKRObjectivesProviderContext);
    const [objectiveTitle, setObjectiveTitle] = useState<string>("");
    const [keyResults, setKeyResults] = useState<KeyResultInsertType[]>([
        emptyKeyResult,
    ]);

    const resetKeyResults = () => {
        setKeyResults([emptyKeyResult]);
    };
    const resetObjectiveTitle = () => {
        setObjectiveTitle("");
    };
    const addObjectives = async () => {
        const newOKR = {
            title: objectiveTitle,
            keyResults: [...keyResults],
        };
        await insertOKRObjective(newOKR).then(async () => {
            setObjectives(await getOKRObjectives());
            resetKeyResults();
            resetObjectiveTitle();
        });
    };

    const addKeyResult = () => {
        setKeyResults([{...emptyKeyResult}, ...keyResults]);
        emptyKeyResult.title = "";
        emptyKeyResult.initialValue = 0;
        emptyKeyResult.currentValue = 0;
        emptyKeyResult.targetValue = 0;
        emptyKeyResult.metric = "";
    };

    return (
        <div className="border px-4 py-8 max-w-3xl mx-auto space-y-10 ">
            <h1 className="uppercase text-3xl font-bold font-mono	 text-center">
                Create Objective Form
            </h1>

            <div className="space-y-3">
                <label htmlFor="objective" className="uppercase font-bold">
                    Objective
                </label>

                <input
                    className="border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    type="text"
                    id="objective"
                    placeholder="Enter objective title"
                    value={objectiveTitle}
                    required
                    onChange={(e) => setObjectiveTitle(e.target.value)}
                />
            </div>

            <div className="space-y-8">
                <label htmlFor="keyResults" className="uppercase font-bold">
                    Key Results
                </label>
                {keyResults.map((keyResult, index) => (
                    <div key={index} className="key-result-input-area space-y-4">
                        <label htmlFor="keyResults" className="uppercase font-bold">
                            Add Key Result - {index + 1}
                        </label>
                        <input
                            className={
                                "border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                            }
                            type="text"
                            id="keyResults"
                            placeholder={"Key Results"}
                            value={keyResult.title}
                            required
                            onChange={(e) => {
                                keyResult.title = e.target.value;
                                setKeyResults([...keyResults]);
                            }}
                        />

                        <div className="flex gap-x-4">
                            <input
                                className={
                                    "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                                }
                                type="number"
                                id="initialValue"
                                placeholder={"Initial Value"}
                                required
                                value={keyResult.initialValue}
                                onChange={(e) => {
                                    keyResult.initialValue = parseInt(e.target.value);
                                    setKeyResults([...keyResults]);
                                }}
                            />
                            <input
                                className={
                                    "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                                }
                                type="number"
                                id="currentValue"
                                placeholder={"Current Value"}
                                required
                                value={keyResult.currentValue}
                                onChange={(e) => {
                                    keyResult.currentValue = parseInt(e.target.value);
                                    setKeyResults([...keyResults]);
                                }}
                            />
                            <input
                                className={
                                    "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                                }
                                type="number"
                                id="targetValue"
                                placeholder={"Target Value"}
                                required
                                value={keyResult.targetValue}
                                onChange={(e) => {
                                    keyResult.targetValue = parseInt(e.target.value);
                                    setKeyResults([...keyResults]);
                                }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <input
                                className={
                                    "border px-3 py-3 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 block"
                                }
                                type="text"
                                id="metricsValue"
                                placeholder={"Metrics"}
                                required
                                value={keyResult.metric}
                                onChange={(e) => {
                                    keyResult.metric = e.target.value;
                                    setKeyResults([...keyResults]);
                                }}
                            />
                            <button
                                className={
                                    "border-1 bg-red-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-red-600"
                                }
                                onClick={() => {
                                    if (keyResults.length > 1) {
                                        keyResults.splice(index, 1);
                                    } else {
                                        keyResult.title = "";
                                        keyResult.initialValue = 0;
                                        keyResult.currentValue = 0;
                                        keyResult.targetValue = 0;
                                        keyResult.metric = "";
                                    }
                                    setKeyResults([...keyResults]);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="max-w-xl">
                    <button
                        className={
                            " bg-gray-400 p-3 hover:bg-gray-500 text-white rounded-lg uppercase font-semibold"
                        }
                        onClick={addKeyResult}
                    >
                        Add Key Result
                    </button>
                </div>
            </div>

            <div className="max-w-xl mx-auto pt-6">
                <button
                    className={
                        " bg-blue-400 p-3 hover:bg-blue-500 text-white rounded-lg w-full uppercase font-semibold"
                    }
                    onClick={addObjectives}
                >
                    <span>Add Objective</span>
                </button>
            </div>
        </div>
    );
}
