/**
 * PrismJS Toolbar Enhancement
 * Adds a header with language name and copy-to-clipboard button
 */
(function () {
  const langMap = {
    js: "JavaScript",
    ts: "TypeScript",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    py: "Python",
    php: "PHP",
    sql: "SQL",
    java: "Java",
    bash: "Bash",
    json: "JSON",
    treeview: "Treeview",
  };

  const copyIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
  const checkIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  function initToolbar() {
    const codeBlocks = document.querySelectorAll('pre[class*="language-"]');

    codeBlocks.forEach((pre) => {
      // Prevent double wrapping
      if (pre.parentElement.classList.contains("code-wrapper")) return;

      const codeClass = pre.className.match(/language-(\w+)/);
      const langKey = codeClass ? codeClass[1] : "Code";
      const langName = langMap[langKey] || langKey;

      const wrapper = document.createElement("div");
      wrapper.className = "code-wrapper";

      const header = document.createElement("div");
      header.className = "code-header";

      const langSpan = document.createElement("span");
      langSpan.className = "code-language";
      langSpan.textContent = langName;

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.innerHTML = `${copyIcon} <span>Copiar</span>`;
      btn.title = "Copiar al portapapeles";

      btn.addEventListener("click", () => {
        const codeElement = pre.querySelector("code");
        if (!codeElement) return;

        const code = codeElement.innerText;

        navigator.clipboard.writeText(code).then(() => {
          btn.classList.add("copied");
          btn.innerHTML = `${checkIcon} <span>¡Copiado!</span>`;

          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `${copyIcon} <span>Copiar</span>`;
          }, 2000);
        });
      });

      header.appendChild(langSpan);
      header.appendChild(btn);

      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }

  // Expose to global scope for dynamic content
  window.PrismToolbar = { init: initToolbar };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToolbar);
  } else {
    initToolbar();
  }
})();