import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.error('putDb not implemented');
console.log('PUT to the database')

// Database connection that will be used // 
const jateDb = await openDB ('note', 1);

// Create a new transaction and specify the database //
const tx = jateDb.transaction(['note'], 'readwrite');

// Open up the desired object store //
const store = tx.objectStore('note');

// Use a method to update existing content //
const request = store.add({ content: content});

// Get confirmation of request //
const result = await request;
console.log('- data saved to the database', result);

};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { console.error('getDb not implemented');
console.log('GET from the database')

// Create a connection to the database //
const jateDb = await openDB('note', 1);

// Create a new transaction and specify the database and data priveleges //
const tx = jateDb.transaction (['note'], 'readonly');

// open up the object store //
const store = tc.objectStore('note');

// Use the .getAll() method to get all data in the database.
const request = store.getAll();

// Get request confirmation //
const result = await request;
console.log('result.value', result);
return result;
};


















initdb();
