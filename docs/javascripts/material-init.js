(function () {
  var config = JSON.parse(document.getElementById("__material_config").textContent);

  window.app = initialize({
    base: config.base,
    features: config.features,
    search: Object.assign({
      worker: config.searchWorker
    }, typeof search !== "undefined" && search)
  });
})();
