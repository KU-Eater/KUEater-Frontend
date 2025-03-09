import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"


export class PostReviewRequest extends jspb.Message {
  getAuthor(): string;
  setAuthor(value: string): PostReviewRequest;

  getRating(): number;
  setRating(value: number): PostReviewRequest;

  getStallId(): string;
  setStallId(value: string): PostReviewRequest;

  getItemIdsList(): Array<string>;
  setItemIdsList(value: Array<string>): PostReviewRequest;
  clearItemIdsList(): PostReviewRequest;
  addItemIds(value: string, index?: number): PostReviewRequest;

  getContent(): string;
  setContent(value: string): PostReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostReviewRequest): PostReviewRequest.AsObject;
  static serializeBinaryToWriter(message: PostReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostReviewRequest;
  static deserializeBinaryFromReader(message: PostReviewRequest, reader: jspb.BinaryReader): PostReviewRequest;
}

export namespace PostReviewRequest {
  export type AsObject = {
    author: string,
    rating: number,
    stallId: string,
    itemIdsList: Array<string>,
    content: string,
  }
}

export class PostReviewResponse extends jspb.Message {
  getReview(): domain_pb.Review | undefined;
  setReview(value?: domain_pb.Review): PostReviewResponse;
  hasReview(): boolean;
  clearReview(): PostReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostReviewResponse): PostReviewResponse.AsObject;
  static serializeBinaryToWriter(message: PostReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostReviewResponse;
  static deserializeBinaryFromReader(message: PostReviewResponse, reader: jspb.BinaryReader): PostReviewResponse;
}

export namespace PostReviewResponse {
  export type AsObject = {
    review?: domain_pb.Review.AsObject,
  }
}

export class ListReviewsRequest extends jspb.Message {
  getStall(): string;
  setStall(value: string): ListReviewsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReviewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsRequest): ListReviewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReviewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsRequest;
  static deserializeBinaryFromReader(message: ListReviewsRequest, reader: jspb.BinaryReader): ListReviewsRequest;
}

export namespace ListReviewsRequest {
  export type AsObject = {
    stall: string,
    pageSize: number,
  }
}

export class ListReviewsResponse extends jspb.Message {
  getReviewsList(): Array<domain_pb.Review>;
  setReviewsList(value: Array<domain_pb.Review>): ListReviewsResponse;
  clearReviewsList(): ListReviewsResponse;
  addReviews(value?: domain_pb.Review, index?: number): domain_pb.Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsResponse): ListReviewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsResponse;
  static deserializeBinaryFromReader(message: ListReviewsResponse, reader: jspb.BinaryReader): ListReviewsResponse;
}

export namespace ListReviewsResponse {
  export type AsObject = {
    reviewsList: Array<domain_pb.Review.AsObject>,
  }
}

