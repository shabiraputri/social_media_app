import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '66854531000c06da1880',
  databaseId: '6685483d001ec8b3d981',
  storageId: '6685480800390d275880',
  userCollectionId: '668548b3002fec989b06',
  postCollectionId: '6685487a00297666959f',
  savesCollectionId: '668548ca00397ce26fad',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
