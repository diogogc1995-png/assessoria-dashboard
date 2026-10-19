// Configuração da app. É o único ficheiro que precisa de ser alterado ao instalar.
// Nada aqui é secreto: o Client ID OAuth é público por natureza e o ID da pasta
// não dá acesso a nada sem permissão no Google Drive.
export const CONFIG = {
  APP_TITLE: 'Assessoria DC & HC',

  // Google Cloud Console → APIs e serviços → Credenciais → ID de cliente OAuth (Aplicação Web).
  GOOGLE_CLIENT_ID: '605602246474-f7a1oqb3mj7h5h588uur5gcir9jul6hv.apps.googleusercontent.com',

  // Pasta partilhada no Google Drive onde vivem todos os ficheiros do dashboard.
  DRIVE_FOLDER_ID: '12cRd-CK0ADC7RCnBuJs_hNrRqKxkZYU0',

  // Ficheiro (criado na pasta acima) que guarda secções, widgets e permissões.
  CONFIG_FILE_NAME: 'dashboard.json',

  // De quanto em quanto tempo o dashboard volta a ler os ficheiros (segundos).
  POLL_SECONDS: 30,
};
