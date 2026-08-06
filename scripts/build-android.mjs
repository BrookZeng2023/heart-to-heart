import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const androidDir = resolve(projectRoot, 'android');
const bundledJdk21 = '/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home';
const javaHome = process.env.JAVA_HOME_21
  || (existsSync(bundledJdk21) ? bundledJdk21 : process.env.JAVA_HOME);

if (!javaHome) {
  throw new Error('Android build requires JDK 21. Set JAVA_HOME_21 or JAVA_HOME first.');
}

const result = spawnSync('./gradlew', ['assembleDebug'], {
  cwd: androidDir,
  env: { ...process.env, JAVA_HOME: javaHome },
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
