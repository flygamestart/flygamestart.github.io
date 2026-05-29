(function () {
    var STORAGE_KEY = "flyqrcode_cookie_consent";
    var banner = document.getElementById("cookie-consent");

    function getConsent() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (_err) {
            return null;
        }
    }

    function setConsent(value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (_err) {
            /* ignore */
        }
    }

    function hideBanner() {
        if (banner) banner.hidden = true;
    }

    function showBanner() {
        if (banner) banner.hidden = false;
    }

    function bind() {
        if (!banner) return;

        var acceptBtn = document.getElementById("cookie-accept");
        var rejectBtn = document.getElementById("cookie-reject");

        if (acceptBtn) {
            acceptBtn.addEventListener("click", function () {
                setConsent("accepted");
                hideBanner();
                document.dispatchEvent(new CustomEvent("flyqrcode:cookie-consent", { detail: { status: "accepted" } }));
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener("click", function () {
                setConsent("rejected");
                hideBanner();
                document.dispatchEvent(new CustomEvent("flyqrcode:cookie-consent", { detail: { status: "rejected" } }));
            });
        }
    }

    bind();

    if (!getConsent()) {
        showBanner();
    } else {
        hideBanner();
    }
})();
