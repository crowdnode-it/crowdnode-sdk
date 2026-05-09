import { StartupClient } from './resources/startups/startup.client';
export * from './resources/startups/startup.types';
interface SDKConfig {
    baseUrl: string;
    getToken?: () => string | null;
}
export declare class CrowdnodeSDK {
    startups: StartupClient;
    private http;
    constructor(config: SDKConfig);
}
//# sourceMappingURL=index.d.ts.map