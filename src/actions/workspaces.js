export const GET_WORKSPACE_DETAIL = 'GET_WORKSPACE_DETAIL';
export const SAVE_CURRENT_WORKSPACE = 'SAVE_CURRENT_WORKSPACE';

export const actionGetWorkspaceDetail = (id) => ({
  type: GET_WORKSPACE_DETAIL,
  id,
});

export const actionSaveCurrentWorkspace = (data) => ({
  type: SAVE_CURRENT_WORKSPACE,
  data,
});
