import {createContext, ReactElement, useState} from "react";
import {ObjectiveType, OKRObjectivesProviderType} from "../types/okr-types.ts";

const defaultOKRValue : OKRObjectivesProviderType = {
    objectives : null,
    setObjectives : (): void => {}
}

const OKRObjectivesProviderContext = createContext<OKRObjectivesProviderType>(defaultOKRValue);

function OKRObjectivesProvider({children} : {
    children : ReactElement
}) {
    const [objectives, setObjectives] = useState<ObjectiveType[] | null>(null);

    return (
        <OKRObjectivesProviderContext.Provider
            value={{objectives, setObjectives}}>
            {children}
        </OKRObjectivesProviderContext.Provider>
    );
}

export {OKRObjectivesProviderContext, OKRObjectivesProvider};