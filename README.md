# Marvel App

VEJA O PROJETO AQUI [https://marvel-instacarro.vercel.app/](https://marvel-instacarro.vercel.app/).

# Marvel App

Este é um projeto desenvolvido como parte de um teste técnico para a posição de desenvolvedor front-end. A aplicação busca e exibe dados de personagens da Marvel utilizando a API da Marvel e foi construída com algumas das mais modernas tecnologias de desenvolvimento web para garantir uma experiência de usuário rápida e eficiente.

## Tecnologias Utilizadas

- **Next.js**: Escolhi o Next.js pela capacidade de renderização híbrida (SSR/SSG) e por facilitar a configuração do projeto, além da integração eficiente com SEO. É ideal para aplicações que precisam balancear desempenho e acessibilidade.
- **React Query (@tanstack/react-query)**: Utilizei o React Query para o gerenciamento de cache e requisições à API, o que facilita o tratamento de dados assíncronos e melhora o desempenho, minimizando as chamadas desnecessárias à API. Com ele, foi possível implementar cache para os dados dos personagens e tornar a navegação mais rápida e fluida.
- **Axios**: Para facilitar as chamadas HTTP, o Axios ajuda a configurar e realizar requisições à API de forma mais limpa e com melhor tratamento de erros.

- **Crypto-JS**: Como a API da Marvel exige uma autenticação por meio de uma hash MD5, o Crypto-JS foi utilizado para gerar o hash com a combinação de timestamp, chave pública e chave privada.

- **Lodash Throttle**: Implementado para otimizar eventos de scroll e minimizar chamadas repetitivas à API, o `throttle` é ideal para funcionalidades que envolvem o scroll infinito ou carregamento de novos dados ao atingir o final da página.

- **React Loading Skeleton**: Para uma experiência de carregamento agradável, o React Loading Skeleton foi utilizado para mostrar elementos “fantasmas” enquanto os dados reais estão sendo carregados.

- **Styled-Components**: A biblioteca Styled-Components foi escolhida para a estilização de componentes devido à sua sintaxe intuitiva e suporte a temas, tornando o CSS mais modular e fácil de manter.

- **Context API**: A Context API do React foi utilizada para gerenciar e compartilhar dados globais pela aplicação. A escolha por esta solução foi feita para centralizar informações e manter o estado global de forma mais fácil e acessível em diferentes componentes, principalmente para dados como parâmetros de paginação e filtros de busca. Isso simplifica a manutenção, evita a necessidade de "prop drilling" e mantém o código mais limpo e modular.

## Vantagens do Cache no React Query

O React Query facilita muito o caching de dados no frontend. Em um aplicativo como este, onde os dados dos personagens não mudam constantemente, o uso de cache se torna essencial para:

- **Melhorar a experiência do usuário**: Com o cache, os dados já visualizados pelo usuário ficam instantaneamente disponíveis ao retornar a uma página, evitando recarregamentos desnecessários.
- **Reduzir o número de requisições**: Ao reutilizar dados já carregados, economizamos em chamadas à API, o que resulta em economia de recursos e desempenho melhorado.
- **Manter dados sincronizados**: A configuração do React Query permite definir quando o cache precisa ser invalidado, mantendo os dados sempre atualizados sem re-renderizações excessivas.

## Rodando a Aplicação no Ambiente de Desenvolvimento

Para testar a aplicação em ambiente de desenvolvimento, você precisará do **Yarn** instalado em sua máquina. Siga os passos abaixo:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/marvel-app.git
   cd marvel-app
   ```

2. **Instale as dependências**

   Execute o comando abaixo para instalar todas as dependências do projeto:

   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**

   Para iniciar a aplicação no modo de desenvolvimento, execute:

   ```bash
   yarn dev
   ```

4. **Acesse a aplicação**

   Abra seu navegador e acesse `http://localhost:3000`. A aplicação estará rodando no modo de desenvolvimento, com suporte a hot-reloading, para que você veja suas mudanças instantaneamente.

5. **Outros comandos úteis**

   - `yarn build`: Compila a aplicação para produção.
   - `yarn start`: Inicia a aplicação já compilada em modo de produção.
   - `yarn lint`: Executa o linter para verificar possíveis problemas no código.

## Considerações Finais

Este projeto foi desenvolvido com foco em performance e organização do código. As escolhas das tecnologias visam uma aplicação rápida e fácil de manter, pronta para expansão e melhorias futuras. O uso da Context API em conjunto com o React Query, Axios e Styled-Components permitiu uma arquitetura limpa, escalável e eficiente para o frontend. Se tiver algum feedback ou sugestão de melhorias, ficarei feliz em ouvir!
