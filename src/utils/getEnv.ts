export default function getRequiredEnv(key: string): string {
  return getEnv(key);
}

function getEnv(key: string): string {
  const env = process.env[key];

  if (env) {
    return env;
  }

  throw new Error('Environment variable is not provided');
}
