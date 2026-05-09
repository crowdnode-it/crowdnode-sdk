/**
 */
export interface StartupStorage {
    id: number;
    legal_name: string;
    owner_id: string;
    vault_address: string;
    created_at: Date;
}
/**
 */
export interface StartupLogic {
    id: string;
    name: string;
    ownerId: string;
    blockchainReady: boolean;
}
/**
 */
export interface StartupUI {
    id: string;
    name: string;
    isVerified: boolean;
    avatarUrl: string;
}
/**
 */
export interface StartupInput {
    name: string;
    description: string;
}
//# sourceMappingURL=startup.types.d.ts.map