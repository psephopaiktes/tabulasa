import { defineConfig } from "wxt";

const manifest = {
  name: "__MSG_extName__",
  description: "__MSG_extDescription__",
  default_locale: "en",
  homepage_url: "https://github.com/psephopaiktes/tabulasa",
  permissions: ["tabs", "storage"],
  commands: {
    _execute_action: {
      suggested_key: {
        default: "Alt+T",
      },
    },
  },
  browser_specific_settings: {
    gecko: {
      id: "tabulasa@hira.page",
    },
  },
  action: {}, // Required
};

export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-svelte", "@wxt-dev/auto-icons"],
  manifest,
});
