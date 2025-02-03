import {KeyResultInsertType, OKRObjectivesProviderType} from "../types/okr-types";
import React, {useContext, useState} from "react";
import {addOKRKeyResult, getOKRObjectives} from "../data/okr-data.ts";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

type AddKeyResultModalProp = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    objectiveID: string | number | undefined;
};

const emptyKeyResult = {
    title: "",
    initialValue: 0,
    currentValue: 0,
    targetValue: 0,
    metric: "",
};

export default function AddKeyResultModal({
                                              setIsModalOpen,
                                              objectiveID,
                                          }: AddKeyResultModalProp) {
    const [keyResult, setKeyResult] = useState<KeyResultInsertType>(emptyKeyResult);
    const {setObjectives} = useContext<OKRObjectivesProviderType>(OKRObjectivesProviderContext);

    return (
        <div className="inset-0 fixed flex justify-center bg-black bg-opacity-25">
            <div className=" bg-gray-300 max-w-3xl max-h-80 p-10 space-y-5 mt-28 rounded-md opacity-100">
                <h1 className="uppercase text-3xl font-bold font-mono	 text-center">
                    Key Result
                </h1>

                <input
                    className={
                        "border px-3 py-3 block w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    }
                    type="text"
                    id="keyResults"
                    placeholder={"Key Result"}
                    required
                    onChange={(e) => {
                        keyResult.title = e.target.value;
                        setKeyResult(keyResult);
                    }}
                />

                <div className="flex gap-x-4 justify-between">
                    <input
                        className={
                            "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        }
                        type="number"
                        id="initialValue"
                        placeholder={"Initial Value"}
                        required
                        onChange={(e) => {
                            keyResult.initialValue = parseInt(e.target.value);
                            setKeyResult(keyResult);
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
                        onChange={(e) => {
                            keyResult.currentValue = parseInt(e.target.value);
                            setKeyResult(keyResult);
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
                        onChange={(e) => {
                            keyResult.targetValue = parseInt(e.target.value);
                            setKeyResult(keyResult);
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
                        onChange={(e) => {
                            keyResult.metric = e.target.value;
                            setKeyResult(keyResult);
                        }}
                    />

                    <button
                        className={
                            "border-1 bg-blue-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-blue-600"
                        }
                        onClick={async () => {
                            await addOKRKeyResult(objectiveID, keyResult);
                            const updatedObjectives = await getOKRObjectives();
                            setObjectives(updatedObjectives);
                            setIsModalOpen(false);
                        }}
                    >
                        Save
                    </button>
                    <button
                        className={
                            "border-1 bg-red-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-red-600"
                        }
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
