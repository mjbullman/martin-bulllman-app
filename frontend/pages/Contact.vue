<template>

    <v-container>

        <v-row>

            <v-col cols="12" sm="12" md="12" lg="12" xl="12" align-self="center" class="pt-12 pb-12">

                <h1 class="text-h1 text-center font-weight-bold text-gradient-animation">

                    Contact

                </h1>

                <p class="mb-2">Hello there,</p>

                <p class="mb-2">
                    Thanks for dropping by! Whether you have questions, exciting opportunities, or just want to say hello,
                    I'm all ears. Feel free to reach out using the form below or connect with me on social media.
                </p>

                <p class="mb-2">
                    I'm ready to dive into projects, share ideas, or even have a virtual coffee chat.
                    Let's turn your thoughts into reality!
                </p>

                <p class="mb-2">
                    Looking forward to hearing from you,
                </p>

            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6" xl="4" align-self="center">

                <form @submit.prevent="submit">

                    <v-text-field
                        v-model="name.value.value"
                        :error-messages="name.errorMessage.value"
                        label="Name"
                        color="primary"
                        class="mb-3"
                        variant="outlined"
                        prepend-inner-icon="fa-regular fa-user">
                    </v-text-field>

                    <v-text-field
                        v-model="email.value.value"
                        :error-messages="email.errorMessage.value"
                        label="Email"
                        color="primary"
                        class="mb-3"
                        variant="outlined"
                        prepend-inner-icon="fa-regular fa-envelope">
                    </v-text-field>

                    <v-textarea
                        v-model="message.value.value"
                        :error-messages="message.errorMessage.value"
                        label="Message"
                        color="primary"
                        class="mb-3"
                        variant="outlined"
                        prepend-inner-icon="fa-regular fa-message">
                    </v-textarea>

                    <v-btn class="me-4" type="submit">

                        submit

                    </v-btn>

                    <v-btn @click="handleReset">

                      clear

                    </v-btn>

                </form>

            </v-col>

        </v-row>

    </v-container>

</template>

<script setup lang="ts">

    import { useField, useForm } from 'vee-validate';

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

    const submit = handleSubmit(values => {
        useFetch('http://localhost:8000/api/v1/test').then(resp => {
            console.log(resp.data.value)
        })
    })

</script>

<style scoped>

</style>
