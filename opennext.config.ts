import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";
import cache from "@opennextjs/cloudflare/kv-cache";

const config: OpenNextConfig = {
  default: {
    runtime: 'edge',
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      incrementalCache: async () => cache,
    },
  },

  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
    },
  },
};

export default config; 