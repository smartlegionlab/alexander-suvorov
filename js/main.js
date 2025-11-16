class PortfolioApp {
    constructor() {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    }

    async init() {
        await this.executeLoadingPipeline();
    }

    async executeLoadingPipeline() {
        try {
            await this.loadCoreFunctionality();
            await this.loadVisualEffects();
            this.initFixedNavigation();

            console.log('✅ Academic portfolio loaded successfully');
        } catch (error) {
            console.error('Error in loading pipeline:', error);
        }
    }

    async loadCoreFunctionality() {
        this.scrollManager = new ScrollManager();
        this.scrollManager.init();

        this.progressNav = new VerticalProgressNav();
        this.citationManager = new CitationManager();
        this.statsManager = new StatsManager();
        this.zenodoManager = new ZenodoManager(this.statsManager);

        setTimeout(() => {
            this.zenodoManager.loadStats();
        }, 1000);

        console.log('✅ Core academic functionality loaded');
    }

    async loadVisualEffects() {
        this.particleBg = new ParticleBackground();
        this.animationManager = new PriorityAnimationManager();
        this.animationManager.initImmediate();
        this.setupTimelineHandlers();
        console.log('✅ Visual effects loaded');
    }

    initFixedNavigation() {
        const updateNavigation = () => {
            const sections = document.querySelectorAll('.content-section, .enhanced-header');
            const desktopLinks = document.querySelectorAll('.fixed-nav-btn');
            const mobileLinks = document.querySelectorAll('.mobile-nav-btn');
            
            let currentSection = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
                
                if (sectionId === 'contact' && 
                    scrollPosition + window.innerHeight >= document.body.scrollHeight - 100) {
                    currentSection = 'contact';
                }
            });
            
            if (!currentSection && sections.length > 0) {
                currentSection = sections[0].getAttribute('id');
            }
            
            desktopLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === currentSection) {
                    link.classList.add('active');
                }
            });
            
            mobileLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === currentSection) {
                    link.classList.add('active');
                }
            });
            
        };

        window.addEventListener('scroll', updateNavigation);
        window.addEventListener('resize', updateNavigation);
        updateNavigation();
        
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

document.addEventListener('DOMContentLoaded', async () => {
    document.body.style.opacity = '0';

    const app = new PortfolioApp();
    window.portfolioApp = app;
    await app.init();

    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});