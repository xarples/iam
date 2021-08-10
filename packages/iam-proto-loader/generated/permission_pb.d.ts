// package: permission
// file: permission.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Permission extends jspb.Message { 
    getId(): string;
    setId(value: string): Permission;
    getClientId(): string;
    setClientId(value: string): Permission;
    getName(): string;
    setName(value: string): Permission;
    getDescription(): string;
    setDescription(value: string): Permission;
    getCreatedAt(): string;
    setCreatedAt(value: string): Permission;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permission.AsObject;
    static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permission;
    static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
    export type AsObject = {
        id: string,
        clientId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class PermissionList extends jspb.Message { 
    clearPermissionList(): void;
    getPermissionList(): Array<Permission>;
    setPermissionList(value: Array<Permission>): PermissionList;
    addPermission(value?: Permission, index?: number): Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PermissionList.AsObject;
    static toObject(includeInstance: boolean, msg: PermissionList): PermissionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PermissionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PermissionList;
    static deserializeBinaryFromReader(message: PermissionList, reader: jspb.BinaryReader): PermissionList;
}

export namespace PermissionList {
    export type AsObject = {
        permissionList: Array<Permission.AsObject>,
    }
}
