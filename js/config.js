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
                unique_views: 253,
                unique_downloads: 237,
                total_views: 463,
                total_downloads: 492
            },
            localDataParadigm: {
                unique_views: 160,
                unique_downloads: 153,
                total_views: 241,
                total_downloads: 259
            },
            deterministicEngine: {
                unique_views: 73,
                unique_downloads: 63,
                total_views: 119,
                total_downloads: 125
            },
            pchParadigm: {
                unique_views: 15,
                unique_downloads: 9,
                total_views: 30,
                total_downloads: 28
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