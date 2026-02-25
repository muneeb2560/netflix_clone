export interface UserProfile {
    user_id: string;
    email: string;
    profiles: { id: string; name: string; avatar?: string }[];
    parental_controls?: boolean;
    language?: string;
    region?: string;
    preferences?: Record<string, any>;
}
