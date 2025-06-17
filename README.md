# 📞 API de Gestão de Contactos

API RESTful para gerenciamento de contactos de usuários.

---

## 🚀 Funcionalidades

- ✅ Um usuário pode ter múltiplos contactos
- ✅ Um contacto pertence a apenas um usuário
- 🔐 Todo tipo de usuários pode:
  - Adicionar contactos
  - Atualizar contactos
  - Deletar contactos
- 🌍 Com base nos prefixos telefônicos, pegar o nome do País com API externa (ex: RestCountries)
- 🧹 Exclusão em cascata: ao remover um usuário, todos os seus contactos são excluídos
- 🛡️ Validação com Zod
- 🧪 Testes automatizados com Jest

---

## 🧱 Estrutura de Dados

### 🧑 User

| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | ID | - |
| `name` | string | Mingous |

### 📇 Contacto

| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | ID | - |
| `userId` | ID | - |
| `prefixo` | string | +244 |
| `pais` | string | Angola |
| `numero` | string | 923456780 |

---

## 📦 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **PostgreSQL**
- **Knex**
- **Zod**
- **Docker**
- **Jest** (testes)

---

## 🛠️ Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

# Configure o banco de dados (arquivo .env com as configs)
cp .env.example .env

# Suba o banco com Docker (opcional)
docker compose up -d

# Rode as migrations
npx knex migrate:latest

# Rode a aplicação em modo dev
npm run dev
