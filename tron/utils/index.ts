import { app } from 'electron';

export function isDev(): boolean {
  const ctx = app;

  const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
  const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

  return isEnvSet ? getFromEnv : !ctx.isPackaged;
}
