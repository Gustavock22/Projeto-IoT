# Projeto-IoT
# 💣 BOMBANANA — Projeto IoT

Um jogo interativo de enigmas no qual o jogador precisa resolver desafios antes que o tempo acabe. O projeto combina desenvolvimento web com componentes físicos controlados por ESP32, criando uma experiência inspirada em jogos de desarme de bombas.

## 🎯 Objetivo

Desenvolver um jogo que integre um site a um dispositivo físico por meio de comunicação Wi-Fi, utilizando enigmas, sequências de LEDs, teclado matricial e cronômetro.

## 🎮 Como funciona

1. O jogador acessa o site e escolhe um nível de dificuldade.
2. Uma história apresenta o contexto da missão.
3. Ao clicar em **Iniciar**, o cronômetro começa.
4. O jogador precisa descobrir a sequência correta de quatro LEDs: vermelho, verde, amarelo e azul, utilizando botões físicos.
5. Após acertar a sequência, o teclado matricial é liberado.
6. O jogador digita a senha do enigma no teclado físico.
7. Se concluir o desafio dentro do tempo, vence a partida. Caso contrário, o jogo termina com um alerta sonoro emitido pelo buzzer.

## 🕹️ Níveis de dificuldade

- 🟢 **Básico:** enigmas mais simples e maior tempo disponível.
- 🟡 **Médio:** desafios de lógica com tempo reduzido.
- 🔴 **Avançado:** enigmas mais complexos e menor margem para erros.

Os tempos e as regras de cada nível serão definidos durante o desenvolvimento.

## 🔌 Componentes físicos

O projeto utiliza duas placas ESP32, divididas conforme suas responsabilidades.

### ESP32 1 — Controle principal

- Quatro LEDs coloridos.
- Botões físicos para selecionar as cores.
- Teclado matricial.
- Buzzer para alertas sonoros.
- Controle da partida e do cronômetro.
- Comunicação com o site via Wi-Fi.

### ESP32 2 — Display

- LCD para exibir o tempo restante.
- Exibição do estado atual da partida.
- Comunicação com a ESP32 principal via Wi-Fi.

## 💻 Tecnologias

**Desenvolvimento web**

- HTML5
- CSS3
- JavaScript

**Sistemas embarcados**

- ESP32
- C com Arduino IDE

**Comunicação**

- Wi-Fi
- WebSocket, previsto para a comunicação entre o site e a ESP32 principal.

## 🎨 Identidade visual

O site terá um estilo escuro e tecnológico, inspirado em interfaces de jogos de suspense.

| Elemento           | Cor           | Código    |
| ------------------ | ------------- | --------- |
| Fundo principal    | Preto azulado | `#0B0F14` |
| Cards e caixas     | Cinza escuro  | `#161B22` |
| Botões principais  | Vermelho      | `#E31B23` |
| Textos principais  | Branco suave  | `#F5F5F5` |
| Textos secundários | Cinza         | `#9CA3AF` |

## 📁 Estrutura prevista

```text
bomb-defuse/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── game.js
│   └── esp32.js
├── assets/
│   └── images/
└── README.md
```

## 🚧 Status do projeto

**Em desenvolvimento.**

## 👥 Equipe

Projeto desenvolvido em equipe de seis integrantes, com responsabilidades distribuídas entre desenvolvimento web, programação das ESP32, montagem dos circuitos e testes.

## ⚠️ Segurança

O projeto utiliza uma bomba cenográfica para fins educacionais. Os efeitos de derrota são simulados por LEDs, display e buzzer, sem explosivos reais.

---

**BOMBANANA** — Pense rápido. Resolva o enigma. Vença o desafio.
