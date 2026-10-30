# MiniProj1 · Currículo em Single Page Application (Vue.js)

Tarefa 2.2 da UC **Programação Web Avançada** (MEIW 2026/27) · Pedro Brás

Site de uma só página (SPA) com o meu currículo, construído com **Vue 3** e **Vue Router 4**. Tem três secções, **Quem sou eu?**, **O que faço?** e **Hobbies**, e um rodapé com a identidade virtual (ícones de redes sociais) comum a todas.

## Como funciona (SPA)

- O browser carrega uma única vez o `index.html`, o `js/app.js`, o CSS e as bibliotecas.
- Cada secção é um **componente Vue** (`QuemSouEu`, `OQueFaco`, `Hobbies`) e o rodapé é o componente `rodape`.
- O **Vue Router** associa cada caminho a um componente (`#/`, `#/o-que-faco`, `#/hobbies`). Ao clicar no menu, o router troca o componente dentro de `<router-view>` **sem pedir uma página nova ao servidor**.
- Usa-se o modo *hash* (`createWebHashHistory`), que funciona em qualquer servidor de ficheiros estáticos, incluindo o GitHub Pages, sem configuração.
- Os dados do currículo estão separados da apresentação (objetos no início do `app.js`).

## Estrutura

```
index.html            página única: menu, <router-view> e rodapé
js/app.js             dados, componentes e router
css/style.css         estilos (inclui a versão para telemóvel)
img/pedro.jpg         fotografia
vendor/               Vue, Vue Router e Font Awesome (cópias locais, sem CDN)
docs/wireframe_MiniProj1.pdf   wireframe das 3 secções (computador e telemóvel)
```

## Como ver

- **Online:** GitHub Pages deste repositório (Settings → Pages → *Deploy from a branch* → `main` / root).
- **Localmente:** na pasta do projeto, `python -m http.server` e abrir http://localhost:8000. Também abre com um duplo clique no `index.html`.

## Créditos

- [Vue.js](https://vuejs.org/) e [Vue Router](https://router.vuejs.org/) (licença MIT).
- Ícones [Font Awesome Free](https://fontawesome.com/) (ícones CC BY 4.0, código MIT).
