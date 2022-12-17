/**
 * SDK options
 */
export interface YopSDKOptions {
    /**
     * Your bot ID
     * @type {string}
     * @required
     */
    botId: string;
    /**
     * Your API token, you can get it from https://www.yopbotlist.me/bots/[botId]/edit
     * @type {string}
     * @required
     */
    apiToken: string;
}

/**
 * Get bots options
 */
export interface getBotsOptions {
    /**
     * The number of bots to get
     */
    limit?: number;
    /**
     * The number of bots to skip
     */
    offset?: number;
    /**
     * The field to sort by
     */
    sort?: string;
    /**
     * The sort order
     */
    order?: string;
    /**
     * The search query
     */
    search?: string;
    /**
     * Tags to filter by
     */
    tags?: string[];
    /**
     * Sort bots if they are verified
     */
    verified?: boolean;
    /**
     * Sort bots if they are checked
     */
    checked?: boolean;
    /**
     * Search bots by owner ID
     */
    ownerId?: string;
    /**
     * Search bots by bot ID
     */
    botId?: string;
}

/**
 * Bot stats to update
 */
export interface BotStats {
    /**
     * Bot server count
     * @type {number}
     * @required
     */
    serverCount: number;
    /**
     * Bot user count
     * @type {number}
     * @default 0
     */
    userCount?: number;
    /**
     * Bot shard count
     * @type {number}
     * @default 0
     */
    shardCount?: number;
}

/**
 * Bot object
 */
export interface Bot {
    /**
     * Bot ID
     * @type {string}
     */
    botId: string;
    /**
     * Bot prefix
     * @type {string}
     */
    prefix: string;
    /**
     * Bot owner ID
     * @type {string}
     */
    ownerId: string;
    /**
     * If the bot is verified
     * @type {boolean}
     * @default false
     */
    verified: boolean;
    /**
     * The bot support server invite
     * @type {string}
     */
    supportInvite: string;
    /**
     * The bot website URL
     * @type {string}
     */
    site: string;
    /**
     * The bot description
     * @type {string}
     */
    description: string;
    /**
     * The bot total votes
     * @type {number}
     */
    likes: number;
    /**
     * The bot last vote date
     * @type {string}
     */
    latestLikeDate: Date;
    /**
     * Bot team members IDs
     * @type {string[]}
     */
    team: string[];
    /**
     * If the verification team checked the bot
     * @type {boolean}
     * @default false
     */
    checked: boolean;
    /**
     * The bot avatar URL
     * @type {string}
     */
    avatar: string;
    /**
     * Bot username
     * @type {string}
     */
    username: string;
    /**
     * Bot server count
     * @type {number}
     */
    serverCount: number;
    /**
     * Bot user count
     * @type {number}
     */
    userCount: number;
    /**
     * Bot shard count
     * @type {number}
     */
    shardCount: number;
    /**
     * Date of the last stats update
     * @type {string}
     */
    latestStatsUpdate: Date;
    /**
     * Bot tags
     * @type {string[]}
     */
    tags: string[];
}