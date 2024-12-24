import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    features: {
        stylistic: {
            semi: false,
            indent: 4,
            quotes: 'single',
            commaDangle: 'never',
            noTrailingSpaces: false
        },
        tooling: true
    }
})

    .override('nuxt/stylistic', {
        rules: {
            '@stylistic/indent-binary-ops': 'off',
            '@stylistic/indent': 'off',
            '@stylistic/arrow-parens': 'off',
            '@stylistic/max-statements-per-line': 'off',
            '@stylistic/padded-blocks': 'off',
            '@stylistic/operator-linebreak': 'off',
            '@stylistic/quote-props': ['error', 'consistent'],
            '@stylistic/space-before-function-paren': ['error', 'always']
        }
    })

    .override('nuxt/vue/rules', {
        rules: {
            'vue/html-self-closing': 'off',
            'vue/block-tag-newline': 'off',
            'vue/first-attribute-line-break': 'off',
            'vue/html-closing-bracket-newline': 'off',
            'vue/multiline-html-element-content-newline': 'off',
            'vue/max-attributes-per-line': ['error', {
                'singleline': 10,
                'multiline': { 'max': 5 }
            }]
        }
    })
