import type { OpenNextConfig } from "open-next/types/open-next.js";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // Dummy overrides prevent the WORKER_SELF_REFERENCE service binding
      // from being generated (which fails on first deploy when the worker
      // doesn't exist yet). This site uses no ISR so these are safe.
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  middleware: {
    external: true,
  },
};

export default config;
