// package: auth
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";
import * as permission_pb from "./permission_pb";
import * as project_pb from "./project_pb";
import * as role_pb from "./role_pb";
import * as user_pb from "./user_pb";

interface IIAMService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPermission: IIAMService_ICreatePermission;
    getPermission: IIAMService_IGetPermission;
    listPermissions: IIAMService_IListPermissions;
    updatePermission: IIAMService_IUpdatePermission;
    deletePermission: IIAMService_IDeletePermission;
    createProject: IIAMService_ICreateProject;
    getProject: IIAMService_IGetProject;
    listProjects: IIAMService_IListProjects;
    updateProject: IIAMService_IUpdateProject;
    deleteProject: IIAMService_IDeleteProject;
    createRole: IIAMService_ICreateRole;
    getRole: IIAMService_IGetRole;
    listRoles: IIAMService_IListRoles;
    updateRole: IIAMService_IUpdateRole;
    deleteRole: IIAMService_IDeleteRole;
    createUser: IIAMService_ICreateUser;
    getUser: IIAMService_IGetUser;
    listUsers: IIAMService_IListUsers;
    updateUser: IIAMService_IUpdateUser;
    deleteUser: IIAMService_IDeleteUser;
}

interface IIAMService_ICreatePermission extends grpc.MethodDefinition<permission_pb.Permission, permission_pb.Permission> {
    path: "/auth.IAM/CreatePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<permission_pb.Permission>;
    requestDeserialize: grpc.deserialize<permission_pb.Permission>;
    responseSerialize: grpc.serialize<permission_pb.Permission>;
    responseDeserialize: grpc.deserialize<permission_pb.Permission>;
}
interface IIAMService_IGetPermission extends grpc.MethodDefinition<permission_pb.Permission, permission_pb.Permission> {
    path: "/auth.IAM/GetPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<permission_pb.Permission>;
    requestDeserialize: grpc.deserialize<permission_pb.Permission>;
    responseSerialize: grpc.serialize<permission_pb.Permission>;
    responseDeserialize: grpc.deserialize<permission_pb.Permission>;
}
interface IIAMService_IListPermissions extends grpc.MethodDefinition<permission_pb.Permission, permission_pb.PermissionList> {
    path: "/auth.IAM/ListPermissions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<permission_pb.Permission>;
    requestDeserialize: grpc.deserialize<permission_pb.Permission>;
    responseSerialize: grpc.serialize<permission_pb.PermissionList>;
    responseDeserialize: grpc.deserialize<permission_pb.PermissionList>;
}
interface IIAMService_IUpdatePermission extends grpc.MethodDefinition<permission_pb.Permission, permission_pb.Permission> {
    path: "/auth.IAM/UpdatePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<permission_pb.Permission>;
    requestDeserialize: grpc.deserialize<permission_pb.Permission>;
    responseSerialize: grpc.serialize<permission_pb.Permission>;
    responseDeserialize: grpc.deserialize<permission_pb.Permission>;
}
interface IIAMService_IDeletePermission extends grpc.MethodDefinition<permission_pb.Permission, permission_pb.Permission> {
    path: "/auth.IAM/DeletePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<permission_pb.Permission>;
    requestDeserialize: grpc.deserialize<permission_pb.Permission>;
    responseSerialize: grpc.serialize<permission_pb.Permission>;
    responseDeserialize: grpc.deserialize<permission_pb.Permission>;
}
interface IIAMService_ICreateProject extends grpc.MethodDefinition<project_pb.Project, project_pb.Project> {
    path: "/auth.IAM/CreateProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Project>;
    requestDeserialize: grpc.deserialize<project_pb.Project>;
    responseSerialize: grpc.serialize<project_pb.Project>;
    responseDeserialize: grpc.deserialize<project_pb.Project>;
}
interface IIAMService_IGetProject extends grpc.MethodDefinition<project_pb.Project, project_pb.Project> {
    path: "/auth.IAM/GetProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Project>;
    requestDeserialize: grpc.deserialize<project_pb.Project>;
    responseSerialize: grpc.serialize<project_pb.Project>;
    responseDeserialize: grpc.deserialize<project_pb.Project>;
}
interface IIAMService_IListProjects extends grpc.MethodDefinition<project_pb.Project, project_pb.ProjectList> {
    path: "/auth.IAM/ListProjects";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Project>;
    requestDeserialize: grpc.deserialize<project_pb.Project>;
    responseSerialize: grpc.serialize<project_pb.ProjectList>;
    responseDeserialize: grpc.deserialize<project_pb.ProjectList>;
}
interface IIAMService_IUpdateProject extends grpc.MethodDefinition<project_pb.Project, project_pb.Project> {
    path: "/auth.IAM/UpdateProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Project>;
    requestDeserialize: grpc.deserialize<project_pb.Project>;
    responseSerialize: grpc.serialize<project_pb.Project>;
    responseDeserialize: grpc.deserialize<project_pb.Project>;
}
interface IIAMService_IDeleteProject extends grpc.MethodDefinition<project_pb.Project, project_pb.Project> {
    path: "/auth.IAM/DeleteProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<project_pb.Project>;
    requestDeserialize: grpc.deserialize<project_pb.Project>;
    responseSerialize: grpc.serialize<project_pb.Project>;
    responseDeserialize: grpc.deserialize<project_pb.Project>;
}
interface IIAMService_ICreateRole extends grpc.MethodDefinition<role_pb.Role, role_pb.Role> {
    path: "/auth.IAM/CreateRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<role_pb.Role>;
    requestDeserialize: grpc.deserialize<role_pb.Role>;
    responseSerialize: grpc.serialize<role_pb.Role>;
    responseDeserialize: grpc.deserialize<role_pb.Role>;
}
interface IIAMService_IGetRole extends grpc.MethodDefinition<role_pb.Role, role_pb.Role> {
    path: "/auth.IAM/GetRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<role_pb.Role>;
    requestDeserialize: grpc.deserialize<role_pb.Role>;
    responseSerialize: grpc.serialize<role_pb.Role>;
    responseDeserialize: grpc.deserialize<role_pb.Role>;
}
interface IIAMService_IListRoles extends grpc.MethodDefinition<role_pb.Role, role_pb.RoleList> {
    path: "/auth.IAM/ListRoles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<role_pb.Role>;
    requestDeserialize: grpc.deserialize<role_pb.Role>;
    responseSerialize: grpc.serialize<role_pb.RoleList>;
    responseDeserialize: grpc.deserialize<role_pb.RoleList>;
}
interface IIAMService_IUpdateRole extends grpc.MethodDefinition<role_pb.Role, role_pb.Role> {
    path: "/auth.IAM/UpdateRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<role_pb.Role>;
    requestDeserialize: grpc.deserialize<role_pb.Role>;
    responseSerialize: grpc.serialize<role_pb.Role>;
    responseDeserialize: grpc.deserialize<role_pb.Role>;
}
interface IIAMService_IDeleteRole extends grpc.MethodDefinition<role_pb.Role, role_pb.Role> {
    path: "/auth.IAM/DeleteRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<role_pb.Role>;
    requestDeserialize: grpc.deserialize<role_pb.Role>;
    responseSerialize: grpc.serialize<role_pb.Role>;
    responseDeserialize: grpc.deserialize<role_pb.Role>;
}
interface IIAMService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.IAM/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IIAMService_IGetUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.IAM/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IIAMService_IListUsers extends grpc.MethodDefinition<user_pb.User, user_pb.UserList> {
    path: "/auth.IAM/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.UserList>;
    responseDeserialize: grpc.deserialize<user_pb.UserList>;
}
interface IIAMService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.IAM/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IIAMService_IDeleteUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.IAM/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const IAMService: IIAMService;

export interface IIAMServer extends grpc.UntypedServiceImplementation {
    createPermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    getPermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    listPermissions: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.PermissionList>;
    updatePermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    deletePermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    createProject: grpc.handleUnaryCall<project_pb.Project, project_pb.Project>;
    getProject: grpc.handleUnaryCall<project_pb.Project, project_pb.Project>;
    listProjects: grpc.handleUnaryCall<project_pb.Project, project_pb.ProjectList>;
    updateProject: grpc.handleUnaryCall<project_pb.Project, project_pb.Project>;
    deleteProject: grpc.handleUnaryCall<project_pb.Project, project_pb.Project>;
    createRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    getRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    listRoles: grpc.handleUnaryCall<role_pb.Role, role_pb.RoleList>;
    updateRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    deleteRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    listUsers: grpc.handleUnaryCall<user_pb.User, user_pb.UserList>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    deleteUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
}

export interface IIAMClient {
    createPermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    createPermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    createPermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    getPermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    getPermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    getPermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    listPermissions(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    listPermissions(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    listPermissions(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    updatePermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    updatePermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    updatePermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    deletePermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    deletePermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    deletePermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    createProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    createProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    createProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    getProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    getProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    getProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    listProjects(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    listProjects(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    listProjects(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    updateProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    updateProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    updateProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    deleteProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    deleteProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    deleteProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    createRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    createRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    createRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    getRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    getRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    getRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    listRoles(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    listRoles(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    listRoles(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    updateRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    updateRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    updateRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    deleteRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    deleteRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    deleteRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class IAMClient extends grpc.Client implements IIAMClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public createPermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public createPermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public getPermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public getPermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public getPermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public listPermissions(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    public listPermissions(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    public listPermissions(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.PermissionList) => void): grpc.ClientUnaryCall;
    public updatePermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public updatePermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public updatePermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public deletePermission(request: permission_pb.Permission, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public deletePermission(request: permission_pb.Permission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public deletePermission(request: permission_pb.Permission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: permission_pb.Permission) => void): grpc.ClientUnaryCall;
    public createProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public createProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public createProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public getProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public getProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public getProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public listProjects(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    public listProjects(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    public listProjects(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.ProjectList) => void): grpc.ClientUnaryCall;
    public updateProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public updateProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public updateProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public deleteProject(request: project_pb.Project, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public deleteProject(request: project_pb.Project, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public deleteProject(request: project_pb.Project, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: project_pb.Project) => void): grpc.ClientUnaryCall;
    public createRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public createRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public createRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public getRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public getRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public getRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public listRoles(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    public listRoles(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    public listRoles(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.RoleList) => void): grpc.ClientUnaryCall;
    public updateRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public updateRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public updateRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public deleteRole(request: role_pb.Role, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public deleteRole(request: role_pb.Role, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public deleteRole(request: role_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: role_pb.Role) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
