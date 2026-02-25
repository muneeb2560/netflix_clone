export interface Content {
    id: string;
    title: string;
    synopsis?: string;
    genre?: string[];
    language?: string;
    duration?: number;
    release_date?: string;
    poster_url?: string;
    trailer_url?: string;
    drm_required?: boolean;
    available_regions?: string[];
    license_expiry?: string;
    encoding_profiles?: string[];
}
