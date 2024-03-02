import { ref } from 'vue'

export function useAnimations () {

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
