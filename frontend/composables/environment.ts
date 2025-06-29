/**
 * Provides utility functions for determining the current runtime environment in a Nuxt app.
 *
 * - `isProduction`: Returns `true` if `NODE_ENV` is `'production'`.
 * - `isDevelopment`: Returns `true` if `NODE_ENV` is `'development'`.
 * - `isServer`: Returns `true` if code is running on the server (no `window` object).
 * - `isClient`: Returns `true` if code is running on the client (has access to `window`).
 */
export const useEnvironment = () => {
    const isProduction = (): boolean => process.env.NODE_ENV === 'production'
    const isDevelopment = (): boolean => process.env.NODE_ENV === 'development'
    const isServer = (): boolean => typeof window === 'undefined'
    const isClient = (): boolean => typeof window !== 'undefined'

    return {
        isProduction,
        isDevelopment,
        isServer,
        isClient
    }
}
