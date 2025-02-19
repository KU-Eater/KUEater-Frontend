import * as jspb from 'google-protobuf'

import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"
import * as data_index_pb from '../data/index_pb'; // proto import: "data/index.proto"
import * as data_search_pb from '../data/search_pb'; // proto import: "data/search.proto"
import * as data_review_pb from '../data/review_pb'; // proto import: "data/review.proto"


export class GetMenuRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): GetMenuRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuRequest): GetMenuRequest.AsObject;
  static serializeBinaryToWriter(message: GetMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuRequest;
  static deserializeBinaryFromReader(message: GetMenuRequest, reader: jspb.BinaryReader): GetMenuRequest;
}

export namespace GetMenuRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class GetMenuResponse extends jspb.Message {
  getItem(): domain_pb.MenuItem | undefined;
  setItem(value?: domain_pb.MenuItem): GetMenuResponse;
  hasItem(): boolean;
  clearItem(): GetMenuResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuResponse): GetMenuResponse.AsObject;
  static serializeBinaryToWriter(message: GetMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuResponse;
  static deserializeBinaryFromReader(message: GetMenuResponse, reader: jspb.BinaryReader): GetMenuResponse;
}

export namespace GetMenuResponse {
  export type AsObject = {
    item?: domain_pb.MenuItem.AsObject,
  }
}

export class GetStallRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): GetStallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStallRequest): GetStallRequest.AsObject;
  static serializeBinaryToWriter(message: GetStallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStallRequest;
  static deserializeBinaryFromReader(message: GetStallRequest, reader: jspb.BinaryReader): GetStallRequest;
}

export namespace GetStallRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class GetStallResponse extends jspb.Message {
  getStall(): domain_pb.Stall | undefined;
  setStall(value?: domain_pb.Stall): GetStallResponse;
  hasStall(): boolean;
  clearStall(): GetStallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStallResponse): GetStallResponse.AsObject;
  static serializeBinaryToWriter(message: GetStallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStallResponse;
  static deserializeBinaryFromReader(message: GetStallResponse, reader: jspb.BinaryReader): GetStallResponse;
}

export namespace GetStallResponse {
  export type AsObject = {
    stall?: domain_pb.Stall.AsObject,
  }
}

export class GetReviewRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): GetReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReviewRequest): GetReviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReviewRequest;
  static deserializeBinaryFromReader(message: GetReviewRequest, reader: jspb.BinaryReader): GetReviewRequest;
}

export namespace GetReviewRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class GetReviewResponse extends jspb.Message {
  getReview(): domain_pb.Review | undefined;
  setReview(value?: domain_pb.Review): GetReviewResponse;
  hasReview(): boolean;
  clearReview(): GetReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReviewResponse): GetReviewResponse.AsObject;
  static serializeBinaryToWriter(message: GetReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReviewResponse;
  static deserializeBinaryFromReader(message: GetReviewResponse, reader: jspb.BinaryReader): GetReviewResponse;
}

export namespace GetReviewResponse {
  export type AsObject = {
    review?: domain_pb.Review.AsObject,
  }
}

