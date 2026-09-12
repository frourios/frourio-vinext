import fs from 'fs';
import path from 'path';
import type { NextConfig } from 'vinext';
import { loadNextConfig, PHASE_PRODUCTION_BUILD } from 'vinext/internal/config/next-config';

export type Config = { appDir: string | undefined; basePath: string | undefined };

export const getConfig = async (dir = process.cwd()): Promise<Config> => {
  const srcDir = fs.existsSync(path.posix.join(dir, 'src/app')) ? path.posix.join(dir, 'src') : dir;
  const appDir = path.posix.join(srcDir, 'app').replaceAll('\\', '/');
  const isAppDirUsed = fs.existsSync(appDir);
  const nextConfig: NextConfig = (await loadNextConfig(dir, PHASE_PRODUCTION_BUILD)) ?? {};

  return { appDir: isAppDirUsed ? appDir : undefined, basePath: nextConfig.basePath };
};
