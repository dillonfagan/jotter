let settings = {
    _dark: false,
}

export function loadSettings() {
    if (!localStorage.settings) {
        localStorage.settings = JSON.stringify(settings);
        return;
    }
    
    settings = JSON.parse(localStorage.settings);
    if (settings._dark)
        document.querySelector('html').classList.add('dark');
}

function save() {
    console.log('Saving settings...');
    localStorage.settings = JSON.stringify(settings);
}

export default {
    get dark() {
        return settings._dark;
    },
    set dark(val) {
        settings._dark = val;
        if (settings._dark === true)
            document.querySelector('html').classList.add('dark');
        else
            document.querySelector('html').classList.remove('dark');
        save();
    }
}