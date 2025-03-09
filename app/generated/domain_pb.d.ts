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

export class DietaryRestriction extends jspb.Message {
  getAllergy(): DietaryRestriction.Allergy | undefined;
  setAllergy(value?: DietaryRestriction.Allergy): DietaryRestriction;
  hasAllergy(): boolean;
  clearAllergy(): DietaryRestriction;

  getReligious(): DietaryRestriction.Religious | undefined;
  setReligious(value?: DietaryRestriction.Religious): DietaryRestriction;
  hasReligious(): boolean;
  clearReligious(): DietaryRestriction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DietaryRestriction.AsObject;
  static toObject(includeInstance: boolean, msg: DietaryRestriction): DietaryRestriction.AsObject;
  static serializeBinaryToWriter(message: DietaryRestriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DietaryRestriction;
  static deserializeBinaryFromReader(message: DietaryRestriction, reader: jspb.BinaryReader): DietaryRestriction;
}

export namespace DietaryRestriction {
  export type AsObject = {
    allergy?: DietaryRestriction.Allergy.AsObject,
    religious?: DietaryRestriction.Religious.AsObject,
  }

  export class Allergy extends jspb.Message {
    getIngredientsList(): Array<Ingredient>;
    setIngredientsList(value: Array<Ingredient>): Allergy;
    clearIngredientsList(): Allergy;
    addIngredients(value?: Ingredient, index?: number): Ingredient;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Allergy.AsObject;
    static toObject(includeInstance: boolean, msg: Allergy): Allergy.AsObject;
    static serializeBinaryToWriter(message: Allergy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Allergy;
    static deserializeBinaryFromReader(message: Allergy, reader: jspb.BinaryReader): Allergy;
  }

  export namespace Allergy {
    export type AsObject = {
      ingredientsList: Array<Ingredient.AsObject>,
    }
  }


  export class Religious extends jspb.Message {
    getIngredientsList(): Array<Ingredient>;
    setIngredientsList(value: Array<Ingredient>): Religious;
    clearIngredientsList(): Religious;
    addIngredients(value?: Ingredient, index?: number): Ingredient;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Religious.AsObject;
    static toObject(includeInstance: boolean, msg: Religious): Religious.AsObject;
    static serializeBinaryToWriter(message: Religious, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Religious;
    static deserializeBinaryFromReader(message: Religious, reader: jspb.BinaryReader): Religious;
  }

  export namespace Religious {
    export type AsObject = {
      ingredientsList: Array<Ingredient.AsObject>,
    }
  }

}

export class UserProfile extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): UserProfile;

  getName(): string;
  setName(value: string): UserProfile;

  getLikeditems(): UserProfile.LikedItems | undefined;
  setLikeditems(value?: UserProfile.LikedItems): UserProfile;
  hasLikeditems(): boolean;
  clearLikeditems(): UserProfile;

  getLikedstalls(): UserProfile.LikedStalls | undefined;
  setLikedstalls(value?: UserProfile.LikedStalls): UserProfile;
  hasLikedstalls(): boolean;
  clearLikedstalls(): UserProfile;

  getRestraint(): DietaryRestriction | undefined;
  setRestraint(value?: DietaryRestriction): UserProfile;
  hasRestraint(): boolean;
  clearRestraint(): UserProfile;

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
    likeditems?: UserProfile.LikedItems.AsObject,
    likedstalls?: UserProfile.LikedStalls.AsObject,
    restraint?: DietaryRestriction.AsObject,
  }

  export class LikedItems extends jspb.Message {
    getItemsList(): Array<MenuItem>;
    setItemsList(value: Array<MenuItem>): LikedItems;
    clearItemsList(): LikedItems;
    addItems(value?: MenuItem, index?: number): MenuItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikedItems.AsObject;
    static toObject(includeInstance: boolean, msg: LikedItems): LikedItems.AsObject;
    static serializeBinaryToWriter(message: LikedItems, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikedItems;
    static deserializeBinaryFromReader(message: LikedItems, reader: jspb.BinaryReader): LikedItems;
  }

  export namespace LikedItems {
    export type AsObject = {
      itemsList: Array<MenuItem.AsObject>,
    }
  }


  export class LikedStalls extends jspb.Message {
    getStallsList(): Array<Stall>;
    setStallsList(value: Array<Stall>): LikedStalls;
    clearStallsList(): LikedStalls;
    addStalls(value?: Stall, index?: number): Stall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikedStalls.AsObject;
    static toObject(includeInstance: boolean, msg: LikedStalls): LikedStalls.AsObject;
    static serializeBinaryToWriter(message: LikedStalls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikedStalls;
    static deserializeBinaryFromReader(message: LikedStalls, reader: jspb.BinaryReader): LikedStalls;
  }

  export namespace LikedStalls {
    export type AsObject = {
      stallsList: Array<Stall.AsObject>,
    }
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

