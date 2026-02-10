const CONFIG = {
    ZENODO: {
        RECORDS: {
            POINTER_PARADIGM: '17204738',
            LOCAL_DATA_PARADIGM: '17264327',
            DETERMINISTIC_ENGINE: '17383447',
            PCH_PARADIGM: '17614888'
        },
        CACHE_TTL: 60 * 60 * 1000,
        CACHE_KEY: 'zenodo_stats_cache'
    },

    COUNTERS: {
        RESEARCH_STATS: {
            pointerParadigm: {
                unique_views: 329,
                unique_downloads: 300,
                total_views: 543,
                total_downloads: 586
            },
            localDataParadigm: {
                unique_views: 232,
                unique_downloads: 212,
                total_views: 314,
                total_downloads: 337
            },
            deterministicEngine: {
                unique_views: 146,
                unique_downloads: 126,
                total_views: 198,
                total_downloads: 216
            },
            pchParadigm: {
                unique_views: 82,
                unique_downloads: 83,
                total_views: 106,
                total_downloads: 137
            }
        }
    },
    HEADER_COUNTERS: {
        headerProjects: 4,
        headerParadigms: 3
    },
    METRICS_COUNTERS: {
        metricProjects: 4,
        metricParadigms: 3
    }
};