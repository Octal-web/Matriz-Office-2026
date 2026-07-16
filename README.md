<div align="center">
  <h1>Matrriz Office</h1>
</div>

O projeto consistiu no desenvolvimento de um site institucional moderno e responsivo para a marca **Matriz Office**, com foco em representar detalhes que compõem a marca.
  
---

## Índice

- [Sobre](#sobre)
- [Visualização](#visualizacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)

---

<h2 id="sobre">Sobre:</h2>

Através do site para o público:

- Visualizar a página **Home** com informaçõas acerca de:
    - **Sobre e ambientes**
    - **Soluções para ambientes corporativos**
    - **Showrrooms e suas unidades**
    - **Formulário para entrar em contato**
    - **Perguntas frequentes**
---


<h2 id="visualizacao">Visualização:</h2>

<img width="400" alt="image home" src="https://github.com/user-attachments/assets/e9fea582-24a5-4632-aeb8-395ea08ab481" />
<img width="400" alt="image home" src="https://github.com/user-attachments/assets/f14bd97a-e9e3-474e-a105-b84c965f9cbe" />

---

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas:</h2>

### Back-end:
- **Laravel**: framework PHP para construção do projeto, gerenciamento de rotas, autenticação e etc.
- **PHP**: linguagem de desenvolvimento
- **Laravel Sanctum**: autenticação e proteção de rotas
- **Inertia.js**: integração entre backend Laravel e frontend React sem necessidade de API tradicional
- **Ziggy**: compartilhamento de rotas Laravel diretamente no frontend React
- **Laravel Tinker**: ferramenta para testes e execução de comandos no ambiente
- **Laravel PT-BR Validator**: validações adaptadas para formato brasileiro

### Front-end:
- **React**: biblioteca para construção de interfaces
- **Inertia React**: integração entre Laravel e React sem necessidade de API REST tradicional
- **Vite**: ferramenta de build e desenvolvimento rápido
- **Laravel Vite Plugin**: integração entre Laravel e Vite
- **Tailwind CSS**: framework para estilização
- **Tailwind Forms**: plugin para estilização de formulários no Tailwind
- **PostCSS**: processador de CSS usado junto do Tailwind
- **Autoprefixer**: adiciona prefixos CSS automaticamente para compatibilidade entre navegadores

### UI e experiência do usuário:
- **Yet Another React Lightbox**: exibição de imagens em lightbox

---

<h2 id="arquitetura-do-projeto">Arquitetura principal do Projeto:</h2>

```bash
Matriz-Office-2026
│
├── app
│   ├── Http
│   │   ├── Controllers    # Controladores responsáveis pelas requisições e retornar respostas 
│   │   ├── Middleware     # Interceptação, autenticação e tratamento de requisições
│   │   ├── Requests       # Validação e autorização de formulários e requisições
│   │   ├── helpers.php    # Auxiliares globais utilizados no projeto
│   ├── Models             # Representação das tabelas do banco (Eloquent)
│   ├── Providers          # Configuração de pacotes
│   ├── Services           #Regras de negócio
├── bootstrap              # Inicialização do framework
├── config                 # Arquivos de configuração
├── database               # Migrations, seeds e factories
├── public                 # Diretório público acessível pelo navegador
│   ├── admin              # Arquivos relacionados ao Manager
│   ├── content            # Arquivos relacionados as páginas
│   ├── site               # Arquivos do site institucional
├── resources              # Frontend e recursos
│   ├── css                # Estilização 
│   ├── js                 # Componentes, páginas, hooks e layouts
│   ├── views              # Templates e views do Laravel/Inertia
├── routes                 # Definição das rotas web
├── storage                # Arquivos gerados (logs, cache e etc.)
├── tests
│

```

---

<h2 id="como-executar-o-projeto">Como Executar o Projeto:</h2>

1. Clone o repositório:

```bash
git clone https://github.com/Octal-web/Matriz-Office-2026.git
cd Matriz-Office-2026
```

2. Instale as dependências do Front-end:

```bash
npm install
```

3. Instale as dependências do Back-end:

```bash
composer install
```

4. Configure o ambiente

Crie o arquivo .env:

```bash
cp .env.example .env
```

Gere a chave da aplicação:
```bash
php artisan key:generate
```

Configure o banco de dados SQL e preencha com o acesso no .env

5. Rode o projeto:
```bash
npm run dev
php artisan serve
```


