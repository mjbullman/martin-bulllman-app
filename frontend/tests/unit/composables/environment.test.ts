import { describe, it, expect, vi } from 'vitest'
import { useEnvironment } from '~/composables/environment'

describe('useEnvironment Composable', () => {

    const setUpTestEnv = (env: string, windowValue: object | undefined) => {
        vi.stubEnv('NODE_ENV', env)
        vi.stubGlobal('window', windowValue)
    }

    it('should correctly identify production environment', () => {
        // mocking process.env.NODE_ENV to be 'production'
        setUpTestEnv('production', {})

        const { isProduction, isDevelopment, isServer, isClient } = useEnvironment()

        expect(isProduction()).toBe(true)
        expect(isDevelopment()).toBe(false)
        expect(isServer()).toBe(false)
        expect(isClient()).toBe(true)
    })

    it('should correctly identify development environment', () => {
        // mocking process.env.NODE_ENV to be 'development'
        setUpTestEnv('development', {})

        const { isProduction, isDevelopment, isServer, isClient } = useEnvironment()

        expect(isProduction()).toBe(false)
        expect(isDevelopment()).toBe(true)
        expect(isServer()).toBe(false)
        expect(isClient()).toBe(true)
    })

    it('should identify server-side environment correctly', () => {
        // mocking process.env.NODE_ENV to be 'production' and window undefined (server-side)
        setUpTestEnv('production', undefined)

        const { isProduction, isDevelopment, isServer, isClient } = useEnvironment()

        expect(isProduction()).toBe(true)
        expect(isDevelopment()).toBe(false)
        expect(isServer()).toBe(true)
        expect(isClient()).toBe(false)
    })

    it('should identify client-side environment correctly', () => {
        // mocking process.env.NODE_ENV to be 'development' and window defined (client-side)
        setUpTestEnv('development', {})

        const { isProduction, isDevelopment, isServer, isClient } = useEnvironment()

        expect(isProduction()).toBe(false)
        expect(isDevelopment()).toBe(true)
        expect(isServer()).toBe(false)
        expect(isClient()).toBe(true)
    })
})
