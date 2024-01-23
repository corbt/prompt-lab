import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, string | number | bigint, string | number | bigint>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | null | number | string;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface _PrismaMigrations {
  id: string;
  checksum: string;
  finished_at: Timestamp | null;
  migration_name: string;
  logs: string | null;
  rolled_back_at: Timestamp | null;
  started_at: Generated<Timestamp>;
  applied_steps_count: Generated<number>;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  refresh_token_expires_in: number | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}

export interface ApiKey {
  id: string;
  name: string;
  apiKey: string;
  projectId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  provider: Generated<"OPENAI" | "OPENPIPE">;
  readOnly: Generated<boolean>;
}

export interface CachedProcessedNodeData {
  id: string;
  nodeHash: string;
  incomingDEIHash: string;
  incomingDEOHash: string | null;
  outgoingDEIHash: string | null;
  outgoingDEOHash: string | null;
  filterOutcome: string | null;
  explanation: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface CachedResponse {
  id: string;
  cacheKey: string;
  modelId: string;
  completionId: string;
  respPayload: Json;
  inputTokens: number;
  outputTokens: number;
  projectId: string;
  createdAt: Generated<Timestamp>;
}

export interface DataChannel {
  id: string;
  originId: string | null;
  destinationId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface Dataset {
  id: string;
  name: string;
  projectId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  trainingRatio: Generated<number>;
  enabledComparisonModels: Generated<string[] | null>;
  nodeId: string | null;
}

export interface DatasetEntry {
  id: string;
  datasetId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  loggedCallId: string | null;
  messages: Generated<Json>;
  inputTokens: number | null;
  output: Json | null;
  outputTokens: number | null;
  split: "TEST" | "TRAIN";
  authoringUserId: string | null;
  outdated: Generated<boolean>;
  sortKey: string;
  persistentId: string;
  function_call: Json | null;
  functions: Json | null;
  importId: string;
  provenance: "RELABELED_BY_HUMAN" | "RELABELED_BY_MODEL" | "REQUEST_LOG" | "UPLOAD";
  tool_choice: Json | null;
  tools: Json | null;
  response_format: Json | null;
}

export interface DatasetEntryInput {
  function_call: Json | null;
  functions: Json | null;
  tool_choice: Json | null;
  tools: Json | null;
  messages: Generated<Json>;
  response_format: Json | null;
  inputTokens: number | null;
  hash: string;
  createdAt: Generated<Timestamp>;
}

export interface DatasetEntryOutput {
  output: Json | null;
  hash: string;
  createdAt: Generated<Timestamp>;
}

export interface DatasetEval {
  id: string;
  name: string;
  instructions: string | null;
  type: Generated<"FIELD_COMPARISON" | "HEAD_TO_HEAD">;
  datasetId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface DatasetEvalDatasetEntry {
  id: string;
  datasetEvalId: string;
  datasetEntryId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface DatasetEvalOutputSource {
  id: string;
  modelId: string;
  datasetEvalId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface DatasetEvalResult {
  id: string;
  score: number | null;
  explanation: string | null;
  errorMessage: string | null;
  status: Generated<"COMPLETE" | "ERROR" | "IN_PROGRESS" | "PENDING">;
  comparisonResultId: string | null;
  comparisonOutputSourceId: string | null;
  datasetEvalDatasetEntryId: string;
  datasetEvalOutputSourceId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  wasFirst: boolean | null;
  judge: string | null;
}

export interface DatasetFileUpload {
  id: string;
  datasetId: string | null;
  blobName: string;
  fileName: string;
  fileSize: number;
  progress: Generated<number>;
  status: Generated<"COMPLETE" | "DOWNLOADING" | "ERROR" | "PENDING" | "PROCESSING" | "SAVING">;
  uploadedAt: Timestamp;
  visible: Generated<boolean>;
  errorMessage: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  nodeId: string | null;
}

export interface FineTune {
  id: string;
  slug: string;
  status: Generated<
    "DEPLOYED" | "ERROR" | "PENDING" | "STARTED" | "TRAINING" | "TRANSFERRING_TRAINING_DATA"
  >;
  trainingStartedAt: Timestamp | null;
  trainingFinishedAt: Timestamp | null;
  deploymentStartedAt: Timestamp | null;
  deploymentFinishedAt: Timestamp | null;
  datasetId: string;
  projectId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  errorMessage: string | null;
  trainingBlobName: string | null;
  baseModel: string;
  huggingFaceModelId: string | null;
  pipelineVersion: number;
  modalTrainingJobId: string | null;
  openaiModelId: string | null;
  openaiTrainingJobId: string | null;
  provider: "openai" | "openpipe";
  trainingConfig: Json | null;
  trainingConfigOverrides: Json | null;
  numEpochs: number | null;
  numTrainingAutoretries: Generated<number>;
  gpt4FallbackEnabled: Generated<boolean>;
}

export interface FineTuneTestingEntry {
  id: string;
  cacheKey: string | null;
  prunedInputTokens: number | null;
  outputTokens: number | null;
  output: Json | null;
  errorMessage: string | null;
  fineTuneId: string | null;
  datasetEntryId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  score: number | null;
  modelId: string;
  finishReason: string | null;
}

export interface FineTuneTrainingEntry {
  id: string;
  datasetEntryId: string;
  fineTuneId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  outputTokens: number | null;
  prunedInputTokens: number | null;
}

export interface GraphileWorkerJobQueues {
  queue_name: string;
  job_count: number;
  locked_at: Timestamp | null;
  locked_by: string | null;
}

export interface GraphileWorkerJobs {
  id: Generated<Int8>;
  queue_name: string | null;
  task_identifier: string;
  payload: Generated<Json>;
  priority: Generated<number>;
  run_at: Generated<Timestamp>;
  attempts: Generated<number>;
  max_attempts: Generated<number>;
  last_error: string | null;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
  key: string | null;
  locked_at: Timestamp | null;
  locked_by: string | null;
  revision: Generated<number>;
  flags: Json | null;
}

export interface GraphileWorkerKnownCrontabs {
  identifier: string;
  known_since: Timestamp;
  last_execution: Timestamp | null;
}

export interface GraphileWorkerMigrations {
  id: number;
  ts: Generated<Timestamp>;
}

export interface LoggedCall {
  id: string;
  requestedAt: Timestamp;
  projectId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  model: string | null;
  completionId: string | null;
  cost: number | null;
  durationMs: number | null;
  errorMessage: string | null;
  finishReason: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  receivedAt: Timestamp | null;
  reqPayload: Json | null;
  respPayload: Json | null;
  statusCode: number | null;
  cacheHit: Generated<boolean>;
  processingStatus: Generated<"PENDING" | "PROCESSED" | "PROCESSING">;
}

export interface LoggedCallTag {
  id: string;
  name: string;
  value: string | null;
  loggedCallId: string;
  projectId: string;
}

export interface MonitorMatch {
  id: string;
  checkPassed: boolean;
  monitorId: string;
  loggedCallId: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  status: Generated<"IN_REVIEW" | "MATCH" | "PENDING">;
}

export interface Node {
  id: string;
  type:
    | "Dataset"
    | "Filter"
    | "LLMFilter"
    | "LLMRelabel"
    | "ManualRelabel"
    | "Monitor"
    | "StaticDataset";
  config: Json | null;
  hash: string;
  maxEntriesPerMinute: number | null;
  projectId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  maxOutputSize: number | null;
  name: string;
}

export interface NodeData {
  id: string;
  status: Generated<"ERROR" | "PENDING" | "PROCESSED" | "PROCESSING">;
  dataChannelId: string;
  parentNodeDataId: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  inputHash: string;
  loggedCallId: string | null;
  outputHash: string;
  rejectedOutputHash: string | null;
  split: "TEST" | "TRAIN";
}

export interface NodeOutput {
  id: string;
  label: string;
  nodeId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface Project {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  personalProjectUserId: string | null;
  name: Generated<string>;
  slug: Generated<string>;
  isPublic: Generated<boolean>;
  isHidden: Generated<boolean>;
}

export interface ProjectUser {
  id: string;
  role: "ADMIN" | "MEMBER" | "VIEWER";
  projectId: string;
  userId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface PruningRule {
  id: string;
  textToMatch: string;
  tokensInText: number;
  datasetId: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  fineTuneId: string | null;
}

export interface PruningRuleMatch {
  id: string;
  pruningRuleId: string;
  datasetEntryId: string | null;
  datasetEntryInputHash: string | null;
}

export interface RelabelRequest {
  id: string;
  batchId: string;
  datasetEntryPersistentId: string;
  status: Generated<"COMPLETE" | "ERROR" | "IN_PROGRESS" | "PENDING">;
  errorMessage: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Timestamp;
}

export interface UsageLog {
  id: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
  type: Generated<"CACHE_HIT" | "EXTERNAL" | "TESTING" | "TRAINING">;
  fineTuneId: string | null;
  createdAt: Generated<Timestamp>;
  projectId: string | null;
  billable: Generated<boolean>;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Timestamp | null;
  image: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Generated<Timestamp>;
  role: Generated<"ADMIN" | "USER">;
  gitHubUsername: string | null;
  lastViewedProjectId: string | null;
}

export interface UserInvitation {
  id: string;
  projectId: string;
  email: string;
  role: "ADMIN" | "MEMBER" | "VIEWER";
  invitationToken: string;
  senderId: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  isCanceled: Generated<boolean>;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Timestamp;
}

export interface DB {
  _prisma_migrations: _PrismaMigrations;
  Account: Account;
  ApiKey: ApiKey;
  CachedProcessedNodeData: CachedProcessedNodeData;
  CachedResponse: CachedResponse;
  DataChannel: DataChannel;
  Dataset: Dataset;
  DatasetEntry: DatasetEntry;
  DatasetEntryInput: DatasetEntryInput;
  DatasetEntryOutput: DatasetEntryOutput;
  DatasetEval: DatasetEval;
  DatasetEvalDatasetEntry: DatasetEvalDatasetEntry;
  DatasetEvalOutputSource: DatasetEvalOutputSource;
  DatasetEvalResult: DatasetEvalResult;
  DatasetFileUpload: DatasetFileUpload;
  FineTune: FineTune;
  FineTuneTestingEntry: FineTuneTestingEntry;
  FineTuneTrainingEntry: FineTuneTrainingEntry;
  "graphile_worker.job_queues": GraphileWorkerJobQueues;
  "graphile_worker.jobs": GraphileWorkerJobs;
  "graphile_worker.known_crontabs": GraphileWorkerKnownCrontabs;
  "graphile_worker.migrations": GraphileWorkerMigrations;
  LoggedCall: LoggedCall;
  LoggedCallTag: LoggedCallTag;
  MonitorMatch: MonitorMatch;
  Node: Node;
  NodeData: NodeData;
  NodeOutput: NodeOutput;
  Project: Project;
  ProjectUser: ProjectUser;
  PruningRule: PruningRule;
  PruningRuleMatch: PruningRuleMatch;
  RelabelRequest: RelabelRequest;
  Session: Session;
  UsageLog: UsageLog;
  User: User;
  UserInvitation: UserInvitation;
  VerificationToken: VerificationToken;
}
