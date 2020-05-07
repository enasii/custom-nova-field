<?php

namespace ComponentVue\MultiSelect;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Field;

class MultiSelect extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'multi-select';
    public function option(array $options)
    {
        return $this->withMeta([
            'options' => $options
        ]);
    }
}
