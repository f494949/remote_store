<?php

namespace App\Http\Requests\Admin\User;

use App\Http\Requests\GetListRequest as CommonRequest;
use Illuminate\Foundation\Http\FormRequest;

class GetListRequest extends FormRequest
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
        return array_merge((new CommonRequest())->rules(), [
            'name' => ['nullable', 'string', 'between:1,60',],
        ]);
    }

    /**
     * 获取已定义验证规则的错误消息。
     *
     * @return array
     */
    public function attributes(): array
    {
        return array_merge((new CommonRequest())->attributes(), [
            'name' => __('message.user.name'),
        ]);
    }
}
