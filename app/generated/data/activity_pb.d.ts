import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"


export class LikeItemMsg extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): LikeItemMsg;

  getUserId(): string;
  setUserId(value: string): LikeItemMsg;

  getB(): boolean;
  setB(value: boolean): LikeItemMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeItemMsg.AsObject;
  static toObject(includeInstance: boolean, msg: LikeItemMsg): LikeItemMsg.AsObject;
  static serializeBinaryToWriter(message: LikeItemMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeItemMsg;
  static deserializeBinaryFromReader(message: LikeItemMsg, reader: jspb.BinaryReader): LikeItemMsg;
}

export namespace LikeItemMsg {
  export type AsObject = {
    itemId: string,
    userId: string,
    b: boolean,
  }
}

export class DislikeItemMsg extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): DislikeItemMsg;

  getUserId(): string;
  setUserId(value: string): DislikeItemMsg;

  getB(): boolean;
  setB(value: boolean): DislikeItemMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DislikeItemMsg.AsObject;
  static toObject(includeInstance: boolean, msg: DislikeItemMsg): DislikeItemMsg.AsObject;
  static serializeBinaryToWriter(message: DislikeItemMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DislikeItemMsg;
  static deserializeBinaryFromReader(message: DislikeItemMsg, reader: jspb.BinaryReader): DislikeItemMsg;
}

export namespace DislikeItemMsg {
  export type AsObject = {
    itemId: string,
    userId: string,
    b: boolean,
  }
}

export class SaveItemMsg extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): SaveItemMsg;

  getUserId(): string;
  setUserId(value: string): SaveItemMsg;

  getB(): boolean;
  setB(value: boolean): SaveItemMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveItemMsg.AsObject;
  static toObject(includeInstance: boolean, msg: SaveItemMsg): SaveItemMsg.AsObject;
  static serializeBinaryToWriter(message: SaveItemMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveItemMsg;
  static deserializeBinaryFromReader(message: SaveItemMsg, reader: jspb.BinaryReader): SaveItemMsg;
}

export namespace SaveItemMsg {
  export type AsObject = {
    itemId: string,
    userId: string,
    b: boolean,
  }
}

export class LikeStallMsg extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): LikeStallMsg;

  getUserId(): string;
  setUserId(value: string): LikeStallMsg;

  getB(): boolean;
  setB(value: boolean): LikeStallMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeStallMsg.AsObject;
  static toObject(includeInstance: boolean, msg: LikeStallMsg): LikeStallMsg.AsObject;
  static serializeBinaryToWriter(message: LikeStallMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeStallMsg;
  static deserializeBinaryFromReader(message: LikeStallMsg, reader: jspb.BinaryReader): LikeStallMsg;
}

export namespace LikeStallMsg {
  export type AsObject = {
    itemId: string,
    userId: string,
    b: boolean,
  }
}

export class SaveStallMsg extends jspb.Message {
  getItemId(): string;
  setItemId(value: string): SaveStallMsg;

  getUserId(): string;
  setUserId(value: string): SaveStallMsg;

  getB(): boolean;
  setB(value: boolean): SaveStallMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveStallMsg.AsObject;
  static toObject(includeInstance: boolean, msg: SaveStallMsg): SaveStallMsg.AsObject;
  static serializeBinaryToWriter(message: SaveStallMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveStallMsg;
  static deserializeBinaryFromReader(message: SaveStallMsg, reader: jspb.BinaryReader): SaveStallMsg;
}

export namespace SaveStallMsg {
  export type AsObject = {
    itemId: string,
    userId: string,
    b: boolean,
  }
}

