"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdnodeSDK = void 0;
const http_client_1 = require("./transport/http-client");
const startup_client_1 = require("./resources/startups/startup.client");
// 1. Export all the types so the Frontend/Backend can use them
__exportStar(require("./resources/startups/startup.types"), exports);
class CrowdnodeSDK {
    constructor(config) {
        // Initialize the Engine
        this.http = new http_client_1.HttpClient(config.baseUrl, config.getToken);
        // Initialize the Resource Clients
        this.startups = new startup_client_1.StartupClient(this.http);
    }
}
exports.CrowdnodeSDK = CrowdnodeSDK;
