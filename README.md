# Ecommerce Frontend

Este projeto foi criado com o objetivo de fornecer uma interface de usuário para o backend do Spring Tech Ecommerce.

## Tecnologias Utilizadas

- **Next.js 13**: Framework web baseado em React com renderização do lado do servidor.
- **Tailwind CSS**: Framework de CSS para design de componentes.
- **React Hook Form**: Biblioteca para gerenciamento de formulários.
- **Yup Resolver**: Biblioteca para validação de dados.
- **NextAuth**: Biblioteca para autenticação.
- **i18n**: Biblioteca para internacionalização.
- **Next-Themes**: Biblioteca para gerenciamento de temas.

## Funcionalidades

### Login e Registros

O projeto implementa um sistema de autenticação completo, permitindo que os usuários se registrem e façam login.

### Rotas Dinâmicas

Rotas dinâmicas para ver detalhes do produto, permitindo uma navegação fluida e intuitiva.

### CRUD com Pedido, Carrinho e Comentários

Usuários podem adicionar, atualizar e remover produtos do carrinho, além de realizar pedidos e deixar comentários com nota a produtos.
Administradores possuem CRUD completo, podendo adicionar novos produtos e mudar status de usuários, como BANIR, BLOQUEAR, ATIVAR e DESATIVAR.

### Ecommerce

Como um ecommerce, os usuários podem adicionar produtos ao carrinho, fazer pedidos e deixar comentários nos produtos.

## Futuras Implementações

- **Painel de Admin**: Um painel de administração para gerenciar o projeto.
- **Sistema de Geração de Relatórios**: Um sistema para gerar relatórios.
- **Sistema para Disparar Emails**: Um sistema para enviar emails.
- **Internacionalização**: Suporte para português e inglês.

## Como executar o projeto

1. Clone o repositório
2. Instale as dependências um gerenciador de pacotes de sua preferência 
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3. Execute em ambiente de desenvolvimento
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
4. Acesse a aplicação em `localhost:3000`

## Contribuição

Contribuições são sempre bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.
