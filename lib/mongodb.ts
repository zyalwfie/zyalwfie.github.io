import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
	console.warn(
		'No MongoDB connection URI found. Set MONGODB_URI or MONGODB_PASSWORD in the environment.',
	);
}

declare global {
	var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient> | undefined;

if (!uri) {
	client = new MongoClient('');
	clientPromise = undefined;
} else {
	client = new MongoClient(uri, {});

	if (process.env.NODE_ENV === 'development') {
		if (!global._mongoClientPromise) {
			global._mongoClientPromise = client.connect();
		}
		clientPromise = global._mongoClientPromise;
	} else {
		clientPromise = client.connect();
	}
}

export async function getMongoClient(): Promise<MongoClient> {
	if (!clientPromise) {
		throw new Error(
			'MongoDB client is not configured. Set MONGODB_URI or MONGODB_PASSWORD in the environment.',
		);
	}
	return clientPromise;
}

export async function getDb(dbName = 'wafy_portfolio') {
	const c = await getMongoClient();
	return c.db(dbName);
}

export default getDb;
