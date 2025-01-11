import mongoose, { Schema, Document } from 'mongoose';

export interface Icontact extends Document {
	_id: string;
	name: string;
	createdAt: Date;
}

const contactSchema: Schema = new Schema(
	{
		_id: { type: String, default: () => new mongoose.Types.ObjectId().toString() },
		name: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

export default mongoose.model<Icontact>('contact', contactSchema);
