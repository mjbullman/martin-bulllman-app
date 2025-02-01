import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { DOMWrapper } from '@vue/test-utils'
import FooterComponent from '~/components/layout/AppFooter.vue'

describe('Footer Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    beforeEach(() => {
        mountComponent = async () => mountSuspended(FooterComponent)
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('external social links open in a new tab', async () => {
        const component = await mountComponent()

        const socialButtons = component.findAll('.v-btn')

        socialButtons.forEach((link: DOMWrapper<Element>) => {
            expect(link.attributes('target')).toBe('_blank')
        })
    })

    it('displays the correct year in the footer', async () => {
        const component = await mountComponent()
        const year = new Date().getFullYear()
        expect(component.text()).toContain(`Martin Bullman ${year} ©`)
    })
})
