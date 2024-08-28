import { Client, Account } from 'appwrite';

export const client = new Client();

client
    // .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '') // Your Appwrite endpoint
    // .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''); // Your Appwrite project ID
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ce5eda002466996ed3'); // todo: environment extraction
  
export const account = new Account(client);
export { ID } from 'appwrite';

