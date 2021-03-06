// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as project_pb from "./project_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getFirstName(): string;
    setFirstName(value: string): User;
    getLastName(): string;
    setLastName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    clearProjectList(): void;
    getProjectList(): Array<project_pb.Project>;
    setProjectList(value: Array<project_pb.Project>): User;
    addProject(value?: project_pb.Project, index?: number): project_pb.Project;
    getCreatedAt(): string;
    setCreatedAt(value: string): User;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        projectList: Array<project_pb.Project.AsObject>,
        createdAt: string,
        updatedAt: string,
    }
}

export class UserList extends jspb.Message { 
    clearUserList(): void;
    getUserList(): Array<User>;
    setUserList(value: Array<User>): UserList;
    addUser(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserList.AsObject;
    static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserList;
    static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
    export type AsObject = {
        userList: Array<User.AsObject>,
    }
}
