import { describe, it, expect } from 'vitest'
import { useAnimations } from '~/composables/animations'

describe('useAnimations', () => {

    it('should return the correct minimalFastFadeDown animation', () => {
        const { minimalFastFadeDown } = useAnimations()

        expect(minimalFastFadeDown.value.initial).toEqual({
            opacity: 0,
            y: -50
        })

        expect(minimalFastFadeDown.value.visible).toEqual({
            opacity: 1,
            y: 0,
            transition: { duration: 200 }
        })
    })

    it('should return the correct minimalFastFadeUp animation', () => {
        const { minimalFastFadeUp } = useAnimations()

        expect(minimalFastFadeUp.value.initial).toEqual({
            opacity: 0,
            y: 50
        })

        expect(minimalFastFadeUp.value.visible).toEqual({
            opacity: 1,
            y: 0,
            transition: { duration: 200 }
        })
    })

    it('should generate the correct visibleUpDown animation configuration', () => {
        const { visibleUpDown } = useAnimations()

        const delay = 300
        const start = -100
        const duration = 500
        const animationConfig = visibleUpDown(delay, start, duration)

        expect(animationConfig.initial).toEqual({
            opacity: 0,
            y: start
        })

        expect(animationConfig.visible).toEqual({
            opacity: 1,
            y: 0,
            transition: { duration: duration, delay: delay }
        })
    })
})
