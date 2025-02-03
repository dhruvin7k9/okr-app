import React, {useContext, useState} from "react";
import {KeyResultInsertType, KeyResultType, OKRObjectivesProviderType} from "../types/okr-types.ts";
import {updateOKRKeyResult, getOKRObjectives} from "../data/okr-data.ts";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

type UpdateKeyResultModalProp = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    keyResult: KeyResultType;
};

export default function UpdateKeyResultModal({
                                                 keyResult, setIsModalOpen
                                             }: UpdateKeyResultModalProp) {
    const [updatedKeyResult, setUpdatedKeyResult] = useState<KeyResultInsertType>(keyResult);
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
                    placeholder={keyResult.title}
                    required
                    onChange={(e) => {
                        updatedKeyResult.title = e.target.value;
                        setUpdatedKeyResult(updatedKeyResult);
                    }}
                />
                
                <div className="flex gap-x-4 justify-between">
                    <input
                        className={
                            "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        }
                        type="number"
                        id="initialValue"
                        placeholder={String(keyResult.initialValue)}
                        required
                        onChange={(e) => {
                            updatedKeyResult.initialValue = parseInt(e.target.value);
                            setUpdatedKeyResult(updatedKeyResult);
                        }}
                    />
                    <input
                        className={
                            "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        }
                        type="number"
                        id="currentValue"
                        placeholder={String(keyResult.currentValue)}
                        required
                        onChange={(e) => {
                            updatedKeyResult.currentValue = parseInt(e.target.value);
                            setUpdatedKeyResult(updatedKeyResult);
                        }}
                    />
                    <input
                        className={
                            "border px-3 py-3  rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                        }
                        type="number"
                        id="targetValue"
                        placeholder={String(keyResult.targetValue)}
                        required
                        onChange={(e) => {
                            updatedKeyResult.targetValue = parseInt(e.target.value);
                            setUpdatedKeyResult(updatedKeyResult);
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
                        placeholder={keyResult.metric}
                        required
                        onChange={(e) => {
                            updatedKeyResult.metric = e.target.value;
                            setUpdatedKeyResult(updatedKeyResult);
                        }}
                    />
                    
                    <button
                        className={
                            "border-1 bg-blue-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-blue-600"
                        }
                        onClick={async () => {
                            await updateOKRKeyResult(keyResult.id, updatedKeyResult);
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