import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"
import * as data_types_pb from '../data/types_pb'; // proto import: "data/types.proto"


export class TopMenuProps extends jspb.Message {
  getProps(): data_types_pb.MenuCardHorizontalConstructor | undefined;
  setProps(value?: data_types_pb.MenuCardHorizontalConstructor): TopMenuProps;
  hasProps(): boolean;
  clearProps(): TopMenuProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopMenuProps.AsObject;
  static toObject(includeInstance: boolean, msg: TopMenuProps): TopMenuProps.AsObject;
  static serializeBinaryToWriter(message: TopMenuProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopMenuProps;
  static deserializeBinaryFromReader(message: TopMenuProps, reader: jspb.BinaryReader): TopMenuProps;
}

export namespace TopMenuProps {
  export type AsObject = {
    props?: data_types_pb.MenuCardHorizontalConstructor.AsObject,
  }
}

export class TopStallProps extends jspb.Message {
  getProps(): data_types_pb.StallCardListConstructor | undefined;
  setProps(value?: data_types_pb.StallCardListConstructor): TopStallProps;
  hasProps(): boolean;
  clearProps(): TopStallProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopStallProps.AsObject;
  static toObject(includeInstance: boolean, msg: TopStallProps): TopStallProps.AsObject;
  static serializeBinaryToWriter(message: TopStallProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopStallProps;
  static deserializeBinaryFromReader(message: TopStallProps, reader: jspb.BinaryReader): TopStallProps;
}

export namespace TopStallProps {
  export type AsObject = {
    props?: data_types_pb.StallCardListConstructor.AsObject,
  }
}

export class InferLikeMsg extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): InferLikeMsg;

  getWord(): string;
  setWord(value: string): InferLikeMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferLikeMsg.AsObject;
  static toObject(includeInstance: boolean, msg: InferLikeMsg): InferLikeMsg.AsObject;
  static serializeBinaryToWriter(message: InferLikeMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferLikeMsg;
  static deserializeBinaryFromReader(message: InferLikeMsg, reader: jspb.BinaryReader): InferLikeMsg;
}

export namespace InferLikeMsg {
  export type AsObject = {
    userId: string,
    word: string,
  }
}

export class InferLikeProps extends jspb.Message {
  getProps(): data_types_pb.MenuCardHorizontalConstructor | undefined;
  setProps(value?: data_types_pb.MenuCardHorizontalConstructor): InferLikeProps;
  hasProps(): boolean;
  clearProps(): InferLikeProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferLikeProps.AsObject;
  static toObject(includeInstance: boolean, msg: InferLikeProps): InferLikeProps.AsObject;
  static serializeBinaryToWriter(message: InferLikeProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferLikeProps;
  static deserializeBinaryFromReader(message: InferLikeProps, reader: jspb.BinaryReader): InferLikeProps;
}

export namespace InferLikeProps {
  export type AsObject = {
    props?: data_types_pb.MenuCardHorizontalConstructor.AsObject,
  }
}

export class ForYouMsg extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ForYouMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForYouMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ForYouMsg): ForYouMsg.AsObject;
  static serializeBinaryToWriter(message: ForYouMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForYouMsg;
  static deserializeBinaryFromReader(message: ForYouMsg, reader: jspb.BinaryReader): ForYouMsg;
}

export namespace ForYouMsg {
  export type AsObject = {
    userId: string,
  }
}

export class ForYouProps extends jspb.Message {
  getProps(): data_types_pb.MenuCardHorizontalConstructor | undefined;
  setProps(value?: data_types_pb.MenuCardHorizontalConstructor): ForYouProps;
  hasProps(): boolean;
  clearProps(): ForYouProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForYouProps.AsObject;
  static toObject(includeInstance: boolean, msg: ForYouProps): ForYouProps.AsObject;
  static serializeBinaryToWriter(message: ForYouProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForYouProps;
  static deserializeBinaryFromReader(message: ForYouProps, reader: jspb.BinaryReader): ForYouProps;
}

export namespace ForYouProps {
  export type AsObject = {
    props?: data_types_pb.MenuCardHorizontalConstructor.AsObject,
  }
}

export class GetRecommendationsMsg extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetRecommendationsMsg;

  getIndexToken(): string;
  setIndexToken(value: string): GetRecommendationsMsg;

  getScoreToken(): string;
  setScoreToken(value: string): GetRecommendationsMsg;

  getPageLimit(): number;
  setPageLimit(value: number): GetRecommendationsMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationsMsg.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationsMsg): GetRecommendationsMsg.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationsMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationsMsg;
  static deserializeBinaryFromReader(message: GetRecommendationsMsg, reader: jspb.BinaryReader): GetRecommendationsMsg;
}

export namespace GetRecommendationsMsg {
  export type AsObject = {
    userId: string,
    indexToken: string,
    scoreToken: string,
    pageLimit: number,
  }
}

export class RecommendationsList extends jspb.Message {
  getMenuList(): Array<data_types_pb.MenuCardProps>;
  setMenuList(value: Array<data_types_pb.MenuCardProps>): RecommendationsList;
  clearMenuList(): RecommendationsList;
  addMenu(value?: data_types_pb.MenuCardProps, index?: number): data_types_pb.MenuCardProps;

  getNextIndexToken(): string;
  setNextIndexToken(value: string): RecommendationsList;

  getScoreToken(): string;
  setScoreToken(value: string): RecommendationsList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationsList.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationsList): RecommendationsList.AsObject;
  static serializeBinaryToWriter(message: RecommendationsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationsList;
  static deserializeBinaryFromReader(message: RecommendationsList, reader: jspb.BinaryReader): RecommendationsList;
}

export namespace RecommendationsList {
  export type AsObject = {
    menuList: Array<data_types_pb.MenuCardProps.AsObject>,
    nextIndexToken: string,
    scoreToken: string,
  }
}

