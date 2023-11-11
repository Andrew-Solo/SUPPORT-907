export class Client {
  constructor(host: string) {
    this.host = host;
  }

  // users = () => new ResourceProvider<UserData>(this.host, `users`);

  host: string;
}

