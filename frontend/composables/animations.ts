import { ref } from 'vue'

export function useAnimations () {

    const fadeUp = ref({
        initial: {
            opacity: 0,
            y: 250
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 500
            }
        }
    })

    return { fadeUp }
}
