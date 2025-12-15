document.addEventListener("DOMContentLoaded", () => {
  // Mapa para nombres bonitos (opcional, si quieres que 'js' diga 'JavaScript')
  const langMap = {
    js: "JavaScript",
    ts: "TypeScript",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    py: "Python",
    php: "PHP",
    sql: "SQL",
    java: "Java"
  };

  // Icono SVG de copiar (Simple y elegante)
  const copyIcon = `
    <svg viewBox="0 0 24 24">
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
  `;

  const checkIcon = `
    <svg viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  `;

  // Seleccionar todos los PRE que son de Prism
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');

  codeBlocks.forEach((pre) => {
    // 1. Encontrar el tipo de lenguaje
    const codeClass = pre.className.match(/language-(\w+)/);
    const langKey = codeClass ? codeClass[1] : "Code";
    const langName = langMap[langKey] || langKey;

    // 2. Crear el Wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";

    // 3. Crear el Header
    const header = document.createElement("div");
    header.className = "code-header";

    // 4. Etiqueta del lenguaje
    const langSpan = document.createElement("span");
    langSpan.className = "code-language";
    langSpan.textContent = langName;

    // 5. Botón de Copiar
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.innerHTML = `${copyIcon} Copiar`;
    btn.title = "Copiar código";

    // Evento Copiar
    btn.addEventListener("click", () => {
      const code = pre.querySelector("code").innerText;

      navigator.clipboard.writeText(code).then(() => {
        // Feedback visual (Cambiar a Check)
        btn.innerHTML = `${checkIcon} ¡Copiado!`;

        setTimeout(() => {
          btn.innerHTML = `${copyIcon} Copiar`;
        }, 2000);
      });
    });

    // 6. Ensamblar todo
    header.appendChild(langSpan);
    header.appendChild(btn);

    // Insertar wrapper antes del pre actual
    pre.parentNode.insertBefore(wrapper, pre);

    // Mover el pre y el header dentro del wrapper
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
});