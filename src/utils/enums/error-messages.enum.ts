export enum ErrorMessagesEnum {
  UNAUTHORIZED_LOGIN = 'E-mail ou senha incorretos.',
  INACTIVE_USER = 'Usuário inativo. Entre em contato com o suporte para verificar seu acesso.',
  NOT_AUTHORIZED = 'Você não tem permissão para acessar este recurso.',
  USER_NOT_FOUND = 'Usuário não encontrado.',
  USER_TOKEN_NOT_FOUND = 'Token de usuário não encontrado.',
  INVALID_USER_TOKEN = 'Token de usuário inválido. Solicite outra recuperação de senha.',
  EMAIL_ALREADY_EXISTS = 'Este e-mal já existe.',
  USER_NOT_ALLOWED = 'Você não tem acesso aos dados deste usuário.',
  PROFILE_NOT_ALLOWED = 'Perfil não permitido.',
  PROFILE_NOT_FOUND = 'Perfil não encontrado.',

  REGISTER_NAME_ALREADY_EXISTS = 'Já existe um registro com o nome informado.',

  INVALID_COLUMN_NAME = 'A propridade columnName é inválida.',
  INVALID_COLUMN_ORDER = 'A propridade columnOrder é inválida.',

  PRODUCT_NOT_FOUND = 'Produto não encontrado.',
  PRODUCT_NAME_ALREADY_EXISTS = 'Já existe um produto cadastrado com o nome informado.',
}
