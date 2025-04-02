import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"


export class CreateTestUserProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTestUserProfileRequest;

  getPreferences(): domain_pb.UserPreferences | undefined;
  setPreferences(value?: domain_pb.UserPreferences): CreateTestUserProfileRequest;
  hasPreferences(): boolean;
  clearPreferences(): CreateTestUserProfileRequest;

  getGender(): string;
  setGender(value: string): CreateTestUserProfileRequest;

  getRole(): string;
  setRole(value: string): CreateTestUserProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTestUserProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTestUserProfileRequest): CreateTestUserProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTestUserProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTestUserProfileRequest;
  static deserializeBinaryFromReader(message: CreateTestUserProfileRequest, reader: jspb.BinaryReader): CreateTestUserProfileRequest;
}

export namespace CreateTestUserProfileRequest {
  export type AsObject = {
    name: string,
    preferences?: domain_pb.UserPreferences.AsObject,
    gender: string,
    role: string,
  }
}

export class CreateTestUserProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTestUserProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTestUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTestUserProfileResponse): CreateTestUserProfileResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTestUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTestUserProfileResponse;
  static deserializeBinaryFromReader(message: CreateTestUserProfileResponse, reader: jspb.BinaryReader): CreateTestUserProfileResponse;
}

export namespace CreateTestUserProfileResponse {
  export type AsObject = {
    id: string,
  }
}

