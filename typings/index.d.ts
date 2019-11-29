import Vue from 'vue';

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

declare namespace JsonViewer {
}

declare module "JsonViewer" {
  export = JsonViewer;
}

export function install (vue: typeof Vue, options: InstallationOptions): void
