import { describe, it, expect } from 'vitest'
import { useProjects } from '~/composables/projects'

describe('useProjects Composable', () => {

    it('should return the correct list of projects', () => {
        const { projects } = useProjects()

        // assert that the projects array is not empty
        expect(projects).toBeDefined()
        expect(projects.length).toBeGreaterThan(0)

        // check the first project to make sure it has the expected properties
        const firstProject = projects[0]
        expect(firstProject).toHaveProperty('id')
        expect(firstProject).toHaveProperty('title')
        expect(firstProject).toHaveProperty('subTitle')
        expect(firstProject).toHaveProperty('text')
        expect(firstProject).toHaveProperty('technologies')
        expect(firstProject).toHaveProperty('links')

        // check the first project's links to ensure they have the expected structure
        const firstLink = firstProject.links[0]
        expect(firstLink).toHaveProperty('title')
        expect(firstLink).toHaveProperty('href')
    })

    it('should ensure all projects have at least one link', () => {
        const { projects } = useProjects()

        projects.forEach(project => {
            expect(project.links.length).toBeGreaterThan(0)
            expect(project.links[0]).toHaveProperty('title')
            expect(project.links[0]).toHaveProperty('href')
        })
    })

    it('should have unique project ids', () => {
        const { projects } = useProjects()

        const ids = projects.map(project => project.id)
        const uniqueIds = new Set(ids)

        expect(uniqueIds.size).toBe(ids.length)
    })

})
