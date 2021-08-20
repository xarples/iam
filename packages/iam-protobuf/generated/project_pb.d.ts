// package: project
// file: project.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Project extends jspb.Message { 
    getId(): string;
    setId(value: string): Project;
    getName(): string;
    setName(value: string): Project;
    getDescription(): string;
    setDescription(value: string): Project;
    getUserId(): string;
    setUserId(value: string): Project;
    getCreatedAt(): string;
    setCreatedAt(value: string): Project;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class ProjectList extends jspb.Message { 
    clearProjectList(): void;
    getProjectList(): Array<Project>;
    setProjectList(value: Array<Project>): ProjectList;
    addProject(value?: Project, index?: number): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectList.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectList): ProjectList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectList;
    static deserializeBinaryFromReader(message: ProjectList, reader: jspb.BinaryReader): ProjectList;
}

export namespace ProjectList {
    export type AsObject = {
        projectList: Array<Project.AsObject>,
    }
}
