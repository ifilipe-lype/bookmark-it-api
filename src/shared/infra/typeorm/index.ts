import { createConnections } from 'typeorm';

export async function setupDBConnection() {
  return await createConnections();
}
