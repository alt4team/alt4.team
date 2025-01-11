import Joi from 'joi';

const validateString = (fieldName: string, required = true, min?: number, max?: number) => {
	let schema = min && max ? Joi.string().min(min).max(max) : Joi.string();

	if (required) {
		const messages: any = {
			'string.base': `"${fieldName}" should be a type of text`,
			'string.empty': `"${fieldName}" cannot be empty`,
			'any.required': `"${fieldName}" is required`,
		};

		if (min && max) {
			messages['string.min'] = `"${fieldName}" should have at least ${min} characters`;
			messages['string.max'] = `"${fieldName}" should have at most ${max} characters`;
		}

		schema = schema.required().messages(messages);
	}

	return schema;
};

export default validateString;
