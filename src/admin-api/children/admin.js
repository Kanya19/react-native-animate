const login = {url: '/auth/login', method: 'post'}
const modifyPassword = {url: '/admin/updatePassword', method: 'post'}
const getAdminDetail = {url: '/admin/getAdminDetail', method: 'get'}
const getAdminPermissions = {url: '/admin/getAdminPermissions', method: 'get'}
const getAdminPage = {url: '/admin/getAdminPage', method: 'post'}
const deleteAdmin = {url: '/admin/deleteAdmin', method: 'get'}
const queryAdminDetail = {url: '/admin/queryAdminDetail', method: 'get'}
const getAdminRolePermissionList = {url: '/admin/getAdminRolePermissionList', method: 'get'}
const updateAdminRolePermission = {url: '/admin/updateAdminRolePermission', method: 'post'}
const editAdminRole = {url: '/admin/editAdminRole', method: 'post'}
const deleteAdminRole = {url: '/admin/deleteAdminRole', method: 'get'}
const editAdmin = {url: '/admin/editAdmin', method: 'post'}
const resetAdminPassword = {url: '/admin/resetAdminPassword', method: 'get'}
const getAdminRoleList = {url: '/admin/getAdminRoleList', method: 'get'}
const getAdminRolePage = {url: '/admin/getAdminRolePage', method: 'post'}
const getAllPermissionList = {url: '/admin/getAllPermissionList', method: 'get'}
const getSysLogPage = {url: '/admin/getSysLogPage', method: 'post'}
const getAdminList = {url: '/admin/getAdminList', method: 'post'}
const getPermissionAdmin = {url: '/admin/getPermissionAdmin', method: 'get'}

export default {
  login,
  modifyPassword,
  getAdminList,
  getAdminDetail,
  getPermissionAdmin,
  getAdminPermissions,
  getAdminPage,
  deleteAdmin,
  queryAdminDetail,
  getAdminRolePermissionList,
  updateAdminRolePermission,
  editAdminRole,
  deleteAdminRole,
  editAdmin,
  resetAdminPassword,
  getAdminRoleList,
  getAdminRolePage,
  getAllPermissionList,
  getSysLogPage,
}
