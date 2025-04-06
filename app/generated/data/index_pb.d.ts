import * as jspb from 'google-protobuf'

import * as shared_pb from '../shared_pb'; // proto import: "shared.proto"
import * as domain_pb from '../domain_pb'; // proto import: "domain.proto"


export class CardedMenuItem extends jspb.Message {
  getItem(): domain_pb.MenuItem | undefined;
  setItem(value?: domain_pb.MenuItem): CardedMenuItem;
  hasItem(): boolean;
  clearItem(): CardedMenuItem;

  getStallName(): shared_pb.LocalizedString | undefined;
  setStallName(value?: shared_pb.LocalizedString): CardedMenuItem;
  hasStallName(): boolean;
  clearStallName(): CardedMenuItem;

  getStallLock(): number;
  setStallLock(value: number): CardedMenuItem;

  getLikes(): number;
  setLikes(value: number): CardedMenuItem;

  getLikedByUser(): boolean;
  setLikedByUser(value: boolean): CardedMenuItem;

  getDislikedByUser(): boolean;
  setDislikedByUser(value: boolean): CardedMenuItem;

  getFavoriteByUser(): boolean;
  setFavoriteByUser(value: boolean): CardedMenuItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardedMenuItem.AsObject;
  static toObject(includeInstance: boolean, msg: CardedMenuItem): CardedMenuItem.AsObject;
  static serializeBinaryToWriter(message: CardedMenuItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardedMenuItem;
  static deserializeBinaryFromReader(message: CardedMenuItem, reader: jspb.BinaryReader): CardedMenuItem;
}

export namespace CardedMenuItem {
  export type AsObject = {
    item?: domain_pb.MenuItem.AsObject,
    stallName?: shared_pb.LocalizedString.AsObject,
    stallLock: number,
    likes: number,
    likedByUser: boolean,
    dislikedByUser: boolean,
    favoriteByUser: boolean,
  }
}

export class CardedStall extends jspb.Message {
  getStall(): domain_pb.Stall | undefined;
  setStall(value?: domain_pb.Stall): CardedStall;
  hasStall(): boolean;
  clearStall(): CardedStall;

  getReviewCount(): number;
  setReviewCount(value: number): CardedStall;

  getLikeCount(): number;
  setLikeCount(value: number): CardedStall;

  getRating(): number;
  setRating(value: number): CardedStall;

  getMinPrice(): number;
  setMinPrice(value: number): CardedStall;

  getMaxPrice(): number;
  setMaxPrice(value: number): CardedStall;

  getFavoriteByUser(): boolean;
  setFavoriteByUser(value: boolean): CardedStall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardedStall.AsObject;
  static toObject(includeInstance: boolean, msg: CardedStall): CardedStall.AsObject;
  static serializeBinaryToWriter(message: CardedStall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardedStall;
  static deserializeBinaryFromReader(message: CardedStall, reader: jspb.BinaryReader): CardedStall;
}

export namespace CardedStall {
  export type AsObject = {
    stall?: domain_pb.Stall.AsObject,
    reviewCount: number,
    likeCount: number,
    rating: number,
    minPrice: number,
    maxPrice: number,
    favoriteByUser: boolean,
  }
}

export class GetMenuListingsRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): GetMenuListingsRequest;

  getPageSize(): number;
  setPageSize(value: number): GetMenuListingsRequest;

  getPageToken(): string;
  setPageToken(value: string): GetMenuListingsRequest;

  getSorting(): SortStrategy;
  setSorting(value: SortStrategy): GetMenuListingsRequest;

  getReversedSort(): boolean;
  setReversedSort(value: boolean): GetMenuListingsRequest;

  getMatchLock(): number;
  setMatchLock(value: number): GetMenuListingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuListingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuListingsRequest): GetMenuListingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMenuListingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuListingsRequest;
  static deserializeBinaryFromReader(message: GetMenuListingsRequest, reader: jspb.BinaryReader): GetMenuListingsRequest;
}

export namespace GetMenuListingsRequest {
  export type AsObject = {
    user: string,
    pageSize: number,
    pageToken: string,
    sorting: SortStrategy,
    reversedSort: boolean,
    matchLock: number,
  }
}

export class GetMenuListingsResponse extends jspb.Message {
  getItemsList(): Array<CardedMenuItem>;
  setItemsList(value: Array<CardedMenuItem>): GetMenuListingsResponse;
  clearItemsList(): GetMenuListingsResponse;
  addItems(value?: CardedMenuItem, index?: number): CardedMenuItem;

  getNextPageToken(): string;
  setNextPageToken(value: string): GetMenuListingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMenuListingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMenuListingsResponse): GetMenuListingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetMenuListingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMenuListingsResponse;
  static deserializeBinaryFromReader(message: GetMenuListingsResponse, reader: jspb.BinaryReader): GetMenuListingsResponse;
}

export namespace GetMenuListingsResponse {
  export type AsObject = {
    itemsList: Array<CardedMenuItem.AsObject>,
    nextPageToken: string,
  }
}

export class TopMenuRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopMenuRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopMenuRequest): TopMenuRequest.AsObject;
  static serializeBinaryToWriter(message: TopMenuRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopMenuRequest;
  static deserializeBinaryFromReader(message: TopMenuRequest, reader: jspb.BinaryReader): TopMenuRequest;
}

export namespace TopMenuRequest {
  export type AsObject = {
  }
}

export class TopMenu extends jspb.Message {
  getItemsList(): Array<TopMenu.RankedCardedMenuItem>;
  setItemsList(value: Array<TopMenu.RankedCardedMenuItem>): TopMenu;
  clearItemsList(): TopMenu;
  addItems(value?: TopMenu.RankedCardedMenuItem, index?: number): TopMenu.RankedCardedMenuItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopMenu.AsObject;
  static toObject(includeInstance: boolean, msg: TopMenu): TopMenu.AsObject;
  static serializeBinaryToWriter(message: TopMenu, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopMenu;
  static deserializeBinaryFromReader(message: TopMenu, reader: jspb.BinaryReader): TopMenu;
}

export namespace TopMenu {
  export type AsObject = {
    itemsList: Array<TopMenu.RankedCardedMenuItem.AsObject>,
  }

  export class RankedCardedMenuItem extends jspb.Message {
    getItem(): CardedMenuItem | undefined;
    setItem(value?: CardedMenuItem): RankedCardedMenuItem;
    hasItem(): boolean;
    clearItem(): RankedCardedMenuItem;

    getRank(): number;
    setRank(value: number): RankedCardedMenuItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RankedCardedMenuItem.AsObject;
    static toObject(includeInstance: boolean, msg: RankedCardedMenuItem): RankedCardedMenuItem.AsObject;
    static serializeBinaryToWriter(message: RankedCardedMenuItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RankedCardedMenuItem;
    static deserializeBinaryFromReader(message: RankedCardedMenuItem, reader: jspb.BinaryReader): RankedCardedMenuItem;
  }

  export namespace RankedCardedMenuItem {
    export type AsObject = {
      item?: CardedMenuItem.AsObject,
      rank: number,
    }
  }

}

export class TopStallRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopStallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopStallRequest): TopStallRequest.AsObject;
  static serializeBinaryToWriter(message: TopStallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopStallRequest;
  static deserializeBinaryFromReader(message: TopStallRequest, reader: jspb.BinaryReader): TopStallRequest;
}

export namespace TopStallRequest {
  export type AsObject = {
  }
}

export class TopStall extends jspb.Message {
  getStallsList(): Array<TopStall.RankedCardedStallItem>;
  setStallsList(value: Array<TopStall.RankedCardedStallItem>): TopStall;
  clearStallsList(): TopStall;
  addStalls(value?: TopStall.RankedCardedStallItem, index?: number): TopStall.RankedCardedStallItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopStall.AsObject;
  static toObject(includeInstance: boolean, msg: TopStall): TopStall.AsObject;
  static serializeBinaryToWriter(message: TopStall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopStall;
  static deserializeBinaryFromReader(message: TopStall, reader: jspb.BinaryReader): TopStall;
}

export namespace TopStall {
  export type AsObject = {
    stallsList: Array<TopStall.RankedCardedStallItem.AsObject>,
  }

  export class RankedCardedStallItem extends jspb.Message {
    getStall(): CardedStall | undefined;
    setStall(value?: CardedStall): RankedCardedStallItem;
    hasStall(): boolean;
    clearStall(): RankedCardedStallItem;

    getRank(): number;
    setRank(value: number): RankedCardedStallItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RankedCardedStallItem.AsObject;
    static toObject(includeInstance: boolean, msg: RankedCardedStallItem): RankedCardedStallItem.AsObject;
    static serializeBinaryToWriter(message: RankedCardedStallItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RankedCardedStallItem;
    static deserializeBinaryFromReader(message: RankedCardedStallItem, reader: jspb.BinaryReader): RankedCardedStallItem;
  }

  export namespace RankedCardedStallItem {
    export type AsObject = {
      stall?: CardedStall.AsObject,
      rank: number,
    }
  }

}

export enum SortStrategy { 
  DEFAULT = 0,
  POPULARITY = 1,
  REVIEW_SCORE = 2,
}
