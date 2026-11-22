/* 发版时改这一处，并同步根目录 version.json。 */
window.NEO_VERSION = "0.4.99";

(function applyNeoVersion() {
  var raw = window.NEO_VERSION || "";
  var label = raw ? (raw.charAt(0) === "v" ? raw : "v" + raw) : "";
  if (!label) return;
  var fill = function () {
    var nodes = document.querySelectorAll("[data-neo-version]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = label;
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fill);
  } else {
    fill();
  }
})();
