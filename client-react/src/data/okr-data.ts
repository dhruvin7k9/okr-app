import {ObjectiveDisplayType, ObjectiveType} from "../types/okr-types";

async function insertOKRObjective (newOKR: ObjectiveDisplayType): Promise<void> {
    const responseData = await fetch("http://localhost:3000/objectives", {
        method: "POST",
        body: JSON.stringify(newOKR)
    });
    console.log(responseData);
    return;
}

async function getOKRObjectives (): Promise<ObjectiveType[]>  {
    const responseData = await fetch("http://localhost:3000/objectives");
    return await responseData.json();
}

async function updateOKRObjective (objectiveID: string, objective: ObjectiveType | undefined): Promise<void> {
    const responseData = await fetch(`http://localhost:3000/objectives/${objectiveID}`, {
        method: "PUT",
        body: JSON.stringify(objective)
    });
    console.log(`updated : ${responseData}`);
}

async function addOKRKeyResult (objectiveID: string, objective: ObjectiveType): Promise<void> {
    const responseData = await fetch(`http://localhost:3000/objectives/${objectiveID}`, {
        method: "PATCH",
        body: JSON.stringify(objective)
    });
    console.log(`updated objective with added key result: ${responseData}`);
}

async function deleteOKRObjective (objectiveID: string): Promise<void> {
    const responseData = await fetch(`http://localhost:3000/objectives/${objectiveID}`, {
        method: "DELETE",
    });
    console.log(`deleted : ${responseData}`);
}

async function deleteOKRKeyResult (objectiveID : string, objective: ObjectiveType) {
    const responseData = await fetch(`http://localhost:3000/objectives/${objectiveID}`, {
        method: "PATCH",
        body: JSON.stringify(objective)
    });
    console.log(`deleted key result objective : ${responseData}`);
}

export {insertOKRObjective, getOKRObjectives, updateOKRObjective, deleteOKRObjective, deleteOKRKeyResult, addOKRKeyResult};