import {OKRObjectivesProviderType} from "../types/okr-types.ts";
import React, {useContext, useState} from "react";
import {getOKRObjectives, updateOKRObjective} from "../data/okr-data.ts";
import {OKRObjectivesProviderContext} from "../provider/OKRObjectivesProvider.tsx";

type UpdateObjectiveModalProp = {
    setIsObjectiveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    objectiveTitle: string;
    objectiveID: string | number | undefined;
};

export default function UpdateObjectiveTitleModal({
                                                      setIsObjectiveModalOpen,
                                                      objectiveTitle,
                                                      objectiveID
                                                  }: UpdateObjectiveModalProp) {
    const [updatedObjectiveTitle, setUpdatedObjectiveTitle] = useState("");
    const {setObjectives} = useContext<OKRObjectivesProviderType>(OKRObjectivesProviderContext);
    
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
                    placeholder={objectiveTitle}
                    required
                    onChange={(e) => {
                        setUpdatedObjectiveTitle(e.target.value);
                    }}
                />
                
                <div className="flex justify-between">
                    
                    <button
                        className={
                            "border-1 bg-blue-400 p-3 text-white rounded-lg uppercase font-semibold  hover:bg-blue-600"
                        }
                        onClick={async () => {
                            await updateOKRObjective(objectiveID, updatedObjectiveTitle);
                            const updatedObjectives = await getOKRObjectives();
                            setObjectives(updatedObjectives);
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