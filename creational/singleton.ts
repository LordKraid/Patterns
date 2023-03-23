class ServerConnection {
  private static instance: ServerConnection;
  private host: string;
  private port: number;

  private constructor(host: string, port: number) {
      if (ServerConnection.instance) {
          console.log('Server is already connected!');
          return ServerConnection.instance;
      }

      this.host = host;
      this.port = port;

      ServerConnection.instance = this;
  }

  public static getInstance(host: string, port: number): ServerConnection {
      return ServerConnection.instance || new ServerConnection(host, port);
  }

  public connect(): void {
      console.log(`Server ${this.host} with port ${this.port} connected.`);
  }

  public disconnect(): void {
      console.log('Disconnected.');
  }
}

const server = ServerConnection.getInstance('google.com', 8080);
server.connect();
server.disconnect();

const server2 = ServerConnection.getInstance('mozilla.org', 7070);
server2.connect();

console.log(server === server2);
