(function () {
    "use strict";

    var STORAGE_KEY = "flyqrcode_locale";
    var LOCALE_DIRS = { zh: "", en: "en", ja: "ja", ko: "ko", zhTW: "zh-tw" };
    var VALID_LOCALES = ["zh", "en", "ja", "ko", "zhTW"];
    var LOCALE_PATHS = ["en", "ja", "ko", "zh-tw"];
    var PAGES = ["index.html", "about.html", "contact.html", "privacy.html", "terms.html"];

    function currentLocaleDir() {
        var parts = location.pathname.split("/").filter(Boolean);
        if (!parts.length) return "";
        return LOCALE_PATHS.indexOf(parts[0]) !== -1 ? parts[0] : "";
    }

    function currentPageFile() {
        var parts = location.pathname.split("/").filter(Boolean);
        if (!parts.length) return "index.html";
        var last = parts[parts.length - 1];
        if (LOCALE_PATHS.indexOf(last) !== -1) return "index.html";
        return last.indexOf(".html") !== -1 ? last : "index.html";
    }

    function detectBrowserLocale() {
        var langs =
            navigator.languages && navigator.languages.length
                ? navigator.languages
                : [navigator.language || "en"];
        for (var i = 0; i < langs.length; i++) {
            var nav = (langs[i] || "").toLowerCase();
            if (nav.indexOf("zh-tw") === 0 || nav.indexOf("zh-hk") === 0 || nav.indexOf("zh-hant") === 0) {
                return "zhTW";
            }
            if (nav.indexOf("zh") === 0) return "zh";
            if (nav.indexOf("ja") === 0) return "ja";
            if (nav.indexOf("ko") === 0) return "ko";
            if (nav.indexOf("en") === 0) return "en";
        }
        return "en";
    }

    function preferredLocale() {
        try {
            var stored = localStorage.getItem(STORAGE_KEY);
            if (stored && VALID_LOCALES.indexOf(stored) !== -1) return stored;
        } catch (e) {
            /* ignore */
        }
        return detectBrowserLocale();
    }

    function buildUrl(localeKey, file) {
        var dir = LOCALE_DIRS[localeKey];
        var path = dir ? "/" + dir + "/" : "/";
        if (file !== "index.html") {
            path = (dir ? "/" + dir + "/" : "/") + file;
        }
        return location.origin + path + location.search + location.hash;
    }

    function normalizePath(pathname) {
        var p = pathname.replace(/\/$/, "");
        return p || "/";
    }

    if (currentLocaleDir() !== "") return;

    var page = currentPageFile();
    if (PAGES.indexOf(page) === -1) return;

    var target = preferredLocale();
    if (!LOCALE_DIRS.hasOwnProperty(target) || LOCALE_DIRS[target] === "") return;

    var dest = buildUrl(target, page);
    if (normalizePath(new URL(dest).pathname) !== normalizePath(location.pathname)) {
        location.replace(dest);
    }
})();
