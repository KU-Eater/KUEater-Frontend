import * as jspb from 'google-protobuf'



export class MenuCardProps extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): MenuCardProps;

  getName(): string;
  setName(value: string): MenuCardProps;

  getPrice(): number;
  setPrice(value: number): MenuCardProps;

  getLikes(): number;
  setLikes(value: number): MenuCardProps;

  getDislikes(): number;
  setDislikes(value: number): MenuCardProps;

  getStallName(): string;
  setStallName(value: string): MenuCardProps;

  getStallLock(): string;
  setStallLock(value: string): MenuCardProps;

  getImageUrl(): string;
  setImageUrl(value: string): MenuCardProps;

  getStallId(): string;
  setStallId(value: string): MenuCardProps;

  getScore(): number;
  setScore(value: number): MenuCardProps;
  hasScore(): boolean;
  clearScore(): MenuCardProps;

  getReason(): string;
  setReason(value: string): MenuCardProps;
  hasReason(): boolean;
  clearReason(): MenuCardProps;

  getLiked(): boolean;
  setLiked(value: boolean): MenuCardProps;

  getDisliked(): boolean;
  setDisliked(value: boolean): MenuCardProps;

  getSaved(): boolean;
  setSaved(value: boolean): MenuCardProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuCardProps.AsObject;
  static toObject(includeInstance: boolean, msg: MenuCardProps): MenuCardProps.AsObject;
  static serializeBinaryToWriter(message: MenuCardProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuCardProps;
  static deserializeBinaryFromReader(message: MenuCardProps, reader: jspb.BinaryReader): MenuCardProps;
}

export namespace MenuCardProps {
  export type AsObject = {
    uuid: string,
    name: string,
    price: number,
    likes: number,
    dislikes: number,
    stallName: string,
    stallLock: string,
    imageUrl: string,
    stallId: string,
    score?: number,
    reason?: string,
    liked: boolean,
    disliked: boolean,
    saved: boolean,
  }

  export enum ScoreCase { 
    _SCORE_NOT_SET = 0,
    SCORE = 51,
  }

  export enum ReasonCase { 
    _REASON_NOT_SET = 0,
    REASON = 52,
  }
}

export class StallDataTypeProps extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): StallDataTypeProps;

  getRank(): number;
  setRank(value: number): StallDataTypeProps;

  getName(): string;
  setName(value: string): StallDataTypeProps;

  getImageUrl(): string;
  setImageUrl(value: string): StallDataTypeProps;

  getLocation(): string;
  setLocation(value: string): StallDataTypeProps;

  getOperatinghours(): string;
  setOperatinghours(value: string): StallDataTypeProps;

  getPricerange(): string;
  setPricerange(value: string): StallDataTypeProps;

  getTags(): string;
  setTags(value: string): StallDataTypeProps;

  getReviews(): number;
  setReviews(value: number): StallDataTypeProps;

  getLikes(): number;
  setLikes(value: number): StallDataTypeProps;

  getRating(): number;
  setRating(value: number): StallDataTypeProps;

  getSaved(): boolean;
  setSaved(value: boolean): StallDataTypeProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StallDataTypeProps.AsObject;
  static toObject(includeInstance: boolean, msg: StallDataTypeProps): StallDataTypeProps.AsObject;
  static serializeBinaryToWriter(message: StallDataTypeProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StallDataTypeProps;
  static deserializeBinaryFromReader(message: StallDataTypeProps, reader: jspb.BinaryReader): StallDataTypeProps;
}

export namespace StallDataTypeProps {
  export type AsObject = {
    uuid: string,
    rank: number,
    name: string,
    imageUrl: string,
    location: string,
    operatinghours: string,
    pricerange: string,
    tags: string,
    reviews: number,
    likes: number,
    rating: number,
    saved: boolean,
  }
}

export class ReviewCardProps extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ReviewCardProps;

  getUsername(): string;
  setUsername(value: string): ReviewCardProps;

  getRole(): string;
  setRole(value: string): ReviewCardProps;

  getGender(): string;
  setGender(value: string): ReviewCardProps;

  getCreatedAt(): string;
  setCreatedAt(value: string): ReviewCardProps;

  getStars(): number;
  setStars(value: number): ReviewCardProps;

  getContent(): string;
  setContent(value: string): ReviewCardProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewCardProps.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewCardProps): ReviewCardProps.AsObject;
  static serializeBinaryToWriter(message: ReviewCardProps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewCardProps;
  static deserializeBinaryFromReader(message: ReviewCardProps, reader: jspb.BinaryReader): ReviewCardProps;
}

export namespace ReviewCardProps {
  export type AsObject = {
    uuid: string,
    username: string,
    role: string,
    gender: string,
    createdAt: string,
    stars: number,
    content: string,
  }
}

export class MenuCardHorizontalConstructor extends jspb.Message {
  getMenusList(): Array<MenuCardProps>;
  setMenusList(value: Array<MenuCardProps>): MenuCardHorizontalConstructor;
  clearMenusList(): MenuCardHorizontalConstructor;
  addMenus(value?: MenuCardProps, index?: number): MenuCardProps;

  getTitle(): string;
  setTitle(value: string): MenuCardHorizontalConstructor;
  hasTitle(): boolean;
  clearTitle(): MenuCardHorizontalConstructor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuCardHorizontalConstructor.AsObject;
  static toObject(includeInstance: boolean, msg: MenuCardHorizontalConstructor): MenuCardHorizontalConstructor.AsObject;
  static serializeBinaryToWriter(message: MenuCardHorizontalConstructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuCardHorizontalConstructor;
  static deserializeBinaryFromReader(message: MenuCardHorizontalConstructor, reader: jspb.BinaryReader): MenuCardHorizontalConstructor;
}

export namespace MenuCardHorizontalConstructor {
  export type AsObject = {
    menusList: Array<MenuCardProps.AsObject>,
    title?: string,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }
}

export class MenuCardGridConstructor extends jspb.Message {
  getDataList(): Array<MenuCardProps>;
  setDataList(value: Array<MenuCardProps>): MenuCardGridConstructor;
  clearDataList(): MenuCardGridConstructor;
  addData(value?: MenuCardProps, index?: number): MenuCardProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuCardGridConstructor.AsObject;
  static toObject(includeInstance: boolean, msg: MenuCardGridConstructor): MenuCardGridConstructor.AsObject;
  static serializeBinaryToWriter(message: MenuCardGridConstructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuCardGridConstructor;
  static deserializeBinaryFromReader(message: MenuCardGridConstructor, reader: jspb.BinaryReader): MenuCardGridConstructor;
}

export namespace MenuCardGridConstructor {
  export type AsObject = {
    dataList: Array<MenuCardProps.AsObject>,
  }
}

export class StallCardListConstructor extends jspb.Message {
  getDataList(): Array<StallDataTypeProps>;
  setDataList(value: Array<StallDataTypeProps>): StallCardListConstructor;
  clearDataList(): StallCardListConstructor;
  addData(value?: StallDataTypeProps, index?: number): StallDataTypeProps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StallCardListConstructor.AsObject;
  static toObject(includeInstance: boolean, msg: StallCardListConstructor): StallCardListConstructor.AsObject;
  static serializeBinaryToWriter(message: StallCardListConstructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StallCardListConstructor;
  static deserializeBinaryFromReader(message: StallCardListConstructor, reader: jspb.BinaryReader): StallCardListConstructor;
}

export namespace StallCardListConstructor {
  export type AsObject = {
    dataList: Array<StallDataTypeProps.AsObject>,
  }
}

