import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseIcon from '~/components/icons/social/BaseIcon.vue'

describe('BaseIcon Component', () => {

    it('renders correctly with required props', async () => {
        const wrapper = await mountSuspended(BaseIcon, {
            props: {
                href: 'https://facebook.com/mjbullman',
                label: 'View my Facebook profile',
                size: 'large'
            }
        })

        const link = wrapper.find('a')

        expect(link.exists()).toBe(true)
        expect(link.attributes('href')).toBe('https://facebook.com/mjbullman')
        expect(link.attributes('aria-label')).toBe('View my Facebook profile')
        expect(link.classes()).toContain('v-btn--size-large')
    })

    it('renders slot content correctly', async () => {
        const wrapper = await mountSuspended(BaseIcon, {
            props: {
                href: 'https://example.com',
                label: 'Slot test'
            },
            slots: {
                default: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40' }, [
                    h('circle', { cx: '20', cy: '20', r: '10', fill: 'red' })
                ])
            }
        })

        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
        expect(svg.attributes('width')).toBe('40')
        expect(svg.find('circle').attributes('fill')).toBe('red')
    })

})
