// package: user_role
// file: user-project.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserProject extends jspb.Message { 
    getId(): string;
    setId(value: string): UserProject;
    getUserId(): string;
    setUserId(value: string): UserProject;
    getProjectId(): string;
    setProjectId(value: string): UserProject;
    getCreatedAt(): string;
    setCreatedAt(value: string): UserProject;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): UserProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserProject.AsObject;
    static toObject(includeInstance: boolean, msg: UserProject): UserProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserProject;
    static deserializeBinaryFromReader(message: UserProject, reader: jspb.BinaryReader): UserProject;
}

export namespace UserProject {
    export type AsObject = {
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class UserProjectList extends jspb.Message { 
    clearUserProjectList(): void;
    getUserProjectList(): Array<UserProject>;
    setUserProjectList(value: Array<UserProject>): UserProjectList;
    addUserProject(value?: UserProject, index?: number): UserProject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserProjectList.AsObject;
    static toObject(includeInstance: boolean, msg: UserProjectList): UserProjectList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserProjectList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserProjectList;
    static deserializeBinaryFromReader(message: UserProjectList, reader: jspb.BinaryReader): UserProjectList;
}

export namespace UserProjectList {
    export type AsObject = {
        userProjectList: Array<UserProject.AsObject>,
    }
}
