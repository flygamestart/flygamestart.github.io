(function () {
    var STORAGE_KEY = "flyqrcode_locale";
    var DIR_TO_LOCALE = { "": "zh", en: "en", "zh-tw": "zhTW", ja: "ja", ko: "ko" };

    var LOCALES = [
        { dir: "", label: "简体中文", hreflang: "zh-CN" },
        { dir: "en", label: "English", hreflang: "en" },
        { dir: "zh-tw", label: "繁體中文", hreflang: "zh-TW" },
        { dir: "ja", label: "日本語", hreflang: "ja" },
        { dir: "ko", label: "한국어", hreflang: "ko" },
    ];

    function currentPageFile() {
        var parts = window.location.pathname.split("/").filter(Boolean);
        if (parts.length === 0) return "index.html";
        var last = parts[parts.length - 1];
        if (last === "en" || last === "ja" || last === "ko" || last === "zh-tw") return "index.html";
        return last.indexOf(".html") !== -1 ? last : "index.html";
    }

    function currentLocaleDir() {
        var parts = window.location.pathname.split("/").filter(Boolean);
        if (parts.length === 0) return "";
        var first = parts[0];
        if (first === "en" || first === "ja" || first === "ko" || first === "zh-tw") return first;
        return "";
    }

    function targetUrl(localeDir, file) {
        if (!localeDir) return file === "index.html" ? "./index.html" : "./" + file;
        return file === "index.html" ? "./" + localeDir + "/index.html" : "./" + localeDir + "/" + file;
    }

    document.querySelectorAll("[data-lang-switch]").forEach(function (host) {
        var file = currentPageFile();
        var currentDir = currentLocaleDir();
        var select = document.createElement("select");
        select.className = "lang-select";
        select.setAttribute("aria-label", "Language");

        LOCALES.forEach(function (loc) {
            var opt = document.createElement("option");
            opt.value = targetUrl(loc.dir, file);
            opt.textContent = loc.label;
            opt.selected = loc.dir === currentDir;
            select.appendChild(opt);
        });

        select.addEventListener("change", function () {
            var chosen = LOCALES.find(function (loc) {
                return targetUrl(loc.dir, file) === select.value;
            });
            if (chosen) {
                try {
                    localStorage.setItem(STORAGE_KEY, DIR_TO_LOCALE[chosen.dir]);
                } catch (e) {
                    /* ignore */
                }
            }
            if (select.value) window.location.href = select.value;
        });

        host.appendChild(select);
    });
})();
