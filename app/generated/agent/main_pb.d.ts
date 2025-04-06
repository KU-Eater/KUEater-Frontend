import * as jspb from 'google-protobuf'



export class GetEmbeddingRequest extends jspb.Message {
  getText(): string;
  setText(value: string): GetEmbeddingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmbeddingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmbeddingRequest): GetEmbeddingRequest.AsObject;
  static serializeBinaryToWriter(message: GetEmbeddingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmbeddingRequest;
  static deserializeBinaryFromReader(message: GetEmbeddingRequest, reader: jspb.BinaryReader): GetEmbeddingRequest;
}

export namespace GetEmbeddingRequest {
  export type AsObject = {
    text: string,
  }
}

export class GetEmbeddingResponse extends jspb.Message {
  getVectors(): string;
  setVectors(value: string): GetEmbeddingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmbeddingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmbeddingResponse): GetEmbeddingResponse.AsObject;
  static serializeBinaryToWriter(message: GetEmbeddingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmbeddingResponse;
  static deserializeBinaryFromReader(message: GetEmbeddingResponse, reader: jspb.BinaryReader): GetEmbeddingResponse;
}

export namespace GetEmbeddingResponse {
  export type AsObject = {
    vectors: string,
  }
}

export class NewRecommendationsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): NewRecommendationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRecommendationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRecommendationsRequest): NewRecommendationsRequest.AsObject;
  static serializeBinaryToWriter(message: NewRecommendationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRecommendationsRequest;
  static deserializeBinaryFromReader(message: NewRecommendationsRequest, reader: jspb.BinaryReader): NewRecommendationsRequest;
}

export namespace NewRecommendationsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class NewRecommendationsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRecommendationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewRecommendationsResponse): NewRecommendationsResponse.AsObject;
  static serializeBinaryToWriter(message: NewRecommendationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRecommendationsResponse;
  static deserializeBinaryFromReader(message: NewRecommendationsResponse, reader: jspb.BinaryReader): NewRecommendationsResponse;
}

export namespace NewRecommendationsResponse {
  export type AsObject = {
  }
}

