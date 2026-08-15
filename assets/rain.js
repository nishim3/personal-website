(function () {
  const canvas = document.getElementById("rain");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const GLYPHS = "アカサタナハマヤラワ0123456789ABCDEFXZ<>*+-=";
  const FONT_SIZE = 16;
  let columns, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / FONT_SIZE);
    // Stagger start positions so the rain doesn't fall in a straight line
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
  }
  resize();
  window.addEventListener("resize", resize);

  function draw() {
    // Translucent black fill creates the fading trails
    ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = FONT_SIZE + "px monospace";

    for (let c = 0; c < columns; c++) {
      const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      const x = c * FONT_SIZE;
      const y = drops[c] * FONT_SIZE;

      // Bright head, dimmer body handled by the fade fill
      ctx.fillStyle = Math.random() > 0.975 ? "#d4ffd9" : "#00ff41";
      ctx.fillText(glyph, x, y);

      if (y > canvas.height && Math.random() > 0.975) drops[c] = 0;
      drops[c]++;
    }
  }
  setInterval(draw, 50);
})();
