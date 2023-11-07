import { z } from "zod";
import {
  chatCompletionMessage,
  chatCompletionInput,
  chatCompletionOutput,
  chatMessage,
  functionCallInput,
  functionsInput,
} from "./shared.types";
import { type DatasetEntry, type LoggedCallModelResponse } from "@prisma/client";

export const datasetEntrySchema = z
  .object({
    messages: z.array(chatMessage),
    function_call: functionCallInput.nullable(),
    functions: functionsInput.nullable(),
    output: chatCompletionMessage.optional().nullable(),
  })
  .passthrough();

export const typedDatasetEntry = <T extends Pick<DatasetEntry, "messages">>(
  input: T,
  // @ts-expect-error zod doesn't type `passthrough()` correctly.
): Omit<T, "messages"> & z.infer<typeof datasetEntrySchema> => datasetEntrySchema.parse(input);

const loggedCallModelResponseSchema = z
  .object({
    reqPayload: chatCompletionInput.passthrough(),
    respPayload: chatCompletionOutput.passthrough().optional().nullable(),
  })
  .passthrough();

export const typedLoggedCallModelResponse = <T extends Pick<LoggedCallModelResponse, "reqPayload">>(
  input: T,
): Omit<T, "reqPayload" | "respPayload"> & z.infer<typeof loggedCallModelResponseSchema> =>
  // @ts-expect-error zod doesn't type `passthrough()` correctly.
  loggedCallModelResponseSchema.parse(input);

const fineTuneTestingEntrySchema = z
  .object({
    output: chatCompletionMessage,
  })
  .passthrough();

export const typedFineTuneTestingEntry = <T>(
  input: T,
): T & z.infer<typeof fineTuneTestingEntrySchema> =>
  // @ts-expect-error zod doesn't type `passthrough()` correctly.
  fineTuneTestingEntrySchema.parse(input);
