import {Bot, BotStats, getBotsOptions, YopSDKOptions} from "./types/types";
import axios from "axios";
import {Request, Response} from "express";

export default class YopSDK {
    private options: YopSDKOptions;
    private readonly siteUrl: string;
    private readonly apiBaseUrl: string;
    public readonly apiToken: string;
    public readonly botId: string;

    /**
     * YopSDK constructor
     * @param options {YopSDKOptions} SDK options
     */
    constructor(options: YopSDKOptions) {
        this.options = options;

        this.siteUrl = "https://www.yopbotlist.me";
        this.apiBaseUrl = `${this.siteUrl}/api`;

        this.apiToken = options.apiToken;
        this.botId = options.botId;
    }

    /**
     * Request to YopBotList API
     * @param method {string} HTTP method
     * @param endpoint {string} API endpoint
     * @param body {object} Request body
     * @private
     */
    public async apiRequest(method: string, endpoint: string, body?: any): Promise<any> {
        const url = `${this.apiBaseUrl}${endpoint}`;

        const headers = {
            "Authorization": this.apiToken,
            "Content-Type": "application/json"
        }

        const response = await axios({
            method: method,
            url: url,
            headers: headers,
            data: body
        });

        if (response.status !== 200) throw new Error(response.data.error);

        return response.data;
    }

    /**
     * Get bots from YopBotList
     * @param options {getBotsOptions} Get bots options
     */
    public async getBots(options?: getBotsOptions): Promise<Bot[]> {
        throw new Error("Not implemented");
    }

    /**
     * Get bot from YopBotList by bot ID provided in the constructor
     */
    public async getBot(): Promise<Bot> {
        return await this.apiRequest("GET", `/bots/${this.botId}`);
    }

    /**
     * Update bot stats on YopBotList
     * @param stats {BotStats} Bot stats
     */
    public async postStats(stats: BotStats) {
        return await this.apiRequest("POST", `/bots/${this.botId}/stats`, stats);
    }

    /**
     * Handle vote webhook from YopBotList
     * @param req
     * @param res
     * @param callback
     */
    public async middleware(req: Request, res: Response, callback: (botId: string, userId: string) => void): Promise<any> {
        throw new Error("Not implemented");
        // if (req.method !== "POST") return res.status(405).json({error: "Method not allowed"});
        //
        //         const { botId, userId } = req.body;
        //
        //         if (!botId || !userId) return res.status(400).json({error: "Bad request"});
        //
        //         await callback(botId, userId);
        //
        //         await res.status(200).json({success: true});
    }
}