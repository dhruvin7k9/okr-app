import {KeyResultInsertType, ObjectiveInsertType, ObjectiveType} from "../types/okr-types";

const URL = "http://localhost:3000";

async function generateOKRHandler(prompt : string) {
    const responseData = await fetch(`${URL}/prompt?input=${prompt}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    
    return ;
}

async function getOKRObjectives(): Promise<ObjectiveType[]> {
    const responseData = await fetch(`${URL}/objectives`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    return await responseData.json();
}

async function insertOKRObjective(newOKR: ObjectiveInsertType): Promise<void> {
    const responseObjectiveData = await fetch(`${URL}/objectives`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({title: newOKR.title})
    });
    
    const objective = await responseObjectiveData.json();
    let keyResults = [];
    
    for(let i = 0; i < newOKR.keyResults.length; i++) {
        keyResults.push({...newOKR.keyResults[i], objectiveId : objective.id});
    }
    
    const responseKeyResultsData = await fetch(`${URL}/key-results/many`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(keyResults)
    });
    console.log(responseKeyResultsData);
    return;
}

async function updateOKRKeyResult(keyResultId: string | number, updatedKeyResult: KeyResultInsertType) {
    const responseData = await fetch(`${URL}/key-results/${keyResultId}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(updatedKeyResult)
    });
    console.log(responseData);
    return;
}

async function updateOKRObjective(objectiveID: string | number | undefined, updatedObjectiveTitle: string): Promise<void> {
    const responseData = await fetch(`${URL}/objectives/${objectiveID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({title : updatedObjectiveTitle})
    });
    console.log(`updated : ${responseData}`);
}

async function addOKRKeyResult(objectiveID: string | number | undefined, keyResult: KeyResultInsertType): Promise<void> {
    const keyResultWithObjectiveId = {...keyResult, objectiveId : objectiveID!};
    const responseData = await fetch(`${URL}/key-results`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(keyResultWithObjectiveId)
    });
    console.log(`updated objective with added key result: ${responseData}`);
}

async function deleteOKRObjective(objectiveID: string | number): Promise<void> {
    const responseData = await fetch(`${URL}/objectives/${objectiveID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
    });
    console.log(`deleted : ${responseData}`);
}

async function deleteOKRKeyResult(keyResultID: string | number) {
    const responseData = await fetch(`${URL}/key-results/${keyResultID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
    });
    console.log(`deleted key result : ${responseData}`);
}

export {
    insertOKRObjective,
    getOKRObjectives,
    updateOKRObjective,
    updateOKRKeyResult,
    deleteOKRObjective,
    deleteOKRKeyResult,
    addOKRKeyResult,
    generateOKRHandler
};