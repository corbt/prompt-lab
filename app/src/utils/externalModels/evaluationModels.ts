import { predefinedModelNames, externalModel, predefinedExternalModels } from "./allModels";

const evaluationModels = [
  predefinedModelNames.GPT_4_0613,
  predefinedModelNames.GPT_4_1106_PREVIEW,
  predefinedModelNames.GPT_4_0125_PREVIEW,
];

export const predefinedEvaluationModels: externalModel[] = predefinedExternalModels.filter(
  (model) => evaluationModels.includes(model.name),
);

export const defaultEvaluationModel = predefinedEvaluationModels.filter(
  (model) => model.name === predefinedModelNames.GPT_4_0125_PREVIEW,
)[0] as externalModel;

export const findPredefinedEvaluationModel = (id: string) =>
  predefinedEvaluationModels.find((model) => model.id === id);
