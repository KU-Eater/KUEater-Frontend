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

export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  getUser(): string;
  setUser(value: string): SearchRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchRequest;

  getSorting(): SortStrategy;
  setSorting(value: SortStrategy): SearchRequest;

  getReversedSort(): boolean;
  setReversedSort(value: boolean): SearchRequest;

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
    user: string,
    pageSize: number,
    pageToken: string,
    sorting: SortStrategy,
    reversedSort: boolean,
  }
}

export class SearchResponse extends jspb.Message {
  getResultsList(): Array<SearchResponse.SearchResult>;
  setResultsList(value: Array<SearchResponse.SearchResult>): SearchResponse;
  clearResultsList(): SearchResponse;
  addResults(value?: SearchResponse.SearchResult, index?: number): SearchResponse.SearchResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    resultsList: Array<SearchResponse.SearchResult.AsObject>,
    nextPageToken: string,
  }

  export class SearchResult extends jspb.Message {
    getItem(): CardedMenuItem | undefined;
    setItem(value?: CardedMenuItem): SearchResult;
    hasItem(): boolean;
    clearItem(): SearchResult;

    getStall(): CardedStall | undefined;
    setStall(value?: CardedStall): SearchResult;
    hasStall(): boolean;
    clearStall(): SearchResult;

    getResultCase(): SearchResult.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchResult.AsObject;
    static toObject(includeInstance: boolean, msg: SearchResult): SearchResult.AsObject;
    static serializeBinaryToWriter(message: SearchResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchResult;
    static deserializeBinaryFromReader(message: SearchResult, reader: jspb.BinaryReader): SearchResult;
  }

  export namespace SearchResult {
    export type AsObject = {
      item?: CardedMenuItem.AsObject,
      stall?: CardedStall.AsObject,
    }

    export enum ResultCase { 
      RESULT_NOT_SET = 0,
      ITEM = 1,
      STALL = 2,
    }
  }

}

export enum SortStrategy { 
  DEFAULT = 0,
  POPULARITY = 1,
  REVIEW_SCORE = 2,
}
