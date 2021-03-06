// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var permission_pb = require('./permission_pb.js');
var project_pb = require('./project_pb.js');
var role_pb = require('./role_pb.js');
var user_pb = require('./user_pb.js');

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

function serialize_project_Project(arg) {
  if (!(arg instanceof project_pb.Project)) {
    throw new Error('Expected argument of type project.Project');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_project_Project(buffer_arg) {
  return project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_project_ProjectList(arg) {
  if (!(arg instanceof project_pb.ProjectList)) {
    throw new Error('Expected argument of type project.ProjectList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_project_ProjectList(buffer_arg) {
  return project_pb.ProjectList.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserList(arg) {
  if (!(arg instanceof user_pb.UserList)) {
    throw new Error('Expected argument of type user.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserList(buffer_arg) {
  return user_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
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
  createProject: {
    path: '/auth.IAM/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Project,
    responseType: project_pb.Project,
    requestSerialize: serialize_project_Project,
    requestDeserialize: deserialize_project_Project,
    responseSerialize: serialize_project_Project,
    responseDeserialize: deserialize_project_Project,
  },
  getProject: {
    path: '/auth.IAM/GetProject',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Project,
    responseType: project_pb.Project,
    requestSerialize: serialize_project_Project,
    requestDeserialize: deserialize_project_Project,
    responseSerialize: serialize_project_Project,
    responseDeserialize: deserialize_project_Project,
  },
  listProjects: {
    path: '/auth.IAM/ListProjects',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Project,
    responseType: project_pb.ProjectList,
    requestSerialize: serialize_project_Project,
    requestDeserialize: deserialize_project_Project,
    responseSerialize: serialize_project_ProjectList,
    responseDeserialize: deserialize_project_ProjectList,
  },
  updateProject: {
    path: '/auth.IAM/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Project,
    responseType: project_pb.Project,
    requestSerialize: serialize_project_Project,
    requestDeserialize: deserialize_project_Project,
    responseSerialize: serialize_project_Project,
    responseDeserialize: deserialize_project_Project,
  },
  deleteProject: {
    path: '/auth.IAM/DeleteProject',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.Project,
    responseType: project_pb.Project,
    requestSerialize: serialize_project_Project,
    requestDeserialize: deserialize_project_Project,
    responseSerialize: serialize_project_Project,
    responseDeserialize: deserialize_project_Project,
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
  createUser: {
    path: '/auth.IAM/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  getUser: {
    path: '/auth.IAM/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  listUsers: {
    path: '/auth.IAM/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.UserList,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_UserList,
    responseDeserialize: deserialize_user_UserList,
  },
  updateUser: {
    path: '/auth.IAM/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  deleteUser: {
    path: '/auth.IAM/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
};

exports.IAMClient = grpc.makeGenericClientConstructor(IAMService);
