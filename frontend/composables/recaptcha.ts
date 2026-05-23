interface Grecaptcha {
    ready: (cb: () => void) => void
    execute: (siteKey: string, options: { action: string }) => Promise<string>
}

export class RecaptchaAction {
    public static readonly contact = new RecaptchaAction('contact')
    private constructor (public readonly name: string) {}
}

export default () => {
    const config = useRuntimeConfig()

    const executeRecaptcha = async (action: RecaptchaAction) => {
        await new Promise<void>(resolve => {
            (window as unknown as { grecaptcha: Grecaptcha }).grecaptcha.ready(() => resolve())
        })

        const token = await (window as unknown as { grecaptcha: Grecaptcha }).grecaptcha.execute(
            config.public.recaptchaSiteKey,
            { action: action.name }
        )

        return {
            token,
            headerOptions: {
                headers: { 'google-recaptcha-token': token }
            }
        }
    }

    return { executeRecaptcha }
}
