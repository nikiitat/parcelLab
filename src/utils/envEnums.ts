import getRequiredEnv from './getEnv';

export const PORT = getRequiredEnv('PORT');

export const NODE_ENV = getRequiredEnv('NODE_ENV');
