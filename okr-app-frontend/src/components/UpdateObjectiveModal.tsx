import {OKRObjectivesProviderType} from "../types/okr-types.ts";
import React, {useContext, useState} from "react";
import {updateOKRObjective} from "../data/okr-data.ts";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

type UpdateObjectiveModalProp = {
    setIsObjectiveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    objectiveID: string;
};

export default function UpdateObjectiveModal({
                                                 setIsObjectiveModalOpen,
                                                 objectiveID,
                                             }: UpdateObjectiveModalProp) {
    const [updatedObjectiveTitle, setUpdatedObjectiveTitle] = useState("");
    const {objectives, setObjectives} = useContext<OKRObjectivesProviderType>(OKRObjectivesProviderContext);

    return (<div className="inset-0 fixed flex justify-center bg-black bg-opacity-25">
            <div className=" bg-gray-300 max-w-3xl max-h-80 p-10 space-y-5 mt-28 rounded-md opacity-100">
                <h1 className="uppercase text-3xl font-bold font-mono	 text-center">
                    Objective Title
                </h1>

                <input
                    className={
                        "border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    }
                    type="text"
                    id="keyResults"
                    placeholder="Objective Title"
                    required
                    onChange={(e) => {
                        setUpdatedObjectiveTitle(e.target.value);
                    }}
                />

                {/*
                <div className="space-y-8">
                    <label htmlFor="keyResults" className="uppercase font-bold">
                        Key Results
                    </label>
                    {objectives[objectiveID].keyResults.map((keyResult, index) => (
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
                                    value={keyResult.metrics}
                                    onChange={(e) => {
                                        keyResult.metrics = e.target.value;
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
                                            keyResult.metrics = "";
                                        }
                                        setKeyResults([...keyResults]);
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                */}

                <div className="flex justify-between">

                    <button
                        className={
                            "border-1 bg-blue-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-blue-600"
                        }
                        onClick={async () => {
                            const objective = objectives!.find((obj) => objectiveID === obj.id);
                            if (objective) objective.title = updatedObjectiveTitle;

                            await updateOKRObjective(objectiveID, objective);

                            setObjectives([...objectives!]);
                            setIsObjectiveModalOpen(false);

                        }}
                    >
                        Save
                    </button>
                    <button
                        className={
                            "border-1 bg-red-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-red-600"
                        }
                        onClick={() => {
                            setIsObjectiveModalOpen(false);
                        }}
                    >
                        Close
                    </button>
                </div>

            </div>

        </div>
    );
}