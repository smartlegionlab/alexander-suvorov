class Utils {
    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static formatCacheTime(ms) {
        if (ms < 60000) {
            return `${Math.round(ms / 1000)} seconds`;
        } else if (ms < 3600000) {
            return `${Math.round(ms / 60000)} minutes`;
        } else if (ms < 86400000) {
            return `${Math.round(ms / 3600000)} hours`;
        } else {
            return `${Math.round(ms / 86400000)} days`;
        }
    }
}