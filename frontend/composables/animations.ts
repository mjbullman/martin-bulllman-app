import { ref } from 'vue'

export function useAnimations () {

    const fadeUp = ref({
        initial: {
            opacity: 0,
            y: -30
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 300
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 300
            }
        }
    })

    return { fadeUp }
}
