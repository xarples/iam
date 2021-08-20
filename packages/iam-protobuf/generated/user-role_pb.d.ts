// package: user_role
// file: user-role.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserRole extends jspb.Message { 
    getId(): string;
    setId(value: string): UserRole;
    getUserId(): string;
    setUserId(value: string): UserRole;
    getRoleId(): string;
    setRoleId(value: string): UserRole;
    getProjectId(): string;
    setProjectId(value: string): UserRole;
    getCreatedAt(): string;
    setCreatedAt(value: string): UserRole;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): UserRole;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRole.AsObject;
    static toObject(includeInstance: boolean, msg: UserRole): UserRole.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRole, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRole;
    static deserializeBinaryFromReader(message: UserRole, reader: jspb.BinaryReader): UserRole;
}

export namespace UserRole {
    export type AsObject = {
        id: string,
        userId: string,
        roleId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class UserRoleList extends jspb.Message { 
    clearUserRoleList(): void;
    getUserRoleList(): Array<UserRole>;
    setUserRoleList(value: Array<UserRole>): UserRoleList;
    addUserRole(value?: UserRole, index?: number): UserRole;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRoleList.AsObject;
    static toObject(includeInstance: boolean, msg: UserRoleList): UserRoleList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRoleList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRoleList;
    static deserializeBinaryFromReader(message: UserRoleList, reader: jspb.BinaryReader): UserRoleList;
}

export namespace UserRoleList {
    export type AsObject = {
        userRoleList: Array<UserRole.AsObject>,
    }
}
