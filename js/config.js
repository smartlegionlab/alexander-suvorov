const CONFIG = {
    ZENODO: {
        RECORDS: {
            POINTER_PARADIGM: '17204738',
            LOCAL_DATA_PARADIGM: '17264327',
            DETERMINISTIC_ENGINE: '17383447'
        },
        CACHE_TTL: 60 * 60 * 1000,
        CACHE_KEY: 'zenodo_stats_cache'
    },

    SCROLL_OFFSET: 80,

    COUNTERS: {
        RESEARCH_STATS: {
            pointerParadigm: {
                unique_views: 211,
                unique_downloads: 193,
                total_views: 400,
                total_downloads: 420
            },
            localDataParadigm: {
                unique_views: 129,
                unique_downloads: 121,
                total_views: 197,
                total_downloads: 211
            },
            deterministicEngine: {
                unique_views: 45,
                unique_downloads: 29,
                total_views: 79,
                total_downloads: 75
            }
        }
    }
};