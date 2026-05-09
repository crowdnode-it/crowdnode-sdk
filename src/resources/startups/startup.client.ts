import { HttpClient } from '../../transport/http-client';
import { StartupUI, StartupInput } from './startup.types';

export class StartupClient {
  constructor(private api: HttpClient) {}

  // The Promise returns the "UI" type, not the "Storage" type
  async getStartup(id: string): Promise<StartupUI> {
    const response = await this.api.get<StartupUI>(`/startups/${id}`);
    return response;
  }

  async create(data: StartupInput): Promise<StartupUI> {
    const response = await this.api.post<StartupUI>('/startups', data);
    return response;
  }
}