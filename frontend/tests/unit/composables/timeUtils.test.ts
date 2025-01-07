import { describe, it, expect } from 'vitest'
import { useTimeUtils } from '~/composables/timeUtils'

describe('useTimeUtils Composable', () => {

    it('should convert milliseconds to formatted minutes and seconds', () => {
        const { millisToMinutesAndSeconds } = useTimeUtils()

        // Test case for 125000 milliseconds (2 minutes and 5 seconds)
        const result = millisToMinutesAndSeconds(125000)
        expect(result).toBe('2:05')

        // Test case for 60000 milliseconds (1 minute and 0 seconds)
        const result2 = millisToMinutesAndSeconds(60000)
        expect(result2).toBe('1:00')

        // Test case for 63000 milliseconds (1 minute and 3 seconds)
        const result3 = millisToMinutesAndSeconds(63000)
        expect(result3).toBe('1:03')

        // Test case for 0 milliseconds (exactly 0 seconds)
        const result5 = millisToMinutesAndSeconds(0)
        expect(result5).toBe('0:00')
    })
})
