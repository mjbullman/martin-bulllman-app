import { describe, it, expect } from 'vitest'
import { usePublications } from '~/composables/publications'

describe('usePublications Composable', () => {

    it('should return an object containing a publications array', () => {
        const { publications } = usePublications()
        expect(publications).toBeDefined()
        expect(Array.isArray(publications)).toBe(true)
    })

    it('should contain required fields for each publication', () => {
        const { publications } = usePublications()

        publications.forEach(publication => {
            expect(publication).toHaveProperty('id')
            expect(publication).toHaveProperty('year')
            expect(publication).toHaveProperty('title')
            expect(publication).toHaveProperty('text')
            expect(publication).toHaveProperty('links')
        })
    })

    it('should ensure that each publication contains valid links with the correct structure', () => {
        const { publications } = usePublications()

        publications.forEach(publication => {
            expect(publication.links).toBeDefined()
            publication.links.forEach(link => {
                expect(link).toHaveProperty('title')
                expect(link).toHaveProperty('icon')
                expect(link).toHaveProperty('label')
                expect(link).toHaveProperty('href')
            })
        })
    })

    it('should include source code links with the correct URLs', () => {
        const { publications } = usePublications()

        publications.forEach(publication => {
            const sourceCodeLink = publication.links.find(link => link.label === 'Source Code')
            expect(sourceCodeLink).toBeDefined()
            if (sourceCodeLink) {
                expect(sourceCodeLink.href).toMatch(/^https:\/\/github\.com\//)
            }
        })
    })
})
