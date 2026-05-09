"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartupClient = void 0;
class StartupClient {
    constructor(api) {
        this.api = api;
    }
    // The Promise returns the "UI" type, not the "Storage" type
    async getStartup(id) {
        const response = await this.api.get(`/startups/${id}`);
        return response;
    }
    async create(data) {
        const response = await this.api.post('/startups', data);
        return response;
    }
}
exports.StartupClient = StartupClient;
