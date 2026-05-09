import { AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    private instance;
    constructor(baseUrl: string, getToken?: () => string | null);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}
//# sourceMappingURL=http-client.d.ts.map