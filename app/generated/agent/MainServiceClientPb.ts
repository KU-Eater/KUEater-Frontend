/**
 * @fileoverview gRPC-Web generated client stub for kueater.agent
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v6.30.0
// source: agent/main.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as agent_main_pb from '../agent/main_pb'; // proto import: "agent/main.proto"


export class KUEaterEmbeddingAgentClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetEmbedding = new grpcWeb.MethodDescriptor(
    '/kueater.agent.KUEaterEmbeddingAgent/GetEmbedding',
    grpcWeb.MethodType.UNARY,
    agent_main_pb.GetEmbeddingRequest,
    agent_main_pb.GetEmbeddingResponse,
    (request: agent_main_pb.GetEmbeddingRequest) => {
      return request.serializeBinary();
    },
    agent_main_pb.GetEmbeddingResponse.deserializeBinary
  );

  getEmbedding(
    request: agent_main_pb.GetEmbeddingRequest,
    metadata?: grpcWeb.Metadata | null): Promise<agent_main_pb.GetEmbeddingResponse>;

  getEmbedding(
    request: agent_main_pb.GetEmbeddingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: agent_main_pb.GetEmbeddingResponse) => void): grpcWeb.ClientReadableStream<agent_main_pb.GetEmbeddingResponse>;

  getEmbedding(
    request: agent_main_pb.GetEmbeddingRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: agent_main_pb.GetEmbeddingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kueater.agent.KUEaterEmbeddingAgent/GetEmbedding',
        request,
        metadata || {},
        this.methodDescriptorGetEmbedding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kueater.agent.KUEaterEmbeddingAgent/GetEmbedding',
    request,
    metadata || {},
    this.methodDescriptorGetEmbedding);
  }

  methodDescriptorNewRecommendations = new grpcWeb.MethodDescriptor(
    '/kueater.agent.KUEaterEmbeddingAgent/NewRecommendations',
    grpcWeb.MethodType.UNARY,
    agent_main_pb.NewRecommendationsRequest,
    agent_main_pb.NewRecommendationsResponse,
    (request: agent_main_pb.NewRecommendationsRequest) => {
      return request.serializeBinary();
    },
    agent_main_pb.NewRecommendationsResponse.deserializeBinary
  );

  newRecommendations(
    request: agent_main_pb.NewRecommendationsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<agent_main_pb.NewRecommendationsResponse>;

  newRecommendations(
    request: agent_main_pb.NewRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: agent_main_pb.NewRecommendationsResponse) => void): grpcWeb.ClientReadableStream<agent_main_pb.NewRecommendationsResponse>;

  newRecommendations(
    request: agent_main_pb.NewRecommendationsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: agent_main_pb.NewRecommendationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/kueater.agent.KUEaterEmbeddingAgent/NewRecommendations',
        request,
        metadata || {},
        this.methodDescriptorNewRecommendations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/kueater.agent.KUEaterEmbeddingAgent/NewRecommendations',
    request,
    metadata || {},
    this.methodDescriptorNewRecommendations);
  }

}

