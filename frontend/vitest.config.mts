import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        globals: true,
        environment: 'nuxt',
        server: {
            deps: {
                inline: ['vuetify']
            }
        },
        coverage: {
            provider: 'v8',
            exclude: [
                'nuxt.config.ts',
                'node_modules/**',
                'tests/*',
                '.nuxt/**',
                'eslint.config.mjs',
                'vitest.config.mts',
                'app.config.ts'
            ]
        }
    }
})
