<template>

    <v-container fluid class="pa-0">

        <page-heading heading-text="Contact"></page-heading>

        <v-container>

            <v-row>

                <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="text-medium-emphasis ">

                    <p class="text-h3 mb-5">

                        Let's Connect

                    </p>

                    <p class="mb-5">
                        Whether you're interested in collaborating on a project, discussing a potential opportunity, or
                        just want to chat about all things tech, I'd love to hear from you.
                    </p>

                    <p class="mb-5">
                        Feel free to reach out via the contact form or through my social media channels, and I'll get
                        back to you as soon as possible.</p>

                    <p class="mb-5">
                        Thanks for dropping by!
                    </p>

                    <div>

                        <git-hub :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></git-hub>

                        <linked-in :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></linked-in>

                        <instagram :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></instagram>

                        <facebook :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></facebook>

                        <twitter :size="'large'" :width="30" :height="30" :color="'#B9B9B9'"></twitter>

                    </div>

                </v-col>

                <v-col cols="12" sm="12" md="6" lg="6" xl="4">

                    <form @submit.prevent="submit">

                        <v-text-field
                            v-model="name.value.value"
                            :error-messages="name.errorMessage.value"
                            label="Name"
                            color="primary"
                            class="mb-5"
                            variant="outlined"
                            prepend-inner-icon="fa-regular fa-user">
                        </v-text-field>

                        <v-text-field
                            v-model="email.value.value"
                            :error-messages="email.errorMessage.value"
                            label="Email"
                            color="primary"
                            class="mb-5"
                            variant="outlined"
                            prepend-inner-icon="fa-regular fa-envelope">
                        </v-text-field>

                        <v-textarea
                            v-model="message.value.value"
                            :error-messages="message.errorMessage.value"
                            label="Message"
                            color="primary"
                            class="mb-5"
                            variant="outlined"
                            prepend-inner-icon="fa-regular fa-message">
                        </v-textarea>

                        <v-btn :loading="loading" class="me-4" type="submit" @click="handleSubmit" color="primary">

                            submit

                        </v-btn>

                        <v-btn @click="handleReset" variant="text">

                          clear

                        </v-btn>

                    </form>

                </v-col>

            </v-row>

        </v-container>

    </v-container>

</template>

<script setup lang="ts">

    import GitHub      from '~/components/icons/GitHub.vue'
    import Twitter     from '~/components/icons/Twitter.vue'
    import Facebook    from '~/components/icons/Facebook.vue'
    import LinkedIn    from '~/components/icons/LinkedIn.vue'
    import Instagram   from '~/components/icons/Instagram.vue'
    import PageHeading from '~/components/layout/PageHeading.vue'

    import { useNotifications }  from '~/stores/notifications'
    import { useField, useForm } from 'vee-validate'
    import useGoogleRecaptcha, {RecaptchaAction} from '~/composables/recaptcha'

    const runtimeConfig        = useRuntimeConfig()
    const notifications        = useNotifications()
    const { executeRecaptcha } = useGoogleRecaptcha()

    let loading = ref(false)

    interface ContactForm {
        name    ?: string | null;
        email   ?: string | null;
        message ?: string | null;
    }

    const { handleSubmit, handleReset } = useForm<ContactForm>({
        validationSchema: {
            name (value) {
                if (value?.length >= 2) {
                    return true;
                }
                else {
                    return 'Name needs to be at least 2 characters.';
                }
            },
            email (value) {
                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
                    return true;
                }
                else {
                    return 'Must be a valid e-mail.';
                }
            },
            message (value) {
                if (value?.length >= 2) {
                    return true;
                }
                else {
                    return 'Message needs to be at least 2 characters.';
                }
            }
        }
    })

    const name    = useField('name');
    const email   = useField('email');
    const message = useField('message');

    const submit = handleSubmit(async values => {
        loading.value   = true
        const { token } = await executeRecaptcha(RecaptchaAction.contact)

        useFetch(runtimeConfig.public.apiBaseUrl+ '/contact', {
            method: 'POST',
            body: {
                name            : values.name,
                email           : values.email,
                message         : values.message,
                recaptcha_token : token
            }
        })
        .then(response => {
            handleReset()

            notifications.updateSnackbarData({
                text       : response.data.value,
                color      : 'info',
                toggle     : true,
                timeout    : 6000,
                variant    : 'elevated',
                location   : 'top',
                multiLine  : false,
                closeDelay : 100
            })
        })
        .catch(error => {
            console.log(error)

            notifications.updateSnackbarData({
                text       : error.data.value,
                color      : 'error',
                toggle     : true,
                timeout    : 6000,
                variant    : 'elevated',
                location   : 'top',
                multiLine  : false,
                closeDelay : 100
            })
        })
        .finally(() => {
            loading.value = false
        })
    })

</script>

<style scoped>

</style>
