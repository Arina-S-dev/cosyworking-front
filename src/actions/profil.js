export const GET_PUBLIC_PROFIL = 'GET_PUBLIC_PROFIL';
export const SAVE_PROFIL_TO_DISPLAY = 'SAVE_PROFIL_TO_DISPLAY';

export const actionGetPublicProfil = (id) => ({
  type: GET_PUBLIC_PROFIL,
  id,
});

export const actionSaveProfilToDisplay = (data) => ({
  type: SAVE_PROFIL_TO_DISPLAY,
  data,
});
