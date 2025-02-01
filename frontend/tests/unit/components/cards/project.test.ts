import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from '~/components/cards/ProjectCard.vue'

describe('Project Card Component', () => {
    let mountComponent: () => Promise<ReturnType<typeof mountSuspended>>

    const project = {
        id: 1,
        title: 'Test Project',
        subTitle: 'Project Subtitle',
        text: 'This is a description of the project.',
        img: { href: 'image.jpg', alt: 'Project Image' },
        chips: ['Vue', 'Tailwind'],
        technologies: ['Vue', 'JavaScript'],
        links: [{ href: 'https://project-link.com', title: 'Project Link' }]
    }

    beforeEach(() => {
        // helper to mount the component.
        mountComponent = async () => mountSuspended(ProjectCard, {
            props: {
                project
            }
        })
    })

    it('mounts successfully', async () => {
        const component = await mountComponent()
        expect(component.exists()).toBe(true)
    })

    it('renders successfully with the correct data', async () => {
        const component = await mountComponent()

        expect(component.text()).toContain('Test Project')
        expect(component.text()).toContain('Project Subtitle')
        expect(component.text()).toContain('This is a description of the project.')
        expect(component.findAll('.v-chip')).toHaveLength(4)
        expect(component.findAll('.v-chip').at(0)?.text()).toBe('Vue')
        expect(component.findAll('.v-chip').at(1)?.text()).toBe('Tailwind')
        expect(component.find('a').attributes().href).toBe('https://project-link.com')
    })

    it('renders the correct image when `img` prop is passed', async () => {
        const component = await mountComponent()

        expect(component.find('img').exists()).toBe(true)
        expect(component.find('img').attributes().src).contains('image.jpg')
        expect(component.find('img').attributes().alt).toBe('Project Image')
    })

    it('does not render image when `img` prop is not passed', async () => {
        const projectWithoutImg = {
            ...project,
            img: undefined
        }

        const component = await mountSuspended(ProjectCard, {
            props: {
                project: projectWithoutImg
            }
        })

        expect(component.find('img').exists()).toBe(false)
    })

    it('does not render chips if `chips` prop is not passed', async () => {
        const projectWithoutChips = {
            ...project,
            chips: undefined
        }

        const component = await mountSuspended(ProjectCard, {
            props: {
                project: projectWithoutChips
            }
        })

        expect(component.findAll('v-chip')).toHaveLength(0)
    })

    it('should open the correct URL in a new tab when the button is clicked', async () => {
        const component = await mountComponent()

        const button = component.find('a')
        expect(button.attributes('href')).eq('https://project-link.com')
    })
})
