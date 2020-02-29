import { createConnection, Connection } from 'typeorm';

class Database {
  constructor() {
    this.init();
  }

  private init(): Promise<Connection> {
    return createConnection();
  }
}

export default new Database();
