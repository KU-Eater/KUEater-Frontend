import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"
import * as data_types_pb from '../data/types_pb'; // proto import: "data/types.proto"


export class PostReviewRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): PostReviewRequest;

  getRating(): number;
  setRating(value: number): PostReviewRequest;

  getStallId(): string;
  setStallId(value: string): PostReviewRequest;

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
    userId: string,
    rating: number,
    stallId: string,
    content: string,
  }
}

export class PostReviewResponse extends jspb.Message {
  getReview(): data_types_pb.ReviewCardProps | undefined;
  setReview(value?: data_types_pb.ReviewCardProps): PostReviewResponse;
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
    review?: data_types_pb.ReviewCardProps.AsObject,
  }
}

export class StarRating extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): StarRating;

  getPercent(): number;
  setPercent(value: number): StarRating;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StarRating.AsObject;
  static toObject(includeInstance: boolean, msg: StarRating): StarRating.AsObject;
  static serializeBinaryToWriter(message: StarRating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StarRating;
  static deserializeBinaryFromReader(message: StarRating, reader: jspb.BinaryReader): StarRating;
}

export namespace StarRating {
  export type AsObject = {
    total: number,
    percent: number,
  }
}

export class ByStarGroup extends jspb.Message {
  getOne(): StarRating | undefined;
  setOne(value?: StarRating): ByStarGroup;
  hasOne(): boolean;
  clearOne(): ByStarGroup;

  getTwo(): StarRating | undefined;
  setTwo(value?: StarRating): ByStarGroup;
  hasTwo(): boolean;
  clearTwo(): ByStarGroup;

  getThree(): StarRating | undefined;
  setThree(value?: StarRating): ByStarGroup;
  hasThree(): boolean;
  clearThree(): ByStarGroup;

  getFour(): StarRating | undefined;
  setFour(value?: StarRating): ByStarGroup;
  hasFour(): boolean;
  clearFour(): ByStarGroup;

  getFive(): StarRating | undefined;
  setFive(value?: StarRating): ByStarGroup;
  hasFive(): boolean;
  clearFive(): ByStarGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ByStarGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ByStarGroup): ByStarGroup.AsObject;
  static serializeBinaryToWriter(message: ByStarGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ByStarGroup;
  static deserializeBinaryFromReader(message: ByStarGroup, reader: jspb.BinaryReader): ByStarGroup;
}

export namespace ByStarGroup {
  export type AsObject = {
    one?: StarRating.AsObject,
    two?: StarRating.AsObject,
    three?: StarRating.AsObject,
    four?: StarRating.AsObject,
    five?: StarRating.AsObject,
  }
}

export class RatingSummary extends jspb.Message {
  getAvgStallRating(): number;
  setAvgStallRating(value: number): RatingSummary;

  getTotalReviews(): number;
  setTotalReviews(value: number): RatingSummary;

  getTotalLikes(): number;
  setTotalLikes(value: number): RatingSummary;

  getTotalMenuSaved(): number;
  setTotalMenuSaved(value: number): RatingSummary;

  getTotalStallSaved(): number;
  setTotalStallSaved(value: number): RatingSummary;

  getByStars(): ByStarGroup | undefined;
  setByStars(value?: ByStarGroup): RatingSummary;
  hasByStars(): boolean;
  clearByStars(): RatingSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RatingSummary.AsObject;
  static toObject(includeInstance: boolean, msg: RatingSummary): RatingSummary.AsObject;
  static serializeBinaryToWriter(message: RatingSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RatingSummary;
  static deserializeBinaryFromReader(message: RatingSummary, reader: jspb.BinaryReader): RatingSummary;
}

export namespace RatingSummary {
  export type AsObject = {
    avgStallRating: number,
    totalReviews: number,
    totalLikes: number,
    totalMenuSaved: number,
    totalStallSaved: number,
    byStars?: ByStarGroup.AsObject,
  }
}

export class ListReviewsRequest extends jspb.Message {
  getStallId(): string;
  setStallId(value: string): ListReviewsRequest;

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
    stallId: string,
    pageSize: number,
  }
}

export class ListReviewsResponse extends jspb.Message {
  getStallId(): string;
  setStallId(value: string): ListReviewsResponse;

  getStallName(): string;
  setStallName(value: string): ListReviewsResponse;

  getRatingSummary(): RatingSummary | undefined;
  setRatingSummary(value?: RatingSummary): ListReviewsResponse;
  hasRatingSummary(): boolean;
  clearRatingSummary(): ListReviewsResponse;

  getReviewsList(): Array<data_types_pb.ReviewCardProps>;
  setReviewsList(value: Array<data_types_pb.ReviewCardProps>): ListReviewsResponse;
  clearReviewsList(): ListReviewsResponse;
  addReviews(value?: data_types_pb.ReviewCardProps, index?: number): data_types_pb.ReviewCardProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsResponse): ListReviewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsResponse;
  static deserializeBinaryFromReader(message: ListReviewsResponse, reader: jspb.BinaryReader): ListReviewsResponse;
}

export namespace ListReviewsResponse {
  export type AsObject = {
    stallId: string,
    stallName: string,
    ratingSummary?: RatingSummary.AsObject,
    reviewsList: Array<data_types_pb.ReviewCardProps.AsObject>,
  }
}

