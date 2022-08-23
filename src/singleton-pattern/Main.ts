import { Database } from './Database';

export class Main {
	public static main(): void {
		const db = Database.getInstance();
		db.connect('mongodb://localhost:27017/university');

		return;
	}
}
