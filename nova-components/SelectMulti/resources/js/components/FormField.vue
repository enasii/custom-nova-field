<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div>
                <multiselect
                    v-model="selected"
                    :options="options"
                    multiple="true">
                </multiselect>
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import 'vue-multi-select/dist/lib/vue-multi-select.css';
import Multiselect from 'vue-multiselect'
export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],
    components: { Multiselect },
    data () {
        return {
            selected: null,
            // options: ['options1', 'options2', 'options3']
        }
    },
    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },
}
</script>
