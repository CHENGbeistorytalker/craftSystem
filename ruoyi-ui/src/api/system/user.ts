import { request } from '@/utils/request';
import { parseStrEmpty } from '@/utils/ruoyi';
import { SysUser, SysUserInfo, UserAuthRole, UserAvatarResult, UserProfile } from '@/api/system/model/userModel';
import { R, TableDataInfo, TreeModel } from '@/api/model/ResultModel';

// 查询用户列表
export function listUser(query) {
  return request.get<TableDataInfo<SysUser>>({
    url: '/system/user/list',
    params: query,
  });
}

// 查询用户详细
export function getUser(userId?: number) {
  return request.get<R<SysUserInfo>>({
    url: `/system/user/${parseStrEmpty(userId)}`,
  });
}

// 新增用户
export function addUser(data) {
  return request.post<R<void>>({
    url: '/system/user',
    data,
  });
}

// 修改用户
export function updateUser(data) {
  return request.put<R<void>>({
    url: '/system/user',
    data,
  });
}

// 删除用户
export function delUser(userId) {
  return request.delete<R<void>>({
    url: `/system/user/${userId}`,
    method: 'delete',
  });
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password,
  };
  return request.put<R<void>>({
    url: '/system/user/resetPwd',
    data,
  });
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status,
  };
  return request.put<R<void>>({
    url: '/system/user/changeStatus',
    data,
  });
}

// 查询用户个人信息
export function getUserProfile() {
  return request.get<R<UserProfile>>({
    url: '/system/user/profile',
  });
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request.put<R<void>>({
    url: '/system/user/profile',
    data,
  });
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword,
  };
  return request.put<R<void>>({
    url: '/system/user/profile/updatePwd',
    params: data,
  });
}

// 用户头像上传
export function uploadAvatar(data) {
  return request.post<R<UserAvatarResult>>({
    url: '/system/user/profile/avatar',
    headers: {
      'content-type': 'multipart/form-data',
    },
    data,
  });
}

// 查询授权角色
export function getAuthRole(userId) {
  return request.get<R<UserAuthRole>>({
    url: `/system/user/authRole/${userId}`,
  });
}

// 保存授权角色
export function updateAuthRole(data) {
  return request.put<R<void>>({
    url: '/system/user/authRole',
    params: data,
  });
}

// 查询部门下拉树结构
export function deptTreeSelect() {
  return request.get<R<Array<TreeModel<number>>>>({
    url: '/system/user/deptTree',
    method: 'get',
  });
}
