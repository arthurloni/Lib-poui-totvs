# <img width="43" height="38" alt="image" src="https://github.com/user-attachments/assets/e4b205de-9efd-495d-9c14-66c953d2e7ef" /> Framework - Angular - (🇧🇷)

##### *WEBSITES - DOCUMENTAÇÕES - FORUMS*
`Utilização de I.A (Claude, Gemini, Chatgpt) -> (Material escrito na mão, uso de I.A para pesquisa, estudos, correção ortográfica é formatação da documentação para facilitar a agilizar de forma prática a criação e os estudos.)`

1 - https://angular.dev/

2 - https://angular.dev/installation

3 - https://angular.dev/style-guide

4 - https://feature-sliced.design/

5 - https://dev.to/godoi/como-estruturar-sua-aplicacao-angular-26pg

6 - https://po-ui.io/guides/getting-started

7 - https://angular.dev/guide/routing/rendering-strategies

8 - https://seo.london/pt/seo-angular/

9 - https://tdn.totvs.com/pages/releaseview.action?pageId=1042925484

#### Observação
*Documentações acima referente ao conteudo abaixo.*

O estudo a seguir e uma forma que eu utilizei enquanto escrevia esse material de estudos, para aprender e desenvolver habilidades utilizando o  Angular para utilizar uma biblioteca da TOTVS e realizar desenvolvimentos de interfaces visualmente agradável, e códigos legíveis.
Acima temos algumas documentações para auxiliar nós estudos referente a angular, para embarcar nessa viagem e recomendado já ter alguma experiencia ou base em logica, algoritmos, e assuntos considerados básicos no desenvolvimento.

*Por favor realize um issues para correção caso identificar algum erro.*

---

### 1 - RESUMO

Para começar, precisamos perguntar primeiramente, Oque e uma Framework?, qual sua utilidade?
como podemos usar?

Uma framework, é basicamente uma forma de trabalhar com bibliotecas já prontas, possuindo diversos códigos e Ferramentas para auxiliar e ajudar no desenvolvimento, não e um bicho de 7 cabeças.

Então quando vamos elevando o conhecimento e nível de aprendizagem, acabamos nós encontrando com uma framework ou varias no nosso cotidiano.

A maior utilidade de uma framework, é agilizar o desenvolvimento, atuando com ferramentas já prontas e com fácil e rápido acesso, além de ser performático no desenvolvimento.

Para utilizar qualquer framework, e necessário realizar pesquisas e entendimento sobre a funcionalidade da framework, para quais objetivos você pode está utilizando e qual se assimila mais com o seu.

Exemplo em Node.js:

Instalando a Framework via package:

```bash
npm install -g @angular/cli@21
ng version
ng new nome-do-projeto
```

Chamando via código: `import {NgModule} from '@angular/core'`

Para maior entendimento, realizar leitura da documentação oficial.
Dessa forma, conseguimos instalar e até mesmo configurar, seguindo a documentação acima, vamos ter uma noção maior no site oficial. 
*( Lembrando que Angular e um framework para Front-end )*

### 2 - INSTALAÇÃO E CONFIGURAÇÃO

Passo a passo do que foi feito para deixar o Angular com a biblioteca PO UI (TOTVS) funcionando.

*Versões validadas em 11/10/2026: Node.js v24.19.0, npm 11.17.0, Angular CLI 21.2.26, Angular 21.2.25, TypeScript 5.9.3.*

Sempre validar as versões com os comandos abaixo, para ficar ciente de qual versionamento está sendo utilizado:

```bash
node -v
npm -v
ng version
```

*( O PO UI acompanha uma versão específica do Angular. Em 11/10/2026 o guia pedia o Angular 21, mesmo o Angular 22 já existindo. Antes de instalar, conferir o guia: https://po-ui.io/guides/getting-started )*

#### 2.1 - Instalando o Node.js

Download: https://nodejs.org/pt-br/download

```bash
node -v
```

*( Mostra a versão do Node.js. O guia do PO UI pede Node.js 20.11 ou superior. )*

#### 2.2 - Instalando o Angular

Instalar o Angular CLI na máquina (`-g` = global, fazer uma única vez):

```bash
npm install -g @angular/cli@21
```

*( Usar `@21`, sem a versão o npm instala o Angular 22, que não é compatível com o PO UI. )*

Criar o projeto na pasta onde ele ficará (ex: `Lib-poui-totvs`):

```bash
ng new estudos-angular
```

Perguntas da instalação:

| Pergunta | Resposta |
|---|---|
| Would you like to share pseudonymous usage data about this project with the Angular Team at Google? (y/n) | `n` |
| Which stylesheet system would you like to use? | `CSS` |
| Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? | `n` |
| Which AI tools should Angular integrate with? | `None` |

*( SSR = n, porque o PO UI lê o `localStorage` ao iniciar e no servidor ele não existe, gerando o erro `localStorage is not defined`. Sistemas internos também não precisam de SEO. )*

Entrar na raiz do projeto:

```bash
cd estudos-angular
```

*( A raiz é a pasta que tem o `package.json` e o `angular.json`. Todos os próximos comandos rodam dentro dela. )*

#### 2.3 - Instalando o PO UI

Antes, validar no `package.json` se as versões estão compatíveis com o guia do PO UI (Angular `~21.2.x` e TypeScript `~5.9.x`).

```bash
ng add @po-ui/ng-components
```

*( O `ng add` instala a versão do PO UI compatível com o Angular do projeto, configura o tema e o `HttpClient`. Quando perguntar sobre a estrutura inicial com menu lateral, página e toolbar, responder `Y`. )*

#### 2.4 - Configurações após a instalação

**1 - `tsconfig.app.json`: definir o `rootDir`**

O VS Code sublinha o `outDir` com o aviso *"The 'rootDir' setting must be explicitly set"* (TypeScript 6 do editor). Adicionar a linha em `compilerOptions`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "rootDir": "./src",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
```

*( Manter o `include`, é ele que diz ao TypeScript quais arquivos compilar. Sem ele o `ng build` falha com `File 'src\main.ts' not found in TypeScript compilation`. )*

**2 - `angular.json`: ajustar o limite de tamanho (budget)**

O limite padrão do Angular (aviso 500 kB, erro 1 MB) é menor que o PO UI e o `ng build` falha com `bundle initial exceeded maximum budget`. No caminho `projects > estudos-angular > architect > build > configurations > production > budgets`, alterar apenas o bloco `initial`:

```json
{
  "type": "initial",
  "maximumWarning": "3MB",
  "maximumError": "4MB"
}
```

#### 2.5 - Testando

```bash
ng build
ng serve
```

- `ng build` deve terminar com `Application bundle generation complete`.
- `ng serve` sobe o projeto em http://localhost:4200, que deve mostrar a tela com toolbar, menu lateral e página do PO UI.

Dois arquivos importantes para entender o que aparece na tela:

| Arquivo | Função |
|---|---|
| `src/index.html` | A "casca" da página, tem a tag `<app-root>` vazia. Título da aba, ícone e idioma ficam aqui. |
| `src/app/app.html` | O conteúdo do componente raiz, é ele que substitui o `<app-root>`. Toolbar, menu e páginas ficam aqui. |

#### 2.6 - Erros encontrados e soluções

| Erro | Solução |
|---|---|
| `ng add`: `Unable to find compatible package` / `ERESOLVE` | Projeto estava com Angular 22. Usar `npm i -g @angular/cli@21` e recriar o projeto com `ng new` |
| `This command is not available when running the Angular CLI outside a workspace` | Rodar o comando dentro da raiz do projeto (`cd estudos-angular`) |
| `ReferenceError: localStorage is not defined` | Projeto criado com SSR. Recriar com `ng new estudos-angular --ssr=false` |
| `NG02801: HttpClient is not configured to use fetch APIs` | Aviso do SSR, some ao recriar sem SSR |
| `The 'rootDir' setting must be explicitly set` | Adicionar `"rootDir": "./src"` (2.4) |
| `File 'src\main.ts' not found in TypeScript compilation` | Restaurar o `tsconfig.app.json` com o `include` (2.4) |
| `bundle initial exceeded maximum budget` | Subir o budget `initial` para 3MB / 4MB (2.4) |
| `NG8113: All imports are unused` | Remover o import `RouterOutlet` do `app.ts` ou usar `<router-outlet />` no `app.html` |

### 3 - INICIO

Com o ambiente devidamente configurado e instalado, seguindo a documentação apresentada anteriormente, podemos dar início ao estudo de um conceito que considero importante e que será abordado ao longo desta documentação.

Esse conceito está relacionado à organização estrutural das pastas do repositório e ao entendimento da finalidade de cada uma delas.

No Angular, boa parte dessa estrutura é gerada automaticamente durante a criação do projeto. Porém, entender para que serve cada pasta, como utilizá-la corretamente e qual a sua importância é fundamental, na minha visão, para manter o projeto organizado e facilitar o desenvolvimento e a manutenção da aplicação.

Conforme a documentação, essa geração automática é recomendada pelo time do Angular, Além disso conforme o nosso projeto cresce, a recomendação oficial do Angular é que você adote a estrutura conhecida como Feature-by-Folder (ou Lógica por Recursos/Funcionalidades).
