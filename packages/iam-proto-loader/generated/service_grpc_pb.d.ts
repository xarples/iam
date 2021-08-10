// package: auth
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";
import * as permission_pb from "./permission_pb";
import * as role_pb from "./role_pb";
import * as user_role_pb from "./user-role_pb";

interface IIAMService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPermission: IIAMService_ICreatePermission;
    getPermission: IIAMService_IGetPermission;
    listPermissions: IIAMService_IListPermissions;
    updatePermission: IIAMService_IUpdatePermission;
    deletePermission: IIAMService_IDeletePermission;
    createRole: IIAMService_ICreateRole;
    getRole: IIAMService_IGetRole;
    listRoles: IIAMService_IListRoles;
    updateRole: IIAMService_IUpdateRole;
    deleteRole: IIAMService_IDeleteRole;
    createUserRole: IIAMService_ICreateUserRole;
    getUserRole: IIAMService_IGetUserRole;
    listUserRoles: IIAMService_IListUserRoles;
    updateUserRole: IIAMService_IUpdateUserRole;
    deleteUserRole: IIAMService_IDeleteUserRole;
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
interface IIAMService_ICreateUserRole extends grpc.MethodDefinition<user_role_pb.UserRole, user_role_pb.UserRole> {
    path: "/auth.IAM/CreateUserRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_role_pb.UserRole>;
    requestDeserialize: grpc.deserialize<user_role_pb.UserRole>;
    responseSerialize: grpc.serialize<user_role_pb.UserRole>;
    responseDeserialize: grpc.deserialize<user_role_pb.UserRole>;
}
interface IIAMService_IGetUserRole extends grpc.MethodDefinition<user_role_pb.UserRole, user_role_pb.UserRole> {
    path: "/auth.IAM/GetUserRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_role_pb.UserRole>;
    requestDeserialize: grpc.deserialize<user_role_pb.UserRole>;
    responseSerialize: grpc.serialize<user_role_pb.UserRole>;
    responseDeserialize: grpc.deserialize<user_role_pb.UserRole>;
}
interface IIAMService_IListUserRoles extends grpc.MethodDefinition<user_role_pb.UserRole, user_role_pb.UserRoleList> {
    path: "/auth.IAM/ListUserRoles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_role_pb.UserRole>;
    requestDeserialize: grpc.deserialize<user_role_pb.UserRole>;
    responseSerialize: grpc.serialize<user_role_pb.UserRoleList>;
    responseDeserialize: grpc.deserialize<user_role_pb.UserRoleList>;
}
interface IIAMService_IUpdateUserRole extends grpc.MethodDefinition<user_role_pb.UserRole, user_role_pb.UserRole> {
    path: "/auth.IAM/UpdateUserRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_role_pb.UserRole>;
    requestDeserialize: grpc.deserialize<user_role_pb.UserRole>;
    responseSerialize: grpc.serialize<user_role_pb.UserRole>;
    responseDeserialize: grpc.deserialize<user_role_pb.UserRole>;
}
interface IIAMService_IDeleteUserRole extends grpc.MethodDefinition<user_role_pb.UserRole, user_role_pb.UserRole> {
    path: "/auth.IAM/DeleteUserRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_role_pb.UserRole>;
    requestDeserialize: grpc.deserialize<user_role_pb.UserRole>;
    responseSerialize: grpc.serialize<user_role_pb.UserRole>;
    responseDeserialize: grpc.deserialize<user_role_pb.UserRole>;
}

export const IAMService: IIAMService;

export interface IIAMServer extends grpc.UntypedServiceImplementation {
    createPermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    getPermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    listPermissions: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.PermissionList>;
    updatePermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    deletePermission: grpc.handleUnaryCall<permission_pb.Permission, permission_pb.Permission>;
    createRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    getRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    listRoles: grpc.handleUnaryCall<role_pb.Role, role_pb.RoleList>;
    updateRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    deleteRole: grpc.handleUnaryCall<role_pb.Role, role_pb.Role>;
    createUserRole: grpc.handleUnaryCall<user_role_pb.UserRole, user_role_pb.UserRole>;
    getUserRole: grpc.handleUnaryCall<user_role_pb.UserRole, user_role_pb.UserRole>;
    listUserRoles: grpc.handleUnaryCall<user_role_pb.UserRole, user_role_pb.UserRoleList>;
    updateUserRole: grpc.handleUnaryCall<user_role_pb.UserRole, user_role_pb.UserRole>;
    deleteUserRole: grpc.handleUnaryCall<user_role_pb.UserRole, user_role_pb.UserRole>;
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
    createUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    createUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    createUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    getUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    getUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    getUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    listUserRoles(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    listUserRoles(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    listUserRoles(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    updateUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    updateUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    updateUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    deleteUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    deleteUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    deleteUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
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
    public createUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public createUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public createUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public getUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public getUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public getUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public listUserRoles(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    public listUserRoles(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    public listUserRoles(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRoleList) => void): grpc.ClientUnaryCall;
    public updateUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public updateUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public updateUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public deleteUserRole(request: user_role_pb.UserRole, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public deleteUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
    public deleteUserRole(request: user_role_pb.UserRole, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_role_pb.UserRole) => void): grpc.ClientUnaryCall;
}
