export const isMobile = () => {
    return 'ontouchstart' in document.documentElement && /mobi/i.test(navigator.userAgent);
};
