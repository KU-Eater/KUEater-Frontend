import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_api_resource_pb from './google/api/resource_pb'; // proto import: "google/api/resource.proto"
import * as shared_pb from './shared_pb'; // proto import: "shared.proto"


export class Ingredient extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Ingredient;

  getName(): shared_pb.LocalizedString | undefined;
  setName(value?: shared_pb.LocalizedString): Ingredient;
  hasName(): boolean;
  clearName(): Ingredient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ingredient.AsObject;
  static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
  static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ingredient;
  static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
}

export namespace Ingredient {
  export type AsObject = {
    uuid: string,
    name?: shared_pb.LocalizedString.AsObject,
  }
}

export class MenuItem extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): MenuItem;

  getName(): shared_pb.LocalizedString | undefined;
  setName(value?: shared_pb.LocalizedString): MenuItem;
  hasName(): boolean;
  clearName(): MenuItem;

  getPrice(): number;
  setPrice(value: number): MenuItem;

  getIngredientsList(): Array<Ingredient>;
  setIngredientsList(value: Array<Ingredient>): MenuItem;
  clearIngredientsList(): MenuItem;
  addIngredients(value?: Ingredient, index?: number): Ingredient;

  getImage(): string;
  setImage(value: string): MenuItem;

  getTagsList(): Array<shared_pb.LocalizedString>;
  setTagsList(value: Array<shared_pb.LocalizedString>): MenuItem;
  clearTagsList(): MenuItem;
  addTags(value?: shared_pb.LocalizedString, index?: number): shared_pb.LocalizedString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MenuItem.AsObject;
  static toObject(includeInstance: boolean, msg: MenuItem): MenuItem.AsObject;
  static serializeBinaryToWriter(message: MenuItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MenuItem;
  static deserializeBinaryFromReader(message: MenuItem, reader: jspb.BinaryReader): MenuItem;
}

export namespace MenuItem {
  export type AsObject = {
    uuid: string,
    name?: shared_pb.LocalizedString.AsObject,
    price: number,
    ingredientsList: Array<Ingredient.AsObject>,
    image: string,
    tagsList: Array<shared_pb.LocalizedString.AsObject>,
  }
}

export class Stall extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Stall;

  getName(): shared_pb.LocalizedString | undefined;
  setName(value?: shared_pb.LocalizedString): Stall;
  hasName(): boolean;
  clearName(): Stall;

  getLock(): number;
  setLock(value: number): Stall;

  getItemsList(): Array<MenuItem>;
  setItemsList(value: Array<MenuItem>): Stall;
  clearItemsList(): Stall;
  addItems(value?: MenuItem, index?: number): MenuItem;

  getImage(): string;
  setImage(value: string): Stall;

  getDishType(): shared_pb.LocalizedString | undefined;
  setDishType(value?: shared_pb.LocalizedString): Stall;
  hasDishType(): boolean;
  clearDishType(): Stall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stall.AsObject;
  static toObject(includeInstance: boolean, msg: Stall): Stall.AsObject;
  static serializeBinaryToWriter(message: Stall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stall;
  static deserializeBinaryFromReader(message: Stall, reader: jspb.BinaryReader): Stall;
}

export namespace Stall {
  export type AsObject = {
    uuid: string,
    name?: shared_pb.LocalizedString.AsObject,
    lock: number,
    itemsList: Array<MenuItem.AsObject>,
    image: string,
    dishType?: shared_pb.LocalizedString.AsObject,
  }
}

export class UserProfile extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): UserProfile;

  getName(): string;
  setName(value: string): UserProfile;

  getLiked(): UserProfile.Liked | undefined;
  setLiked(value?: UserProfile.Liked): UserProfile;
  hasLiked(): boolean;
  clearLiked(): UserProfile;

  getSaved(): UserProfile.Saved | undefined;
  setSaved(value?: UserProfile.Saved): UserProfile;
  hasSaved(): boolean;
  clearSaved(): UserProfile;

  getPreferences(): UserPreferences | undefined;
  setPreferences(value?: UserPreferences): UserProfile;
  hasPreferences(): boolean;
  clearPreferences(): UserProfile;

  getGender(): string;
  setGender(value: string): UserProfile;

  getRole(): string;
  setRole(value: string): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    uuid: string,
    name: string,
    liked?: UserProfile.Liked.AsObject,
    saved?: UserProfile.Saved.AsObject,
    preferences?: UserPreferences.AsObject,
    gender: string,
    role: string,
  }

  export class Liked extends jspb.Message {
    getItemsList(): Array<MenuItem>;
    setItemsList(value: Array<MenuItem>): Liked;
    clearItemsList(): Liked;
    addItems(value?: MenuItem, index?: number): MenuItem;

    getStallsList(): Array<Stall>;
    setStallsList(value: Array<Stall>): Liked;
    clearStallsList(): Liked;
    addStalls(value?: Stall, index?: number): Stall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Liked.AsObject;
    static toObject(includeInstance: boolean, msg: Liked): Liked.AsObject;
    static serializeBinaryToWriter(message: Liked, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Liked;
    static deserializeBinaryFromReader(message: Liked, reader: jspb.BinaryReader): Liked;
  }

  export namespace Liked {
    export type AsObject = {
      itemsList: Array<MenuItem.AsObject>,
      stallsList: Array<Stall.AsObject>,
    }
  }


  export class Saved extends jspb.Message {
    getItemsList(): Array<MenuItem>;
    setItemsList(value: Array<MenuItem>): Saved;
    clearItemsList(): Saved;
    addItems(value?: MenuItem, index?: number): MenuItem;

    getStallsList(): Array<Stall>;
    setStallsList(value: Array<Stall>): Saved;
    clearStallsList(): Saved;
    addStalls(value?: Stall, index?: number): Stall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Saved.AsObject;
    static toObject(includeInstance: boolean, msg: Saved): Saved.AsObject;
    static serializeBinaryToWriter(message: Saved, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Saved;
    static deserializeBinaryFromReader(message: Saved, reader: jspb.BinaryReader): Saved;
  }

  export namespace Saved {
    export type AsObject = {
      itemsList: Array<MenuItem.AsObject>,
      stallsList: Array<Stall.AsObject>,
    }
  }

}

export class UserPreferences extends jspb.Message {
  getDietList(): Array<string>;
  setDietList(value: Array<string>): UserPreferences;
  clearDietList(): UserPreferences;
  addDiet(value: string, index?: number): UserPreferences;

  getAllergiesList(): Array<string>;
  setAllergiesList(value: Array<string>): UserPreferences;
  clearAllergiesList(): UserPreferences;
  addAllergies(value: string, index?: number): UserPreferences;

  getCuisinesList(): Array<string>;
  setCuisinesList(value: Array<string>): UserPreferences;
  clearCuisinesList(): UserPreferences;
  addCuisines(value: string, index?: number): UserPreferences;

  getDislikedingredientsList(): Array<string>;
  setDislikedingredientsList(value: Array<string>): UserPreferences;
  clearDislikedingredientsList(): UserPreferences;
  addDislikedingredients(value: string, index?: number): UserPreferences;

  getLikeditemsList(): Array<string>;
  setLikeditemsList(value: Array<string>): UserPreferences;
  clearLikeditemsList(): UserPreferences;
  addLikeditems(value: string, index?: number): UserPreferences;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPreferences.AsObject;
  static toObject(includeInstance: boolean, msg: UserPreferences): UserPreferences.AsObject;
  static serializeBinaryToWriter(message: UserPreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPreferences;
  static deserializeBinaryFromReader(message: UserPreferences, reader: jspb.BinaryReader): UserPreferences;
}

export namespace UserPreferences {
  export type AsObject = {
    dietList: Array<string>,
    allergiesList: Array<string>,
    cuisinesList: Array<string>,
    dislikedingredientsList: Array<string>,
    likeditemsList: Array<string>,
  }
}

export class Review extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Review;

  getAuthor(): UserProfile | undefined;
  setAuthor(value?: UserProfile): Review;
  hasAuthor(): boolean;
  clearAuthor(): Review;

  getStall(): Stall | undefined;
  setStall(value?: Stall): Review;
  hasStall(): boolean;
  clearStall(): Review;

  getContext(): Review.ContextItems | undefined;
  setContext(value?: Review.ContextItems): Review;
  hasContext(): boolean;
  clearContext(): Review;

  getContent(): string;
  setContent(value: string): Review;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Review;
  hasCreatedat(): boolean;
  clearCreatedat(): Review;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Review;
  hasUpdatedat(): boolean;
  clearUpdatedat(): Review;

  getRating(): number;
  setRating(value: number): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    uuid: string,
    author?: UserProfile.AsObject,
    stall?: Stall.AsObject,
    context?: Review.ContextItems.AsObject,
    content: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rating: number,
  }

  export class ContextItems extends jspb.Message {
    getItemsList(): Array<MenuItem>;
    setItemsList(value: Array<MenuItem>): ContextItems;
    clearItemsList(): ContextItems;
    addItems(value?: MenuItem, index?: number): MenuItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContextItems.AsObject;
    static toObject(includeInstance: boolean, msg: ContextItems): ContextItems.AsObject;
    static serializeBinaryToWriter(message: ContextItems, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContextItems;
    static deserializeBinaryFromReader(message: ContextItems, reader: jspb.BinaryReader): ContextItems;
  }

  export namespace ContextItems {
    export type AsObject = {
      itemsList: Array<MenuItem.AsObject>,
    }
  }

}

