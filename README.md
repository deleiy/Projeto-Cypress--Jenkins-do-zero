# Novo Projeto Cypress + Jenkins (Windows)

## Como usar
1. Instale dependências:
   ```bash
   npm ci
   ```
2. Rode localmente:
   ```bash
   npx cypress run --browser electron --headless
   ```
3. Faça commit e push para o GitHub.
4. No Jenkins, crie um job Pipeline apontando para este repo. O Jenkinsfile já está pronto.

## Artefatos
- JUnit XML: `cypress/results/*.xml`
- Vídeos: `cypress/videos/**`
- Screenshots: `cypress/screenshots/**`
