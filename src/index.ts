import { HttpClient } from './transport/http-client';
import { StartupClient } from './resources/startups/startup.client';

// 1. Export all the types so the Frontend/Backend can use them
export * from './resources/startups/startup.types';

// 2. The Main SDK Class
interface SDKConfig {
  baseUrl: string;
  getToken?: () => string | null;
}

export class CrowdnodeSDK {
  public startups: StartupClient;
  private http: HttpClient;

  constructor(config: SDKConfig) {
    // Initialize the Engine
    this.http = new HttpClient(config.baseUrl, config.getToken);

    // Initialize the Resource Clients
    this.startups = new StartupClient(this.http);
  }
}