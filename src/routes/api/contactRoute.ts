import Joi from 'joi';
import { Router } from 'express';
import { getAll, getOne, create, update, remove } from '../../controllers/api/contactController.ts';
import validate from '../../middleware/validationMiddleware.ts';
import validateString from '../../validations/string.ts';
import validateEmail from '../../validations/email.ts';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post(
	'/',
	validate(
		Joi.object({
			name: validateString('Name', true, 3, 50),
			email: validateEmail('Email', true),
			message: validateString('Message', true),
		})
	),
	create
);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
