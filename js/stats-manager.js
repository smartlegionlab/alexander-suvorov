class StatsManager {
    constructor() {
        this.initializeFromCacheOrConfig();
    }

    initializeFromCacheOrConfig() {
        const cachedStats = ZenodoCache.getCachedStats();
        if (cachedStats) {
            console.log('📦 StatsManager: Initializing from Zenodo cache');
            this.updateAllStats(cachedStats);
        } else {
            console.log('⚡ StatsManager: Initializing from config');
            this.updateAllStats(CONFIG.COUNTERS.RESEARCH_STATS);
        }
    }

    updateAllStats(stats) {
        this.updateParadigmStats('pointer', stats.pointerParadigm);
        this.updateParadigmStats('localdata', stats.localDataParadigm);
        this.updateParadigmStats('engine', stats.deterministicEngine);
        this.updateHeaderStats(stats);
        this.updateMetricsStats(stats);
    }

    updateParadigmStats(prefix, stats) {
        const viewsElement = document.getElementById(`${prefix}-views`);
        const downloadsElement = document.getElementById(`${prefix}-downloads`);

        if (viewsElement) {
            viewsElement.innerHTML = `${stats.unique_views}<span class="text-primary" style="opacity: 0.7;">/${stats.total_views}</span>`;
        }
        if (downloadsElement) {
            downloadsElement.innerHTML = `${stats.unique_downloads}<span class="text-primary" style="opacity: 0.7;">/${stats.total_downloads}</span>`;
        }
    }

    updateHeaderStats(stats) {
        const totalUniqueDownloads = stats.pointerParadigm.unique_downloads +
                                   stats.localDataParadigm.unique_downloads +
                                   stats.deterministicEngine.unique_downloads;

        const totalUniqueViews = stats.pointerParadigm.unique_views +
                               stats.localDataParadigm.unique_views +
                               stats.deterministicEngine.unique_views;

        const headerDownloads = document.getElementById('header-downloads');
        const headerViews = document.getElementById('header-views');

        if (headerDownloads) headerDownloads.innerHTML = `${totalUniqueDownloads}+`;
        if (headerViews) headerViews.innerHTML = `${totalUniqueViews}+`;
    }

    updateMetricsStats(stats) {
        const totalUniqueDownloads = stats.pointerParadigm.unique_downloads +
                                   stats.localDataParadigm.unique_downloads +
                                   stats.deterministicEngine.unique_downloads;

        const totalDownloads = stats.pointerParadigm.total_downloads +
                             stats.localDataParadigm.total_downloads +
                             stats.deterministicEngine.total_downloads;

        const totalUniqueViews = stats.pointerParadigm.unique_views +
                               stats.localDataParadigm.unique_views +
                               stats.deterministicEngine.unique_views;

        const totalViews = stats.pointerParadigm.total_views +
                         stats.localDataParadigm.total_views +
                         stats.deterministicEngine.total_views;

        const metricDownloads = document.getElementById('metric-downloads');
        const totalMetricDownloads = document.getElementById('total-metric-downloads');
        const metricViews = document.getElementById('metric-views');
        const totalMetricViews = document.getElementById('total-metric-views');

        if (metricDownloads) metricDownloads.innerHTML = `${totalUniqueDownloads}+`;
        if (totalMetricDownloads) totalMetricDownloads.innerHTML = `${totalDownloads}+`;
        if (metricViews) metricViews.innerHTML = `${totalUniqueViews}+`;
        if (totalMetricViews) totalMetricViews.innerHTML = `${totalViews}+`;
    }

    updateFromZenodo(stats) {
        console.log('🔄 StatsManager: Updating from Zenodo data');
        this.updateAllStats(stats);
    }
}