import { HttpClient } from '../../transport/http-client';
import { StartupUI, StartupInput } from './startup.types';
export declare class StartupClient {
    private api;
    constructor(api: HttpClient);
    getStartup(id: string): Promise<StartupUI>;
    create(data: StartupInput): Promise<StartupUI>;
}
//# sourceMappingURL=startup.client.d.ts.map