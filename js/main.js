class PriorityAnimationManager {

    initImmediate() {
        console.log('PriorityAnimationManager disabled for multi-page mode');
    }
}

class PortfolioApp {
    constructor() {
        this.statsManager = new StatsManager();
    }

    async init() {
        this.setupTimelineHandlers();
        console.log('✅ Portfolio loaded');
    }

    setupTimelineHandlers() {
        const timelineIds = ['playTimelinePointer', 'playTimelineLocalData', 'playTimelineEngine'];
        timelineIds.forEach(id => {
            document.getElementById(id)?.addEventListener('click', function() {
                const container = this.closest('.paradigm-timeline');
                const items = container.querySelectorAll('.timeline-item');
                items.forEach(item => item.classList.remove('active'));
                items.forEach((item, index) => {
                    setTimeout(() => item.classList.add('active'), index * 600);
                });
            });
        });
    }
}

window.addEventListener('load', () => {
    const app = new PortfolioApp();
    app.init();
});
