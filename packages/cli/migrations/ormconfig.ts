import * as path from 'path';
import { UserSettings } from 'n8n-core';
import { entities } from '../src/databases/entities';

module.exports = [
    {
        "name": "sqlite",
        "type": "sqlite",
        "logging": true,
        "entities": Object.values(entities),
        "database": path.join(UserSettings.getUserN8nFolderPath(), 'database.sqlite'),
        "migrations": [
           "./src/databases/sqlite/migrations/*.ts",
        ],
        "subscribers": [
            "./src/databases/sqlite/subscribers/*.ts",
        ],
        "cli": {
           "entitiesDir": "./src/databases/entities",
           "migrationsDir": "./src/databases/sqlite/migrations",
           "subscribersDir": "./src/databases/sqlite/subscribers",
        },
    },
    {
        "name": "postgres",
        "type": "postgres",
        "logging": false,
        "host": "localhost",
        "username": "postgres",
        "password": "",
        "port": 5432,
        "database": "n8n",
        "schema": "public",
        "entities": Object.values(entities),
        "migrations": [
           "./src/databases/postgresdb/migrations/*.ts",
        ],
        "subscribers": [
           "src/subscriber/**/*.ts",
        ],
        "cli": {
           "entitiesDir": "./src/databases/entities",
           "migrationsDir": "./src/databases/postgresdb/migrations",
           "subscribersDir": "./src/databases/postgresdb/subscribers",
        },
    },
    {
        "name": "mysql",
        "type": "mysql",
        "database": "n8n",
        "username": "root",
        "password": "password",
        "host": "localhost",
        "port": "3306",
        "logging": false,
        "entities": Object.values(entities),
        "migrations": [
           "./src/databases/mysqldb/migrations/*.ts",
        ],
        "subscribers": [
           "src/subscriber/**/*.ts",
        ],
        "cli": {
           "entitiesDir": "./src/databases/entities",
           "migrationsDir": "./src/databases/mysqldb/migrations",
           "subscribersDir": "./src/databases/mysqldb/Subscribers",
        },
    },
        {
        "name": "mariadb",
        "type": "mariadb",
        "database": "n8n",
        "username": "root",
        "password": "password",
        "host": "localhost",
        "port": "3306",
        "logging": false,
        "entities": Object.values(entities),
        "migrations": [
           "./src/databases/mysqldb/migrations/*.ts",
        ],
        "subscribers": [
           "src/subscriber/**/*.ts",
        ],
        "cli": {
           "entitiesDir": "./src/databases/entities",
           "migrationsDir": "./src/databases/mysqldb/migrations",
           "subscribersDir": "./src/databases/mysqldb/Subscribers",
        },
    },
];
