<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div id="app" class="container">
                <h2>Test Multiple Select as Checkbox </h2>
                <div class="form-group">
                    <div class="form-check">
                        <label for="joe" class="form-check-label">
                            <input type="checkbox"
                                   id="joe"
                                   class="form-check-input"
                                   value="joe"
                                   v-model="checkedNames" />
                            opetion 1
                        </label>
                    </div>
                    <div class="form-check">
                        <label for="jack" class="form-check-label">
                            <input type="checkbox"
                                   id="jack"
                                   class="form-check-input"
                                   value="jack"
                                   v-model="checkedNames" />
                            opetion 2
                        </label>
                    </div>
                    <div class="form-check">
                        <label for="Nick" class="form-check-label">
                            <input type="checkbox"
                                   id="nick"
                                   class="form-check-input"
                                   value="nick"
                                   v-model="checkedNames">
                            opetion 3
                        </label>
                    </div>
                </div>
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],
    data() {
        return {
            checkedNames: []
        }
    },
    methods: {
        send() {
            console.log(this.checkedNames.toString());
        },
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
