/**
 * Canonical site location.
 *
 * The apex host is canonical: `www` serves the same content, so anything that emits a public
 * URL (canonical tags, Open Graph, sitemap, schema.org) must build it from here rather than
 * from `BASE_URL`, which varies per environment.
 */

export const SITE_URL = 'https://martinbullman.xyz'
