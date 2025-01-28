import {useContext, useState} from "react";
import {ObjectiveType, OKRObjectivesProviderType} from "../types/okr-types";
import AddKeyResultModal from "./AddKeyResultModal";
import UpdateObjectiveModal from "./UpdateObjectiveModal.tsx";
import {deleteOKRKeyResult, deleteOKRObjective, getOKRObjectives} from "../data/okr-data.ts";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

export default function ShowOKRsForm() {
    const [objectiveIndex, setObjectiveIndex] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isObjectiveModalOpen, setIsObjectiveModalOpen] = useState<boolean>(false);
    const {objectives, setObjectives} = useContext<OKRObjectivesProviderType>(OKRObjectivesProviderContext);

    return (
        <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8">
            {objectives !== null && objectives.length > 0 ? (
                <>
                    <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
                        Your Objectives 😃
                    </h1>
                    {
                        objectives.map((objective: ObjectiveType) => (
                            <div key={objective.id} className="border p-4 rounded-md">
                                <ul className="list-disc pl-4">
                                    <li className="flex">
                                        <div className="flex w-full space-between ">
                                        <span className="uppercase font-bold text-2xl w-1/2 ">
                                            {objective.title}
                                        </span>
                                            <div className="flex space-x-2 border-2">
                                                <button
                                                    className="border-1 bg-gray-400 px-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-gray-600  "
                                                    onClick={() => {
                                                        setObjectiveIndex(objective.id);
                                                        setIsObjectiveModalOpen(true);
                                                    }}
                                                >
                                                    Update Objective
                                                </button>

                                                <button
                                                    className="border-1 bg-gray-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-gray-600  "
                                                    onClick={() => {
                                                        setObjectiveIndex(objective.id);
                                                        setIsModalOpen(true);
                                                    }}
                                                >
                                                    Add key result
                                                </button>

                                                <button
                                                    className={
                                                        "border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                                                    }
                                                    onClick={async () => {
                                                        await deleteOKRObjective(objective.id);
                                                        const updatedObjectives = await getOKRObjectives();
                                                        setObjectives(updatedObjectives);
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <ul className="list-disc pl-8 space-y-3">
                                        {objective.keyResults.map((keyResult, keyResultIndex) => (
                                            <li key={keyResultIndex} className="p-2">
                                                <h1 className="uppercase text-xl font-bold font-mono">
                                                    {keyResult.title}
                                                </h1>
                                                <div className="flex justify-between">
                                                <span className="pl-4 space-x-2 text-xl">
                                                    Initial:{keyResult.initialValue},
                                                </span>
                                                    <span className="pl-4 space-x-2 text-xl">
                                                    Current:{keyResult.currentValue},
                                                </span>
                                                    <span className="pl-4 space-x-2 text-xl">
                                                    Target:{keyResult.targetValue}
                                                </span>
                                                    <button
                                                        className="border-1 bg-red-400 p-2 text-sm text-white rounded-md uppercase font-semibold  hover:bg-red-600  "
                                                        onClick={async () => {
                                                            objective.keyResults.splice(keyResultIndex, 1);
                                                            await deleteOKRKeyResult(objectiveIndex, objective);
                                                            setObjectives([...objectives]);
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                                <span className="pl-4 space-x-2 text-xl">
                                                    Metric:{keyResult.metrics}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                            </div>
                        ))
                    }</>) : (
                <h1 className="uppercase text-3xl font-bold font-mono py-8 text-center">
                    No objectives to display ☹️
                </h1>
            )}

            {isModalOpen && (
                <AddKeyResultModal
                    objectiveID={objectiveIndex}
                    setIsModalOpen={setIsModalOpen}
                />
            )}

            {isObjectiveModalOpen && (
                <UpdateObjectiveModal
                    objectiveID={objectiveIndex}
                    setIsObjectiveModalOpen={setIsObjectiveModalOpen}
                />
            )}
        </div>
    );
}
