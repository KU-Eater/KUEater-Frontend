import * as jspb from 'google-protobuf'



export class LocalizedString extends jspb.Message {
  getContent(): string;
  setContent(value: string): LocalizedString;

  getLocale(): string;
  setLocale(value: string): LocalizedString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedString.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedString): LocalizedString.AsObject;
  static serializeBinaryToWriter(message: LocalizedString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedString;
  static deserializeBinaryFromReader(message: LocalizedString, reader: jspb.BinaryReader): LocalizedString;
}

export namespace LocalizedString {
  export type AsObject = {
    content: string,
    locale: string,
  }
}

