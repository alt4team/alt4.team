import { Request, Response } from 'express';
import contact from '../../models/contactModel.ts';

export const getAll = async (req: Request, res: Response): Promise<void> => {
	try {
		const items = await contact.find();
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getOne = async (req: Request, res: Response): Promise<void> => {
	try {
		const item = await contact.findById(req.params.id);
		if (!item) {
			res.status(404).json({ error: 'Item not found' });
			return;
		}
		res.status(200).json(item);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		const item = new contact(req.body);
		await item.save();
		res.redirect('/');
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		const item = await contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!item) {
			res.status(404).json({ error: 'Item not found' });
			return;
		}
		res.status(200).json(item);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const remove = async (req: Request, res: Response): Promise<void> => {
	try {
		const item = await contact.findByIdAndDelete(req.params.id);
		if (!item) {
			res.status(404).json({ error: 'Item not found' });
			return;
		}
		res.status(200).json({ message: 'Item deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
