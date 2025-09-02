const path = require("node:path");

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: [{ from: "../public", to: "/public" }],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }

  // babel: async options => ({
  //   // Update babel configuration here
  //   ...options
  // }),

  // webpackFinal: async (config, { configType }) => {
  //   // Update webpack configuration here
  //   return config;
  // }
};

export default config;
