import React from "react";

type KeyResultType = {
  title: string,
  initialValue: number,
  currentValue: number,
  targetValue: number,
  metrics: string
};

type ObjectiveDisplayType = {
  title: string,
  keyResults: KeyResultType[]
};

type ObjectiveType = ObjectiveDisplayType & {
  id: string;
};

type OKRObjectivesProviderType = {
  objectives: ObjectiveType[] | null;
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[] | null>>;
}

export type { KeyResultType, ObjectiveDisplayType, ObjectiveType, OKRObjectivesProviderType };
