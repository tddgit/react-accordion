interface Analitics {
    destroy(): void;

    getClicks(): string | number;
}

function createAnalytics(): Analitics {
    let counter = 0;
    let destroyed = false;

    const listener = () => {
        counter += 1;
        return counter;
    };

    document.addEventListener('click', listener);
    return {
        destroy() {
            document.removeEventListener('click', listener);
            destroyed = true;
        },
        getClicks() {
            if (destroyed) {
                return 'Analitics is destroyed';
            }
            return counter;
        },
    };
}

// @ts-ignore
window['analytics'] = createAnalytics();
