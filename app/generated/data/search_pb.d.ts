import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"
import * as data_types_pb from '../data/types_pb'; // proto import: "data/types.proto"


export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  getUserId(): string;
  setUserId(value: string): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    userId: string,
  }
}

export class SearchResponse extends jspb.Message {
  getMenusList(): Array<data_types_pb.MenuCardProps>;
  setMenusList(value: Array<data_types_pb.MenuCardProps>): SearchResponse;
  clearMenusList(): SearchResponse;
  addMenus(value?: data_types_pb.MenuCardProps, index?: number): data_types_pb.MenuCardProps;

  getStallsList(): Array<data_types_pb.StallDataTypeProps>;
  setStallsList(value: Array<data_types_pb.StallDataTypeProps>): SearchResponse;
  clearStallsList(): SearchResponse;
  addStalls(value?: data_types_pb.StallDataTypeProps, index?: number): data_types_pb.StallDataTypeProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    menusList: Array<data_types_pb.MenuCardProps.AsObject>,
    stallsList: Array<data_types_pb.StallDataTypeProps.AsObject>,
  }
}

