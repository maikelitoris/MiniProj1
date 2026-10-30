// MiniProj1 · Tarefa 2.2 de PWA · Single Page Application com Vue 3 e Vue Router 4
// Tudo é carregado uma vez (index.html + este ficheiro). A navegação entre secções
// é feita pelo Vue Router no browser, sem pedir páginas novas ao servidor.

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// ---------- Dados do currículo (separados da apresentação) ----------
const perfil = {
  nome: "Pedro Miguel Antunes Brás",
  titulo: "Técnico de informática · Mestrando em Engenharia Informática e Tecnologia Web",
  cidade: "Coimbra, Portugal",
  foto: "img/pedro.jpg",
};

const percurso = [
  { quando: "out. 2024 – atual", oque: "Técnico de informática", onde: "Escola Secundária José Falcão, Coimbra",
    detalhe: "Apoio técnico a professores e alunos, rede e parque informático da escola. Desenvolvi a aplicação SEI para a gestão dos equipamentos informáticos." },
  { quando: "mar. 2022 – set. 2022", oque: "Front-End Developer", onde: "Etiz (Brasil)",
    detalhe: "Interfaces web em HTML, CSS e JavaScript com Angular, ligação a APIs de back-end e aplicações para desktop e mobile." },
];

const formacao = [
  { quando: "2026 – atual", oque: "Mestrado em Engenharia Informática e Tecnologia Web", onde: "Universidade Aberta e UTAD" },
  { quando: "", oque: "Licenciatura em Engenharia Informática", onde: "ISEC – Instituto Superior de Engenharia de Coimbra" },
];

const competencias = ["Java", "Python", "C#", "SQL", "HTML, CSS e JavaScript", "Angular", "Vue.js", "Git", "Linux", "Redes"];

const hobbies = [
  { icone: "fa-solid fa-code", titulo: "Programar", texto: "Gosto de criar código e serviços úteis. O meu projeto preferido é o SEI, a aplicação que fiz para gerir os equipamentos informáticos da escola." },
  { icone: "fa-solid fa-dumbbell", titulo: "Ginásio", texto: "Sou «viciado» em ginásio. Treinar é a minha forma de desligar e recarregar energias." },
  { icone: "fa-solid fa-music", titulo: "Música e piano", texto: "Adoro música e toco piano." },
];

// Redes sociais do rodapé
const redes = [
  { nome: "GitHub", icone: "fa-brands fa-github", url: "https://github.com/maikelitoris" },
  { nome: "Instagram", icone: "fa-brands fa-instagram", url: "https://www.instagram.com/pedro.bras_/" },
  { nome: "Email", icone: "fa-solid fa-envelope", url: "mailto:pedro.bras.85@gmail.com" },
];

// ---------- Componentes (uma secção = um componente) ----------
const QuemSouEu = {
  data: () => ({ perfil, formacao, competencias }),
  template: `
    <section class="cartao apresentacao">
      <img :src="perfil.foto" :alt="'Fotografia de ' + perfil.nome" class="foto">
      <div>
        <h1>Quem sou eu?</h1>
        <p class="nome">{{ perfil.nome }}</p>
        <p class="titulo">{{ perfil.titulo }}</p>
        <p><i class="fa-solid fa-location-dot"></i> {{ perfil.cidade }}</p>
        <p>Sou técnico de informática numa escola secundária e estou a fazer o mestrado em Engenharia Informática e Tecnologia Web.
           Gosto de resolver problemas reais com tecnologia: do diagnóstico de uma avaria de rede à criação de uma aplicação que facilita o trabalho de toda a escola.</p>
      </div>
    </section>
    <section class="cartao">
      <h2>Formação</h2>
      <ul class="lista-tempo">
        <li v-for="f in formacao" :key="f.oque">
          <span class="quando" v-if="f.quando">{{ f.quando }}</span>
          <strong>{{ f.oque }}</strong><br><span class="onde">{{ f.onde }}</span>
        </li>
      </ul>
      <h2>Competências</h2>
      <ul class="etiquetas"><li v-for="c in competencias" :key="c">{{ c }}</li></ul>
    </section>`,
};

const OQueFaco = {
  data: () => ({ percurso }),
  template: `
    <section class="cartao">
      <h1>O que faço?</h1>
      <ul class="lista-tempo">
        <li v-for="p in percurso" :key="p.oque">
          <span class="quando">{{ p.quando }}</span>
          <strong>{{ p.oque }}</strong> · <span class="onde">{{ p.onde }}</span>
          <p>{{ p.detalhe }}</p>
        </li>
      </ul>
    </section>`,
};

const Hobbies = {
  data: () => ({ hobbies }),
  template: `
    <section>
      <h1 class="titulo-seccao">Hobbies</h1>
      <div class="grelha">
        <article class="cartao hobby" v-for="h in hobbies" :key="h.titulo">
          <i :class="h.icone" aria-hidden="true"></i>
          <h2>{{ h.titulo }}</h2>
          <p>{{ h.texto }}</p>
        </article>
      </div>
    </section>`,
};

const Rodape = {
  data: () => ({ redes, ano: new Date().getFullYear() }),
  template: `
    <footer class="rodape">
      <ul class="redes">
        <li v-for="r in redes" :key="r.nome">
          <a :href="r.url" :aria-label="r.nome" :title="r.nome" target="_blank" rel="noopener"><i :class="r.icone"></i></a>
        </li>
      </ul>
      <p>© {{ ano }} Pedro Brás · MiniProj1 · PWA (MEIW)</p>
    </footer>`,
};

// ---------- Router: cada caminho corresponde a uma secção ----------
// O modo "hash" (#/hobbies) funciona em qualquer servidor estático, incluindo o GitHub Pages
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: QuemSouEu, meta: { titulo: "Quem sou eu?" } },
    { path: "/o-que-faco", component: OQueFaco, meta: { titulo: "O que faço?" } },
    { path: "/hobbies", component: Hobbies, meta: { titulo: "Hobbies" } },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior: () => ({ top: 0 }),
});

// Atualiza o título do separador do browser em cada mudança de secção
router.afterEach((to) => { document.title = `${to.meta.titulo} · Pedro Brás`; });

createApp({}).component("rodape", Rodape).use(router).mount("#app");
