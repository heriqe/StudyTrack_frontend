# StudyTrack - Frontend Web

Este repositório contém o código-fonte do frontend web do aplicativo StudyTrack, um sistema projetado para auxiliar estudantes na organização e gestão de suas atividades acadêmicas.

## 🚀 Tecnologias Utilizadas

O frontend web do StudyTrack é construído utilizando uma stack moderna e eficiente:

*   **Framework:** React - Uma biblioteca JavaScript para construir interfaces de usuário interativas.

## ✨ Funcionalidades do Frontend

O frontend do StudyTrack oferece a interface para o usuário interagir com as seguintes funcionalidades:

*   **Gestão de Tarefas e Atividades:** Interface para adicionar, visualizar e categorizar tarefas acadêmicas (trabalhos, provas, leituras, revisões) por disciplina ou tipo.
*   **Visualização de Lembretes:** Exibição de lembretes configurados para prazos importantes.
*   **Acompanhamento Visual de Progresso:** Renderização de gráficos interativos para visualizar a distribuição de atividades e o progresso nos estudos.
*   **Autenticação de Usuário:** Interface para login e registro de usuários, integrando-se com o sistema de autenticação do backend.

## 🛠️ Como Executar Localmente

Siga os passos abaixo para configurar e executar o frontend do StudyTrack em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/heriqe/StudyTrack_frontend]
    cd studytrack-frontend
    ```
    *(Substitua `[https://github.com/heriqe/StudyTrack_frontend]` pelo URL real do seu repositório de frontend)*

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias para a conexão com o Firebase (ou outro backend). Exemplo:
    ```
    REACT_APP_FIREBASE_API_KEY=sua_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=seu_app_id
    ```
    *(Ajuste conforme as variáveis de ambiente reais do seu projeto)*

4.  **Inicie a aplicação:**
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000` (ou outra porta, se configurado).

## 🤝 Contribuições

Sinta-se à vontade para contribuir com o desenvolvimento deste frontend! Para contribuir:

1.  Faça um fork deste repositório.
2.  Crie uma nova branch para sua feature ou correção de bug (`git checkout -b feature/minha-nova-feature`).
3.  Faça suas alterações e realize o commit (`git commit -m 'feat: Adiciona funcionalidade X'` ou `fix: Corrige bug Y`).
4.  Envie suas alterações para o seu fork (`git push origin feature/minha-nova-feature`).
5.  Abra um Pull Request para a branch `main` (ou `master`) deste repositório, descrevendo suas alterações.
