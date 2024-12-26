import { ref } from 'vue'

/**
 * Composable for defining and reusing animation configurations in Vue components.
 */
export function useAnimations () {

    /**
     *  A quick fade-down effect.
     */
    const minimalFastFadeDown = ref({
        initial: {
            opacity: 0,
            y: -50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 200
            }
        }
    })

    /**
     * A quick fade-up effect.
     */
    const minimalFastFadeUp = ref({
        initial: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 200
            }
        }
    })

    /**
     * Generates a fade-up or fade-down animation configuration.
     * @param {number} delay - Delay in milliseconds before the animation starts.
     * @param {number} start - Starting y-offset position (positive for down, negative for up).
     * @param {number} duration - Duration of the animation in milliseconds.
     * @returns {object} - Animation configuration for motion effects.
     */
    function visibleUpDown (delay: number, start: number, duration: number) {
        return {
            initial: {
                opacity: 0,
                y: start
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay
                }
            }
        }
    }

    return { minimalFastFadeDown, minimalFastFadeUp, visibleUpDown }
}
