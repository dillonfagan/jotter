let settings = {
    dark: false
}

function load() {
    if (!localStorage.settings) {
        localStorage.settings = JSON.stringify(settings);
        return settings;
    }

    settings = JSON.parse(localStorage.settings);
    if (settings.dark)
        document.querySelector('html').classList.add('dark');
    return settings;
}

function dump(s) {
    localStorage.settings = JSON.stringify(s);
}

export default {
    settings,
    load,
    dump
}