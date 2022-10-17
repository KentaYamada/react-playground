/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOGE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
