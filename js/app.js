const missions = {
  basico: {
    title: "Nível básico — Recruta",
    description: "Sua primeira missão começou. Leia as pistas com atenção, observe a sequência dos LEDs e resolva o código final antes que o tempo termine."
  },
  medio: {
    title: "Nível médio — Especialista",
    description: "O sistema apresenta um desafio mais exigente. Observe os padrões, mantenha a calma e conclua as duas etapas dentro do tempo."
  },
  avancado: {
    title: "Nível avançado — Protocolo crítico",
    description: "Você chegou ao desafio mais difícil. Cada decisão importa: descubra a sequência e resolva o código final antes do fim da contagem."
  }
};

const dialog = document.querySelector("#mission-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const closeDialog = document.querySelector("#close-dialog");
const confirmMission = document.querySelector("#confirm-mission");
const toast = document.querySelector("#toast");
let selectedLevel = null;
let toastTimeout;

document.querySelectorAll("[data-level]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedLevel = button.dataset.level;
    const mission = missions[selectedLevel];
    dialogTitle.textContent = mission.title;
    dialogDescription.textContent = mission.description;
    dialog.showModal();
  });
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

confirmMission.addEventListener("click", () => {
  dialog.close();
  showToast("Missão selecionada! A integração com a ESP32 será adicionada depois.");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
