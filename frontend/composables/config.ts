import { ref } from 'vue'

export function useConfig () {
    const baseUrl = ref(process.env.NODE_ENV === 'production' ? 'https://martinbullman.xyz' : 'http://localhost:8000')
    const apiUrl  = ref(process.env.NODE_ENV === 'production' ? 'https://martinbullman.xyz/api/v1/' : 'http://localhost:8000/api/v1')

    return {
        baseUrl,
        apiUrl
    }
}
