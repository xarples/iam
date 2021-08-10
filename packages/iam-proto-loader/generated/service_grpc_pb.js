// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var permission_pb = require('./permission_pb.js');
var role_pb = require('./role_pb.js');
var user$role_pb = require('./user-role_pb.js');

function serialize_permission_Permission(arg) {
  if (!(arg instanceof permission_pb.Permission)) {
    throw new Error('Expected argument of type permission.Permission');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_permission_Permission(buffer_arg) {
  return permission_pb.Permission.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_permission_PermissionList(arg) {
  if (!(arg instanceof permission_pb.PermissionList)) {
    throw new Error('Expected argument of type permission.PermissionList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_permission_PermissionList(buffer_arg) {
  return permission_pb.PermissionList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_role_Role(arg) {
  if (!(arg instanceof role_pb.Role)) {
    throw new Error('Expected argument of type role.Role');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_role_Role(buffer_arg) {
  return role_pb.Role.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_role_RoleList(arg) {
  if (!(arg instanceof role_pb.RoleList)) {
    throw new Error('Expected argument of type role.RoleList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_role_RoleList(buffer_arg) {
  return role_pb.RoleList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_role_UserRole(arg) {
  if (!(arg instanceof user$role_pb.UserRole)) {
    throw new Error('Expected argument of type user_role.UserRole');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_role_UserRole(buffer_arg) {
  return user$role_pb.UserRole.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_role_UserRoleList(arg) {
  if (!(arg instanceof user$role_pb.UserRoleList)) {
    throw new Error('Expected argument of type user_role.UserRoleList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_role_UserRoleList(buffer_arg) {
  return user$role_pb.UserRoleList.deserializeBinary(new Uint8Array(buffer_arg));
}


var IAMService = exports.IAMService = {
  createPermission: {
    path: '/auth.IAM/CreatePermission',
    requestStream: false,
    responseStream: false,
    requestType: permission_pb.Permission,
    responseType: permission_pb.Permission,
    requestSerialize: serialize_permission_Permission,
    requestDeserialize: deserialize_permission_Permission,
    responseSerialize: serialize_permission_Permission,
    responseDeserialize: deserialize_permission_Permission,
  },
  getPermission: {
    path: '/auth.IAM/GetPermission',
    requestStream: false,
    responseStream: false,
    requestType: permission_pb.Permission,
    responseType: permission_pb.Permission,
    requestSerialize: serialize_permission_Permission,
    requestDeserialize: deserialize_permission_Permission,
    responseSerialize: serialize_permission_Permission,
    responseDeserialize: deserialize_permission_Permission,
  },
  listPermissions: {
    path: '/auth.IAM/ListPermissions',
    requestStream: false,
    responseStream: false,
    requestType: permission_pb.Permission,
    responseType: permission_pb.PermissionList,
    requestSerialize: serialize_permission_Permission,
    requestDeserialize: deserialize_permission_Permission,
    responseSerialize: serialize_permission_PermissionList,
    responseDeserialize: deserialize_permission_PermissionList,
  },
  updatePermission: {
    path: '/auth.IAM/UpdatePermission',
    requestStream: false,
    responseStream: false,
    requestType: permission_pb.Permission,
    responseType: permission_pb.Permission,
    requestSerialize: serialize_permission_Permission,
    requestDeserialize: deserialize_permission_Permission,
    responseSerialize: serialize_permission_Permission,
    responseDeserialize: deserialize_permission_Permission,
  },
  deletePermission: {
    path: '/auth.IAM/DeletePermission',
    requestStream: false,
    responseStream: false,
    requestType: permission_pb.Permission,
    responseType: permission_pb.Permission,
    requestSerialize: serialize_permission_Permission,
    requestDeserialize: deserialize_permission_Permission,
    responseSerialize: serialize_permission_Permission,
    responseDeserialize: deserialize_permission_Permission,
  },
  createRole: {
    path: '/auth.IAM/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.Role,
    responseType: role_pb.Role,
    requestSerialize: serialize_role_Role,
    requestDeserialize: deserialize_role_Role,
    responseSerialize: serialize_role_Role,
    responseDeserialize: deserialize_role_Role,
  },
  getRole: {
    path: '/auth.IAM/GetRole',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.Role,
    responseType: role_pb.Role,
    requestSerialize: serialize_role_Role,
    requestDeserialize: deserialize_role_Role,
    responseSerialize: serialize_role_Role,
    responseDeserialize: deserialize_role_Role,
  },
  listRoles: {
    path: '/auth.IAM/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.Role,
    responseType: role_pb.RoleList,
    requestSerialize: serialize_role_Role,
    requestDeserialize: deserialize_role_Role,
    responseSerialize: serialize_role_RoleList,
    responseDeserialize: deserialize_role_RoleList,
  },
  updateRole: {
    path: '/auth.IAM/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.Role,
    responseType: role_pb.Role,
    requestSerialize: serialize_role_Role,
    requestDeserialize: deserialize_role_Role,
    responseSerialize: serialize_role_Role,
    responseDeserialize: deserialize_role_Role,
  },
  deleteRole: {
    path: '/auth.IAM/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.Role,
    responseType: role_pb.Role,
    requestSerialize: serialize_role_Role,
    requestDeserialize: deserialize_role_Role,
    responseSerialize: serialize_role_Role,
    responseDeserialize: deserialize_role_Role,
  },
  createUserRole: {
    path: '/auth.IAM/CreateUserRole',
    requestStream: false,
    responseStream: false,
    requestType: user$role_pb.UserRole,
    responseType: user$role_pb.UserRole,
    requestSerialize: serialize_user_role_UserRole,
    requestDeserialize: deserialize_user_role_UserRole,
    responseSerialize: serialize_user_role_UserRole,
    responseDeserialize: deserialize_user_role_UserRole,
  },
  getUserRole: {
    path: '/auth.IAM/GetUserRole',
    requestStream: false,
    responseStream: false,
    requestType: user$role_pb.UserRole,
    responseType: user$role_pb.UserRole,
    requestSerialize: serialize_user_role_UserRole,
    requestDeserialize: deserialize_user_role_UserRole,
    responseSerialize: serialize_user_role_UserRole,
    responseDeserialize: deserialize_user_role_UserRole,
  },
  listUserRoles: {
    path: '/auth.IAM/ListUserRoles',
    requestStream: false,
    responseStream: false,
    requestType: user$role_pb.UserRole,
    responseType: user$role_pb.UserRoleList,
    requestSerialize: serialize_user_role_UserRole,
    requestDeserialize: deserialize_user_role_UserRole,
    responseSerialize: serialize_user_role_UserRoleList,
    responseDeserialize: deserialize_user_role_UserRoleList,
  },
  updateUserRole: {
    path: '/auth.IAM/UpdateUserRole',
    requestStream: false,
    responseStream: false,
    requestType: user$role_pb.UserRole,
    responseType: user$role_pb.UserRole,
    requestSerialize: serialize_user_role_UserRole,
    requestDeserialize: deserialize_user_role_UserRole,
    responseSerialize: serialize_user_role_UserRole,
    responseDeserialize: deserialize_user_role_UserRole,
  },
  deleteUserRole: {
    path: '/auth.IAM/DeleteUserRole',
    requestStream: false,
    responseStream: false,
    requestType: user$role_pb.UserRole,
    responseType: user$role_pb.UserRole,
    requestSerialize: serialize_user_role_UserRole,
    requestDeserialize: deserialize_user_role_UserRole,
    responseSerialize: serialize_user_role_UserRole,
    responseDeserialize: deserialize_user_role_UserRole,
  },
};

exports.IAMClient = grpc.makeGenericClientConstructor(IAMService);
