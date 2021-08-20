// package: role
// file: role.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Role extends jspb.Message { 
    getId(): string;
    setId(value: string): Role;
    getProjectId(): string;
    setProjectId(value: string): Role;
    getName(): string;
    setName(value: string): Role;
    getDescription(): string;
    setDescription(value: string): Role;
    getCreatedAt(): string;
    setCreatedAt(value: string): Role;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Role;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Role.AsObject;
    static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Role;
    static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
    export type AsObject = {
        id: string,
        projectId: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class RoleList extends jspb.Message { 
    clearRoleList(): void;
    getRoleList(): Array<Role>;
    setRoleList(value: Array<Role>): RoleList;
    addRole(value?: Role, index?: number): Role;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoleList.AsObject;
    static toObject(includeInstance: boolean, msg: RoleList): RoleList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoleList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoleList;
    static deserializeBinaryFromReader(message: RoleList, reader: jspb.BinaryReader): RoleList;
}

export namespace RoleList {
    export type AsObject = {
        roleList: Array<Role.AsObject>,
    }
}
