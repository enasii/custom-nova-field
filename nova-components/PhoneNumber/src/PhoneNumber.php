<?php

namespace Phone\PhoneNumber;

use Laravel\Nova\Fields\Field;

class PhoneNumber extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'phone-number';
}
