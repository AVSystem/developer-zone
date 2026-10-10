(function () {
  var config = JSON.parse(document.getElementById("__analytics_config").textContent);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", config.googleTag);

  if (config.googleAnalytics.length) {
    window.ga = window.ga || function () {
      (window.ga.q = window.ga.q || []).push(arguments);
    };
    window.ga.l = +new Date();
    window.ga("create", config.googleAnalytics[0], config.googleAnalytics[1]);
    window.ga("set", "anonymizeIp", true);
    window.ga("send", "pageview");

    document.addEventListener("DOMContentLoaded", function () {
      if (document.forms.search) {
        document.forms.search.query.addEventListener("blur", function () {
          if (this.value) {
            window.ga("send", "pageview", document.location.pathname + "?q=" + this.value);
          }
        });
      }
    });
    document.addEventListener("DOMContentSwitch", function () {
      window.ga("send", "pageview", document.location.pathname);
    });
  }
})();
