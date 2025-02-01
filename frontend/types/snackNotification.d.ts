/**
 * Represents the data for a snackbar notification, including appearance, behavior, and location settings.
 *
 * @property {string} color - The color of the snackbar.
 * @property {string} variant - The variant style of the snackbar (e.g., filled, outlined).
 * @property {number} timeout - The duration (in milliseconds) before the snackbar automatically disappears.
 * @property {string} location - The position where the snackbar is displayed (e.g., top, bottom).
 * @property {number} closeDelay - The delay (in milliseconds) before the snackbar closes after user action.
 * @property {boolean} multiLine - Indicates whether the snackbar supports multiline text.
 */
export interface SnackbarData {
    color: string
    variant: string
    timeout: number
    location: string
    closeDelay: number
    multiLine: boolean
}
