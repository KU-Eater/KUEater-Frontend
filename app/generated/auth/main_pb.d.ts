import * as jspb from 'google-protobuf'



export class AuthProcessRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthProcessRequest): AuthProcessRequest.AsObject;
  static serializeBinaryToWriter(message: AuthProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthProcessRequest;
  static deserializeBinaryFromReader(message: AuthProcessRequest, reader: jspb.BinaryReader): AuthProcessRequest;
}

export namespace AuthProcessRequest {
  export type AsObject = {
    code: string,
  }
}

export class AuthProcessResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthProcessResponse;

  getUserId(): string;
  setUserId(value: string): AuthProcessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthProcessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthProcessResponse): AuthProcessResponse.AsObject;
  static serializeBinaryToWriter(message: AuthProcessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthProcessResponse;
  static deserializeBinaryFromReader(message: AuthProcessResponse, reader: jspb.BinaryReader): AuthProcessResponse;
}

export namespace AuthProcessResponse {
  export type AsObject = {
    token: string,
    userId: string,
  }
}

export class LogoutProcessRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): LogoutProcessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutProcessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutProcessRequest): LogoutProcessRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutProcessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutProcessRequest;
  static deserializeBinaryFromReader(message: LogoutProcessRequest, reader: jspb.BinaryReader): LogoutProcessRequest;
}

export namespace LogoutProcessRequest {
  export type AsObject = {
    userId: string,
  }
}

export class LogoutProcessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutProcessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutProcessResponse): LogoutProcessResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutProcessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutProcessResponse;
  static deserializeBinaryFromReader(message: LogoutProcessResponse, reader: jspb.BinaryReader): LogoutProcessResponse;
}

export namespace LogoutProcessResponse {
  export type AsObject = {
  }
}

