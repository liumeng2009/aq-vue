import { DEFAULT_CACHE_TIME } from "@/settings/encryptionSettings"

export const createStorage = (
  storage: Storage = localStorage,
) => {
  const WebStorage = class WebStorage {
    private storage: Storage;
    constructor() {
      this.storage = storage;
    }

    set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      });
      this.storage.setItem(key, stringData);
    }

    get(key: string) {
      const item = this.storage.getItem(key);
      return item;
    }
  };
  return new WebStorage();
}