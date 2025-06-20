// Animação suave ao rolar (scroll reveal com delay automático)
const observer = new IntersectionObserver((entries) => {
  let delay = 0;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.style.transitionDelay = `${delay}ms`;
      delay += 100;
      observer.unobserve(entry.target); // Para não repetir a animação
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Rolagem suave para a seção de jogos
const jogarAgoraBtn = document.querySelector(".cta-button");

if (jogarAgoraBtn) {
  jogarAgoraBtn.addEventListener("click", (e) => {
    if (jogarAgoraBtn.getAttribute("href") === "#") {
      e.preventDefault();
      document.querySelector(".games").scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Clique nos cards dos jogos
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(card => {
  card.addEventListener("click", () => {
    const gameName = card.querySelector("p").textContent.trim();
    alert(`🎮 Você clicou no jogo: ${gameName}\n\n(Faça seu Cadastro e Deposite para os Jogos Funcionarem)`);
  });
});
