import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  private instance: AxiosInstance;

  constructor(baseUrl: string, getToken?: () => string | null) {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });

    // Automatically attach Auth Token if available (for Expo/Mobile)
    if (getToken) {
      this.instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
    }
  }

  // Generic methods that the Resource Clients will use
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }
}