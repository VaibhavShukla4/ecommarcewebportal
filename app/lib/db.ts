const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = process.env;

if (!DB_USERNAME || !DB_PASSWORD || !DB_CLUSTER) {
  throw new Error("Please define the DB_USERNAME, DB_PASSWORD, and DB_CLUSTER environment variables.");
}

export  const MONGODB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/yourDatabaseName?retryWrites=true&w=majority`;

