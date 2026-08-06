import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.brook.hearttoheart",
  appName: "心里有你",
  webDir: "web",
  android: {
    allowMixedContent: false,
  },
};

export default config;
