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

    COUNTERS: {
        RESEARCH_STATS: {
            pointerParadigm: {
                unique_views: 218,
                unique_downloads: 200,
                total_views: 410,
                total_downloads: 431
            },
            localDataParadigm: {
                unique_views: 134,
                unique_downloads: 128,
                total_views: 205,
                total_downloads: 222
            },
            deterministicEngine: {
                unique_views: 51,
                unique_downloads: 37,
                total_views: 87,
                total_downloads: 85
            }
        }
    }
};