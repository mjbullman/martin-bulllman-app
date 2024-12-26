/**
 * Composable for time-related utility methods.
 */
export function useTimeUtils () {
    /**
     * Converts milliseconds to a string formatted as "minutes:seconds".
     * Pads seconds with a leading zero if it is less than 10.
     *
     * @param {number} millis - The time duration in milliseconds.
     * @returns {string} - The formatted time string (e.g., "2:03").
     */
    function millisToMinutesAndSeconds (millis: number): string {
        const minutes: number = Math.floor(millis / 60000)
        const seconds: number = ((millis % 60000) / 1000)

        return minutes + ':' + (seconds < 9 ? '0' : '') + seconds.toFixed(0)
    }

    return { millisToMinutesAndSeconds }
}
