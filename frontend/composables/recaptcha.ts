import { useReCaptcha } from 'vue-recaptcha-v3'

/**
 * A class that defines various actions associated with Google recaptcha.
 * this class enables the creation of predefined action instances, ensuring
 * that the actions are consistently identified by their unique names.
 *
 * The class is designed to simplify the integration of reCAPTCHA in the
 * application by providing a clear and manageable way to reference
 * specific actions, such as 'contact'. each action can be easily
 * accessed and utilized when executing reCAPTCHA tasks.
 */
export class RecaptchaAction {
    /**
     * A predefined static instance for the 'contact' action.
     *
     * @type {RecaptchaAction}
     */
    public static readonly contact = new RecaptchaAction('contact')

    /**
     * Creates an instance of RecaptchaAction.
     *
     * @param {string} name - The name of the reCAPTCHA action.
     * @private
     */
    private constructor (public readonly name: string) {}
}

/**
 * A composable function that provides reCAPTCHA functionalities.
 *
 * @returns {object} An object containing:
 *   - {Function} executeRecaptcha - A function to execute a reCAPTCHA action and retrieve the token and header options.
 */
export default () => {
    // initialize the reCAPTCHA instance using the composable from vue-recaptcha-v3.
    const recaptchaInstance = useReCaptcha()

    /**
     * Executes the specified reCAPTCHA action and retrieves the corresponding reCAPTCHA token.
     *
     * @param {RecaptchaAction} action - An instance of RecaptchaAction representing the action to be executed.
     * @returns {Promise<object>} A promise that resolves to an object containing:
     *   - {string} token - The reCAPTCHA token.
     *   - {Object} headerOptions - The header options for API requests including the reCAPTCHA token.
     */
    const executeRecaptcha = async (action: RecaptchaAction) => {
        // wait for the reCAPTCHA instance to be loaded.
        await recaptchaInstance?.recaptchaLoaded()

        // execute the reCAPTCHA action and obtain the token.
        const token = await recaptchaInstance?.executeRecaptcha(action.name)

        const headerOptions = {
            headers: {
                'google-recaptcha-token': token
            }
        }

        return { token, headerOptions }
    }

    return { executeRecaptcha }
}
