import * as jspb from 'google-protobuf'

import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"
import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as data_types_pb from '../data/types_pb'; // proto import: "data/types.proto"
import * as data_home_pb from '../data/home_pb'; // proto import: "data/home.proto"
import * as data_search_pb from '../data/search_pb'; // proto import: "data/search.proto"
import * as data_review_pb from '../data/review_pb'; // proto import: "data/review.proto"
import * as data_activity_pb from '../data/activity_pb'; // proto import: "data/activity.proto"


export class GetMenuItemRequest extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): GetMenuItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuItemRequest): GetMenuItemRequest.AsObject;
  static serializeBinaryToWriter(message: GetMenuItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuItemRequest;
  static deserializeBinaryFromReader(message: GetMenuItemRequest, reader: jspb.BinaryReader): GetMenuItemRequest;
}

export namespace GetMenuItemRequest {
  export type AsObject = {
    itemId: string,
  }
}

export class GetStallRequest extends jspb.Message {
  getStallId(): string;
  setStallId(value: string): GetStallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStallRequest): GetStallRequest.AsObject;
  static serializeBinaryToWriter(message: GetStallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStallRequest;
  static deserializeBinaryFromReader(message: GetStallRequest, reader: jspb.BinaryReader): GetStallRequest;
}

export namespace GetStallRequest {
  export type AsObject = {
    stallId: string,
  }
}

export class StallItemsRequest extends jspb.Message {
  getStallId(): string;
  setStallId(value: string): StallItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StallItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StallItemsRequest): StallItemsRequest.AsObject;
  static serializeBinaryToWriter(message: StallItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StallItemsRequest;
  static deserializeBinaryFromReader(message: StallItemsRequest, reader: jspb.BinaryReader): StallItemsRequest;
}

export namespace StallItemsRequest {
  export type AsObject = {
    stallId: string,
  }
}

export class SavedItemsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SavedItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavedItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavedItemsRequest): SavedItemsRequest.AsObject;
  static serializeBinaryToWriter(message: SavedItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavedItemsRequest;
  static deserializeBinaryFromReader(message: SavedItemsRequest, reader: jspb.BinaryReader): SavedItemsRequest;
}

export namespace SavedItemsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class SavedItemsResponse extends jspb.Message {
  getMenusList(): Array<data_types_pb.MenuCardProps>;
  setMenusList(value: Array<data_types_pb.MenuCardProps>): SavedItemsResponse;
  clearMenusList(): SavedItemsResponse;
  addMenus(value?: data_types_pb.MenuCardProps, index?: number): data_types_pb.MenuCardProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavedItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SavedItemsResponse): SavedItemsResponse.AsObject;
  static serializeBinaryToWriter(message: SavedItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavedItemsResponse;
  static deserializeBinaryFromReader(message: SavedItemsResponse, reader: jspb.BinaryReader): SavedItemsResponse;
}

export namespace SavedItemsResponse {
  export type AsObject = {
    menusList: Array<data_types_pb.MenuCardProps.AsObject>,
  }
}

export class SavedStallsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SavedStallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavedStallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavedStallsRequest): SavedStallsRequest.AsObject;
  static serializeBinaryToWriter(message: SavedStallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavedStallsRequest;
  static deserializeBinaryFromReader(message: SavedStallsRequest, reader: jspb.BinaryReader): SavedStallsRequest;
}

export namespace SavedStallsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class SavedStallsResponse extends jspb.Message {
  getStallsList(): Array<data_types_pb.StallDataTypeProps>;
  setStallsList(value: Array<data_types_pb.StallDataTypeProps>): SavedStallsResponse;
  clearStallsList(): SavedStallsResponse;
  addStalls(value?: data_types_pb.StallDataTypeProps, index?: number): data_types_pb.StallDataTypeProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavedStallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SavedStallsResponse): SavedStallsResponse.AsObject;
  static serializeBinaryToWriter(message: SavedStallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavedStallsResponse;
  static deserializeBinaryFromReader(message: SavedStallsResponse, reader: jspb.BinaryReader): SavedStallsResponse;
}

export namespace SavedStallsResponse {
  export type AsObject = {
    stallsList: Array<data_types_pb.StallDataTypeProps.AsObject>,
  }
}

export class AccountReadinessRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AccountReadinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountReadinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountReadinessRequest): AccountReadinessRequest.AsObject;
  static serializeBinaryToWriter(message: AccountReadinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountReadinessRequest;
  static deserializeBinaryFromReader(message: AccountReadinessRequest, reader: jspb.BinaryReader): AccountReadinessRequest;
}

export namespace AccountReadinessRequest {
  export type AsObject = {
    userId: string,
  }
}

export class AccountReadinessResponse extends jspb.Message {
  getReady(): boolean;
  setReady(value: boolean): AccountReadinessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountReadinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountReadinessResponse): AccountReadinessResponse.AsObject;
  static serializeBinaryToWriter(message: AccountReadinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountReadinessResponse;
  static deserializeBinaryFromReader(message: AccountReadinessResponse, reader: jspb.BinaryReader): AccountReadinessResponse;
}

export namespace AccountReadinessResponse {
  export type AsObject = {
    ready: boolean,
  }
}

export class CreateAccountRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateAccountRequest;

  getName(): string;
  setName(value: string): CreateAccountRequest;

  getGender(): string;
  setGender(value: string): CreateAccountRequest;

  getRole(): string;
  setRole(value: string): CreateAccountRequest;

  getDietaryList(): Array<string>;
  setDietaryList(value: Array<string>): CreateAccountRequest;
  clearDietaryList(): CreateAccountRequest;
  addDietary(value: string, index?: number): CreateAccountRequest;

  getAllergiesList(): Array<string>;
  setAllergiesList(value: Array<string>): CreateAccountRequest;
  clearAllergiesList(): CreateAccountRequest;
  addAllergies(value: string, index?: number): CreateAccountRequest;

  getCuisinesList(): Array<string>;
  setCuisinesList(value: Array<string>): CreateAccountRequest;
  clearCuisinesList(): CreateAccountRequest;
  addCuisines(value: string, index?: number): CreateAccountRequest;

  getDislikesList(): Array<string>;
  setDislikesList(value: Array<string>): CreateAccountRequest;
  clearDislikesList(): CreateAccountRequest;
  addDislikes(value: string, index?: number): CreateAccountRequest;

  getLikesList(): Array<string>;
  setLikesList(value: Array<string>): CreateAccountRequest;
  clearLikesList(): CreateAccountRequest;
  addLikes(value: string, index?: number): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    userId: string,
    name: string,
    gender: string,
    role: string,
    dietaryList: Array<string>,
    allergiesList: Array<string>,
    cuisinesList: Array<string>,
    dislikesList: Array<string>,
    likesList: Array<string>,
  }
}

export class GetPreferencesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetPreferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPreferencesRequest): GetPreferencesRequest.AsObject;
  static serializeBinaryToWriter(message: GetPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPreferencesRequest;
  static deserializeBinaryFromReader(message: GetPreferencesRequest, reader: jspb.BinaryReader): GetPreferencesRequest;
}

export namespace GetPreferencesRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetPreferencesResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetPreferencesResponse;

  getEmail(): string;
  setEmail(value: string): GetPreferencesResponse;

  getUsername(): string;
  setUsername(value: string): GetPreferencesResponse;

  getGender(): string;
  setGender(value: string): GetPreferencesResponse;

  getRole(): string;
  setRole(value: string): GetPreferencesResponse;

  getDietaryList(): Array<string>;
  setDietaryList(value: Array<string>): GetPreferencesResponse;
  clearDietaryList(): GetPreferencesResponse;
  addDietary(value: string, index?: number): GetPreferencesResponse;

  getAllergiesList(): Array<string>;
  setAllergiesList(value: Array<string>): GetPreferencesResponse;
  clearAllergiesList(): GetPreferencesResponse;
  addAllergies(value: string, index?: number): GetPreferencesResponse;

  getCuisinesList(): Array<string>;
  setCuisinesList(value: Array<string>): GetPreferencesResponse;
  clearCuisinesList(): GetPreferencesResponse;
  addCuisines(value: string, index?: number): GetPreferencesResponse;

  getDislikesList(): Array<string>;
  setDislikesList(value: Array<string>): GetPreferencesResponse;
  clearDislikesList(): GetPreferencesResponse;
  addDislikes(value: string, index?: number): GetPreferencesResponse;

  getLikesList(): Array<string>;
  setLikesList(value: Array<string>): GetPreferencesResponse;
  clearLikesList(): GetPreferencesResponse;
  addLikes(value: string, index?: number): GetPreferencesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPreferencesResponse): GetPreferencesResponse.AsObject;
  static serializeBinaryToWriter(message: GetPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPreferencesResponse;
  static deserializeBinaryFromReader(message: GetPreferencesResponse, reader: jspb.BinaryReader): GetPreferencesResponse;
}

export namespace GetPreferencesResponse {
  export type AsObject = {
    userId: string,
    email: string,
    username: string,
    gender: string,
    role: string,
    dietaryList: Array<string>,
    allergiesList: Array<string>,
    cuisinesList: Array<string>,
    dislikesList: Array<string>,
    likesList: Array<string>,
  }
}

export class SaveProfileRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SaveProfileRequest;

  getUsername(): string;
  setUsername(value: string): SaveProfileRequest;

  getGender(): string;
  setGender(value: string): SaveProfileRequest;

  getRole(): string;
  setRole(value: string): SaveProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveProfileRequest): SaveProfileRequest.AsObject;
  static serializeBinaryToWriter(message: SaveProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveProfileRequest;
  static deserializeBinaryFromReader(message: SaveProfileRequest, reader: jspb.BinaryReader): SaveProfileRequest;
}

export namespace SaveProfileRequest {
  export type AsObject = {
    userId: string,
    username: string,
    gender: string,
    role: string,
  }
}

export class SavePreferencesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SavePreferencesRequest;

  getDietaryList(): Array<string>;
  setDietaryList(value: Array<string>): SavePreferencesRequest;
  clearDietaryList(): SavePreferencesRequest;
  addDietary(value: string, index?: number): SavePreferencesRequest;

  getAllergiesList(): Array<string>;
  setAllergiesList(value: Array<string>): SavePreferencesRequest;
  clearAllergiesList(): SavePreferencesRequest;
  addAllergies(value: string, index?: number): SavePreferencesRequest;

  getCuisinesList(): Array<string>;
  setCuisinesList(value: Array<string>): SavePreferencesRequest;
  clearCuisinesList(): SavePreferencesRequest;
  addCuisines(value: string, index?: number): SavePreferencesRequest;

  getDislikesList(): Array<string>;
  setDislikesList(value: Array<string>): SavePreferencesRequest;
  clearDislikesList(): SavePreferencesRequest;
  addDislikes(value: string, index?: number): SavePreferencesRequest;

  getLikesList(): Array<string>;
  setLikesList(value: Array<string>): SavePreferencesRequest;
  clearLikesList(): SavePreferencesRequest;
  addLikes(value: string, index?: number): SavePreferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePreferencesRequest): SavePreferencesRequest.AsObject;
  static serializeBinaryToWriter(message: SavePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePreferencesRequest;
  static deserializeBinaryFromReader(message: SavePreferencesRequest, reader: jspb.BinaryReader): SavePreferencesRequest;
}

export namespace SavePreferencesRequest {
  export type AsObject = {
    userId: string,
    dietaryList: Array<string>,
    allergiesList: Array<string>,
    cuisinesList: Array<string>,
    dislikesList: Array<string>,
    likesList: Array<string>,
  }
}

