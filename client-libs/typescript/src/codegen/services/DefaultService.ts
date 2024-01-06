/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create completion for a prompt
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public createChatCompletion(
        requestBody: {
            model?: string;
            messages?: Array<({
                role: 'system';
                content?: string;
            } | {
                role: 'user';
                content?: (string | Array<({
                    type: 'image_url';
                    image_url: {
                        detail?: ('auto' | 'low' | 'high');
                        url: string;
                    };
                } | {
                    type: 'text';
                    text: string;
                })>);
            } | {
                role: 'assistant';
                content?: (string | 'null' | null);
                function_call?: {
                    name?: string;
                    arguments?: string;
                };
                tool_calls?: Array<{
                    id: string;
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: 'function';
                }>;
            } | {
                role: 'tool';
                content?: string;
                tool_call_id: string;
            } | {
                role: 'function';
                name: string;
                content: (string | 'null' | null);
            })>;
            function_call?: ('none' | 'auto' | {
                name: string;
            });
            functions?: Array<{
                name: string;
                parameters?: Record<string, any>;
                description?: string;
            }>;
            tool_choice?: ('none' | 'auto' | {
                type?: 'function';
                function?: {
                    name: string;
                };
            });
            tools?: Array<{
                function: {
                    name: string;
                    parameters?: Record<string, any>;
                    description?: string;
                };
                type: 'function';
            }>;
            'n'?: number | null;
            max_tokens?: number | null;
            temperature?: number | null;
            stream?: boolean;
            response_format?: {
                type?: ('text' | 'json_object');
            };
        },
    ): CancelablePromise<{
        id: string;
        object: 'chat.completion';
        created: number;
        model: string;
        choices: Array<{
            finish_reason: ('length' | 'function_call' | 'tool_calls' | 'stop' | 'content_filter');
            index: number;
            message: {
                role: 'assistant';
                content?: (string | 'null' | null);
                function_call?: {
                    name?: string;
                    arguments?: string;
                };
                tool_calls?: Array<{
                    id: string;
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: 'function';
                }>;
            };
            logprobs?: {
                content: Array<{
                    token: string;
                    bytes: Array<number> | null;
                    logprob: number;
                    top_logprobs: Array<{
                        token: string;
                        bytes: Array<number> | null;
                        logprob: number;
                    }>;
                }> | null;
            } | null;
        }>;
        usage?: {
            prompt_tokens: number;
            completion_tokens: number;
            total_tokens: number;
        };
    } | null> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/chat/completions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Report an API call
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public report(
        requestBody: {
            /**
             * Unix timestamp in milliseconds
             */
            requestedAt?: number;
            /**
             * Unix timestamp in milliseconds
             */
            receivedAt?: number;
            /**
             * JSON-encoded request payload
             */
            reqPayload?: any;
            /**
             * JSON-encoded response payload
             */
            respPayload?: any;
            /**
             * HTTP status code of response
             */
            statusCode?: number;
            /**
             * User-friendly error message
             */
            errorMessage?: string;
            /**
             * Extra tags to attach to the call for filtering. Eg { "userId": "123", "promptId": "populate-title" }
             */
            tags?: Record<string, (string | number | boolean | 'null' | null)>;
        },
    ): CancelablePromise<{
        status: ('ok' | 'error');
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/report',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update tags for logged calls matching the provided filters
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public updateLogTags(
        requestBody: {
            filters: Array<({
                field: ('model' | 'completionId' | string);
                equals: (string | number | boolean);
            } | {
                field: ('model' | 'completionId' | string);
                contains: (string | number | boolean);
            })>;
            /**
             * Extra tags to attach to the call for filtering. Eg { "userId": "123", "promptId": "populate-title" }
             */
            tags: Record<string, (string | number | boolean | 'null' | null)>;
        },
    ): CancelablePromise<{
        matchedLogs: number;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/logs/update-tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the latest logged call (only for local testing)
     * @returns any Successful response
     * @throws ApiError
     */
    public localTestingOnlyGetLatestLoggedCall(): CancelablePromise<{
        createdAt: string;
        statusCode: number | null;
        errorMessage: string | null;
        reqPayload?: any;
        respPayload?: any;
        tags: Record<string, string | null>;
    } | null> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/local-testing-only-get-latest-logged-call',
        });
    }
}
