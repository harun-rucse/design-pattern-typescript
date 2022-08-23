export class Database {
	private static instance: Database;

	private constructor() {}

	public static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}

	public connect(url: string): void {
		console.log(`Connected to ${url} database`);
	}
}
