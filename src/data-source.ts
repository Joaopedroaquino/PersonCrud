import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'


const options: DataSourceOptions  = {
	type: 'postgres',
	host: 'localhost',
	port: 5437,
	username: 'root',
	password: 'root',
	database: 'root',
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
}

export const AppDataSource = new DataSource(options)