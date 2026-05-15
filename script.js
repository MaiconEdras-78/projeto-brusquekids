// ===== IMAGENS =====
// As imagens abaixo estão salvas em base64 para funcionar
// sem precisar de servidor (abre direto no navegador)
const IMG = {
  zoo: 'https://www.imobiliariaamo.com.br/upload/conteudo/35/2203151429267315-04.jpg',
  fenarreco: 'https://www.fenarreco.com.br/upload/secao/2025/07/brusque-02.jpg',
  parque: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRa46eTsRcNlDn_E7ncL55eyW3bFHpOebpw&s',
};

// ===== LISTA DE PERGUNTAS =====
// As alternativas corretas sempre têm índice 0 no array original
// Mas o embaralhamento vai misturar a ordem pra ninguém decorar!
const PERGUNTAS_ORIGINAIS = [
  {
    pergunta: "QUAL É O NOME DA NOSSA CIDADE?",
    alternativas: [
      { texto: "BRUSQUE", img: null, emoji: "🏙️" },
      { texto: "FLORIANÓPOLIS", img: null, emoji: "🌊" },
      { texto: "SÃO PAULO", img: null, emoji: "🌆" }
    ],
    correta: 0
  },
  {
    pergunta: "EM BRUSQUE ACONTECE UMA FESTA CHAMADA:",
    alternativas: [
      { texto: "FENARRECO", img: IMG.fenarreco, emoji: null },
      { texto: "CARNAVAL", img: null, emoji: "🎭" },
      { texto: "FESTA DO PIJAMA", img: null, emoji: "🛌" }
    ],
    correta: 0
  },
  {
    pergunta: "NA FENARRECO TEM MUITA:",
    alternativas: [
      { texto: "MÚSICA E DANÇA", img: null, emoji: "🎵" },
      { texto: "NEVE", img: null, emoji: "❄️" },
      { texto: "PRAIA", img: null, emoji: "🏖️" }
    ],
    correta: 0
  },
  {
    pergunta: "QUAL ANIMAL PODEMOS VER NO ZOOBOTÂNICO?",
    alternativas: [
      { texto: "MACACO", img: null, emoji: "🐒" },
      { texto: "DINOSSAURO", img: null, emoji: "🦕" },
      { texto: "DRAGÃO", img: null, emoji: "🐉" }
    ],
    correta: 0
  },
  {
    pergunta: "O QUE DEVEMOS FAZER COM OS ANIMAIS DO ZOOBOTÂNICO?",
    alternativas: [
      { texto: "RESPEITAR E CUIDAR", img: null, emoji: "💚" },
      { texto: "GRITAR", img: null, emoji: "😱" },
      { texto: "JOGAR LIXO", img: null, emoji: "🗑️" }
    ],
    correta: 0
  },
  {
    pergunta: "QUAL DESTES LUGARES É LEGAL PARA PASSEAR EM FAMÍLIA EM BRUSQUE?",
    alternativas: [
      { texto: "ZOOBOTÂNICO", img: IMG.zoo, emoji: null },
      { texto: "LAVA-RÁPIDO", img: null, emoji: "🚗" },
      { texto: "OFICINA", img: null, emoji: "🔧" }
    ],
    correta: 0
  },
  {
    pergunta: "QUAL ANIMAL FAZ \"QUÁ QUÁ\"?",
    alternativas: [
      { texto: "MARRECO", img: null, emoji: "🦆" },
      { texto: "LEÃO", img: null, emoji: "🦁" },
      { texto: "CAVALO", img: null, emoji: "🐴" }
    ],
    correta: 0
  },
  {
    pergunta: "O MARRECO É SÍMBOLO DE QUAL FESTA DE BRUSQUE?",
    alternativas: [
      { texto: "FENARRECO", img: IMG.fenarreco, emoji: null },
      { texto: "NATAL", img: null, emoji: "🎄" },
      { texto: "PÁSCOA", img: null, emoji: "🐣" }
    ],
    correta: 0
  },
  {
    pergunta: "EM BRUSQUE EXISTEM MUITAS:",
    alternativas: [
      { texto: "PRAÇAS E PARQUES", img: IMG.parque, emoji: null },
      { texto: "PIRÂMIDES", img: null, emoji: "🏔️" },
      { texto: "VULCÕES", img: null, emoji: "🌋" }
    ],
    correta: 0
  },
  {
    pergunta: "O QUE USAMOS QUANDO CHOVE EM BRUSQUE?",
    alternativas: [
      { texto: "GUARDA-CHUVA", img: null, emoji: "☂️" },
      { texto: "COLHER", img: null, emoji: "🥄" },
      { texto: "TRAVESSEIRO", img: null, emoji: "🛏️" }
    ],
    correta: 0
  },
  {
    pergunta: "QUAL COR LEMBRA AS ÁRVORES E A NATUREZA DOS PARQUES?",
    alternativas: [
      { texto: "VERDE", img: null, emoji: "🌿" },
      { texto: "ROSA", img: null, emoji: "🌸" },
      { texto: "PRETO", img: null, emoji: "⬛" }
    ],
    correta: 0
  },
  {
    pergunta: "O QUE DEVEMOS FAZER PARA DEIXAR BRUSQUE LIMPA?",
    alternativas: [
      { texto: "JOGAR LIXO NO LIXO", img: null, emoji: "♻️" },
      { texto: "SUJAR AS RUAS", img: null, emoji: "😤" },
      { texto: "RASGAR PLANTAS", img: null, emoji: "🌱" }
    ],
    correta: 0
  },
  {
    pergunta: "O QUE AS CRIANÇAS GOSTAM DE FAZER NO PARQUE?",
    alternativas: [
      { texto: "BRINCAR", img: null, emoji: "🛝" },
      { texto: "DORMIR NO CHÃO", img: null, emoji: "😴" },
      { texto: "DIRIGIR CARRO", img: null, emoji: "🚗" }
    ],
    correta: 0
  },
  {
    pergunta: "A FENARRECO É UMA FESTA DIVERTIDA PARA:",
    alternativas: [
      { texto: "AS FAMÍLIAS PASSEAREM", img: IMG.fenarreco, emoji: null },
      { texto: "NADAR NO MAR", img: null, emoji: "🏊" },
      { texto: "ANDAR DE AVIÃO", img: null, emoji: "✈️" }
    ],
    correta: 0
  },
  {
    pergunta: "O QUE DEIXA BRUSQUE ESPECIAL?",
    alternativas: [
      { texto: "SUA CULTURA, FESTAS E LUGARES LEGAIS", img: null, emoji: "🏅" },
      { texto: "OS DESERTOS", img: null, emoji: "🏜️" },
      { texto: "OS CASTELOS MEDIEVAIS", img: null, emoji: "🏰" }
    ],
    correta: 0
  }
];

// ===== VARIÁVEIS DO JOGO =====
let perguntas = [];
let perguntaAtual = 0;
let acertos = 0;
let pontos = 0;
let audioAtivo = true;
let nomeJogador = "";
let escolaJogador = "";
let idadeJogador = "";
let synth = window.speechSynthesis;
let respostaSelecionada = false; // controla se já confirmou (não se apenas clicou)
let alternativaEscolhida = -1;   // guarda qual alternativa está selecionada no momento

// ===== EMBARALHAR =====
// Mistura uma array de forma aleatória
function embaralhar(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Cria cópias das perguntas com as alternativas embaralhadas
function embaralharPerguntas() {
  let copia = PERGUNTAS_ORIGINAIS.map(p => {
    let alts = p.alternativas.map((a, i) => ({ ...a, originalIdx: i }));
    let altsEmbaralhadas = embaralhar(alts);
    let novaCorreta = altsEmbaralhadas.findIndex(a => a.originalIdx === p.correta);
    return {
      pergunta: p.pergunta,
      alternativas: altsEmbaralhadas,
      correta: novaCorreta
    };
  });
  return embaralhar(copia);
}

// ===== ÁUDIO =====
function falar(texto) {
  if (!audioAtivo) return;
  if (synth.speaking) { synth.cancel(); }
  const utt = new SpeechSynthesisUtterance(texto.toLowerCase());
  utt.lang = 'pt-BR';
  utt.rate = 0.85;
  utt.pitch = 1.1;
  utt.volume = 1;
  // tenta usar voz feminina em português
  let vozes = synth.getVoices();
  let voz = vozes.find(v => v.lang.startsWith('pt') && v.name.toLowerCase().includes('female'))
         || vozes.find(v => v.lang.startsWith('pt'))
         || vozes.find(v => v.lang.startsWith('pt-BR'));
  if (voz) utt.voice = voz;
  synth.speak(utt);
}

function lerPergunta() {
  if (!audioAtivo) return;
  const p = perguntas[perguntaAtual];
  let texto = p.pergunta + '. ';
  p.alternativas.forEach((alt, i) => {
    const letra = ['A', 'B', 'C'][i];
    texto += letra + '. ' + alt.texto + '. ';
  });
  falar(texto);
}

// ===== INICIAR JOGO =====
function iniciarJogo() {
  nomeJogador = document.getElementById('inputNome').value.trim();
  escolaJogador = document.getElementById('inputEscola').value.trim();
  idadeJogador = document.getElementById('inputIdade').value.trim();
  audioAtivo = document.getElementById('audioToggle').checked;

  perguntas = embaralharPerguntas();
  perguntaAtual = 0;
  acertos = 0;
  pontos = 0;

  const nome = nomeJogador || 'Jogador';
  document.getElementById('playerBarNome').innerHTML = '🎮 ' + nome.toUpperCase();

  trocarTela('screenJogo');
  mostrarPergunta();
}

// ===== MOSTRAR PERGUNTA =====
function mostrarPergunta() {
  // resetar estado de seleção
  respostaSelecionada = false;
  alternativaEscolhida = -1;

  const p = perguntas[perguntaAtual];
  const total = perguntas.length;

  // atualizar barra de progresso
  document.getElementById('progressText').textContent =
    'PERGUNTA ' + (perguntaAtual + 1) + ' DE ' + total;
  document.getElementById('scoreBadge').textContent = '⭐ ' + pontos + ' PTS';
  const pct = (perguntaAtual / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';

  // número e texto da pergunta
  document.getElementById('questionNumber').textContent = 'PERGUNTA ' + (perguntaAtual + 1);
  document.getElementById('questionText').textContent = p.pergunta;

  // mostrar dica de que pode trocar
  document.getElementById('hintText').style.display = 'block';

  // montar as alternativas
  const grid = document.getElementById('alternativesGrid');
  grid.innerHTML = '';

  p.alternativas.forEach((alt, i) => {
    const card = document.createElement('div');
    card.className = 'alt-card';
    card.setAttribute('data-idx', i);

    let imgHtml = '';
    if (alt.img) {
      imgHtml = '<div class="alt-img-wrap"><img src="' + alt.img + '" alt="' + alt.texto + '"></div>';
    } else {
      imgHtml = '<div class="alt-img-wrap"><div class="alt-emoji">' + (alt.emoji || '❓') + '</div></div>';
    }

    card.innerHTML = imgHtml + '<div class="alt-label">' + alt.texto + '</div>';
    card.onclick = () => selecionarAlternativa(i);
    grid.appendChild(card);
  });

  // esconder botão próxima no começo
  document.getElementById('btnProximo').style.display = 'none';

  // falar a pergunta se áudio ligado
  if (audioAtivo) {
    setTimeout(() => lerPergunta(), 600);
  }
}

// ===== SELECIONAR ALTERNATIVA =====
// Agora a criança pode TROCAR a escolha antes de clicar em PRÓXIMA!
// Só confirmamos a resposta quando clicar no botão.
function selecionarAlternativa(idx) {
  // se já confirmou (clicou em próxima), não deixa mudar mais
  if (respostaSelecionada) return;

  // guarda a escolha atual
  alternativaEscolhida = idx;

  // remove destaque de todas as alternativas
  const cards = document.querySelectorAll('.alt-card');
  cards.forEach(card => card.classList.remove('selected'));

  // coloca destaque na escolhida
  cards[idx].classList.add('selected');

  // falar o texto da alternativa escolhida
  if (audioAtivo) {
    synth.cancel();
    falar(perguntas[perguntaAtual].alternativas[idx].texto);
  }

  // mostra o botão de confirmar
  document.getElementById('btnProximo').style.display = 'inline-flex';
}

// ===== PRÓXIMA PERGUNTA =====
// Aqui SIM registramos a resposta!
function proximaPergunta() {
  // bloqueia novas seleções
  respostaSelecionada = true;

  // esconde a dica
  document.getElementById('hintText').style.display = 'none';

  // só conta o ponto se tinha selecionado alguma alternativa
  if (alternativaEscolhida >= 0) {
    const p = perguntas[perguntaAtual];
    if (alternativaEscolhida === p.correta) {
      acertos++;
      pontos += 10;
    }
  }

  // vai pra próxima ou pra tela de resultado
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) {
    mostrarResultado();
  } else {
    mostrarPergunta();
  }
}

// ===== RESULTADO FINAL =====
function mostrarResultado() {
  synth.cancel();
  trocarTela('screenResultado');

  const total = perguntas.length;
  const pct = acertos / total;

  document.getElementById('statAcertos').textContent = acertos;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statPontos').textContent = pontos;

  let mascot, titulo, mensagem, stars;

  if (pct >= 0.9) {
    mascot = '🦆✨';
    titulo = 'INCRÍVEL! VOCÊ ARRASOU!';
    mensagem = (nomeJogador ? nomeJogador.toUpperCase() + ', você' : 'Você') +
      ' conhece MUITO sobre Brusque! O Marreco está super orgulhoso de você! 🎉';
    stars = '⭐⭐⭐';
    lancarConfetes();
  } else if (pct >= 0.6) {
    mascot = '🦆😊';
    titulo = 'MUITO BOM!';
    mensagem = (nomeJogador ? nomeJogador.toUpperCase() + ', você' : 'Você') +
      ' aprendeu bastante sobre nossa cidade! Continue explorando Brusque! 🌟';
    stars = '⭐⭐';
  } else {
    mascot = '🦆🤗';
    titulo = 'QUE AVENTURA!';
    mensagem = (nomeJogador ? nomeJogador.toUpperCase() + ', você' : 'Você') +
      ' está aprendendo sobre Brusque! Tente de novo e descubra mais! Vai lá! 💪';
    stars = '⭐';
  }

  document.getElementById('resultMascot').textContent = mascot;
  document.getElementById('resultTitle').textContent = titulo;
  document.getElementById('resultMsg').textContent = mensagem;
  document.getElementById('starsRow').textContent = stars;

  document.getElementById('resultTitle').style.color =
    pct >= 0.9 ? '#e67e22' : pct >= 0.6 ? '#2ecc71' : '#667eea';

  if (audioAtivo) {
    setTimeout(() => falar(titulo + '. ' + mensagem), 500);
  }
}

// ===== CONFETES =====
function lancarConfetes() {
  const wrap = document.getElementById('confettiWrap');
  wrap.innerHTML = '';
  const cores = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff6bff','#ff9f43'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = cores[Math.floor(Math.random() * cores.length)];
    el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    el.style.animationDelay = (Math.random() * 1.5) + 's';
    wrap.appendChild(el);
  }
  setTimeout(() => { wrap.innerHTML = ''; }, 5000);
}

// ===== NAVEGAÇÃO ENTRE TELAS =====
function trocarTela(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function jogarNovamente() {
  synth.cancel();
  perguntas = embaralharPerguntas();
  perguntaAtual = 0;
  acertos = 0;
  pontos = 0;
  trocarTela('screenJogo');
  mostrarPergunta();
}

function voltarCadastro() {
  synth.cancel();
  trocarTela('screenCadastro');
}

// ===== CONFIGURAÇÃO INICIAL =====
// carrega as vozes do sistema
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = () => {};
}

// controla o ícone do botão de áudio na pergunta
document.getElementById('audioToggle').addEventListener('change', function() {
  audioAtivo = this.checked;
  if (!audioAtivo) synth.cancel();
  document.getElementById('audioBtnPerg').style.opacity = this.checked ? '1' : '0.3';
});
