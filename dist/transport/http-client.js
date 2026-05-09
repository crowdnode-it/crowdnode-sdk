"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    constructor(baseUrl, getToken) {
        this.instance = axios_1.default.create({
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
    async get(url, config) {
        const response = await this.instance.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.instance.post(url, data, config);
        return response.data;
    }
}
exports.HttpClient = HttpClient;
