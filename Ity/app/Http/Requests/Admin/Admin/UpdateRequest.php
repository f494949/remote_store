<?php

namespace App\Http\Requests\Admin\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $id = $this->post('id', 0);
        return [
            'id' => ['required', 'integer', Rule::exists('admins'),],
            'name' => ['required', 'string', Rule::unique('admins')->ignore($id), 'between:2,60'],
            'email' => ['required', 'string', 'email', Rule::unique('admins')->ignore($id), 'between:2,60'],
            'password' => ['nullable', 'string', 'between:6,60'],
            'status' => ['required', 'integer', Rule::in([0, 1])],
        ];
    }

    /**
     * 获取验证错误的自定义属性。
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'id' => __('message.admin.id'),
            'name' => __('message.admin.name'),
            'email' => __('validation.attributes.email'),
            'password' => __('validation.attributes.password'),
            'status' => __('message.admin.status'),
        ];
    }

    /**
     * 获取已定义验证规则的错误消息。
     *
     * @return array
     */
    public function messages(): array
    {
        return [

        ];
    }
}
