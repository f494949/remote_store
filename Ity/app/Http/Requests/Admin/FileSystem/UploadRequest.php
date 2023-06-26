<?php

namespace App\Http\Requests\Admin\FileSystem;

use App\Rules\ContinuousCharacter;
use App\Rules\Directory\ParentDirectory;
use App\Rules\EmojiChar;
use Illuminate\Foundation\Http\FormRequest;

class UploadRequest extends FormRequest
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
        return [
            'file' => ['required', 'file'],
            'directory' => [
                'required', 'string', 'between:1,60', new EmojiChar, new ParentDirectory, new ContinuousCharacter
            ],
            'name' => ['nullable', 'min:1', 'max:1023']
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
            'file' => __('message.file.file'),
            'directory' => __('message.file.directory'),
            'name' => __('message.file.name'),
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
