﻿window.getPreferredTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
