import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ce5eda002466996ed3'); // todo: environment extraction

export const account = new Account(client);
export { ID } from 'appwrite';