import React from "react";

type KeyResultInsertType = {
  title: string;
  initialValue: number;
  currentValue: number;
  targetValue: number;
  metric: string;
};

type KeyResultType = KeyResultInsertType & {
  id: string | number;
  objectiveId: string | number;
};

type ObjectiveInsertType = {
  title: string;
  keyResults: KeyResultInsertType[]
};

type ObjectiveType = {
  id: string | number;
  title: string;
  keyResults: KeyResultType[]
};

type OKRObjectivesProviderType = {
  objectives: ObjectiveType[] | null;
  setObjectives: React.Dispatch<React.SetStateAction<ObjectiveType[] | null>>;
}

export type { KeyResultInsertType, KeyResultType, ObjectiveInsertType, ObjectiveType, OKRObjectivesProviderType };