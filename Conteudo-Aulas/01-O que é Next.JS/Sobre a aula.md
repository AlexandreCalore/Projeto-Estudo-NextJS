# Métodos de renderização do NEXT JS

# CSR

**Client Side Render**

*Tradicional utilizado pelo React*

É a `renderização inteira` da página na browser do usuário.

### Como funciona

Ao adentrar em uma página por exemplo, o usuário acaba fazendo request da pagina > Server envia o HTML mínimo para o browser > O browser baixa o JS bundle > Broser executa o JS > Monta toda a tela e faz o fetch de dados (requisita dados por exemplo, aos endpoints).

#### Vantagem

A experiencia se aproxima a de um app quando utilizado esse método. Transições de páginas sem reloads, sendo mais dinâmico.

#### Desvantagem 

SEO ruim por conta da demora de carregamento de informações. Tempo de load inicial. Segurança frágil, por conta dos dados estarem sendo "trabalhados" no lado do cliente, podendo expor informações

# SSR

**Server Side Render**

### Como funciona

Usuário faz request da página > Servidor renderiza a página dinâmicamente > Servidor envia o HTML para o browser > Browser exibe o HTML > Next.JS injeta scripts para interatividade (processo de hidration).

#### Vantagem

SEO e segurança robusta (chamada à API, e gerenciamento de cookies, ambos no servidores)

#### Desvantagem 

Server Workload (carga alta no servidor) e API´s específicas do browser não vão estar disponíveis (window e document), tendo que checar se o código está sendo executado ou no client ou no server.

# SSG

**Static Site Generation**

### Como funciona

As páginas serão geradas no build, tendo os arquivos HTML "deployados" ou no servidor ou no CDN (Countent delivery Network, que nada mais é que o servidor mais próximo de você baseado em todos que estão espalhados no mundo) > Usuário faz a request da página > O HTML é enviado diretamente do servidor.

#### Vantagem

Performance (Ao receber o HTML, o browser exibe imediatamente), Escalabilidade (Sem necessidade de servidor dedicado, Facilmente cacheados em CDN), SEO (Fácil indexação do conteúdo das páginas)

#### Desvantagem

Não recomendado para conteúdos dinâmicos, pois vai envolver o re-build frequente (Vai recarregar todo o site frequentemente, a depender do projeto não faz sentido). Segurança, pois se você tiver de posse de um painel admim, não vai conseguir "filtrar" quem terá acesso ao que, pois ja vai ter sido carregado o conteúdo.

# ISR

**Incremental Static Regeneration**

Nada mais é do que a combinação do SSG (Static Site Generation), mas sem rebuild do site inteiro.

### Como funciona

Nós definimos um tempo de renderização, e após esse tempo o Next renderiza a página novamente.

#### Vantagem

Carregamento das páginas. Geração de páginas automáticas. Redução de carga no servidor (Diferente do SSR, o ISR não gera as páginas a cada request). SEO (Páginas sendo pré renderizadas, melhora o SEO).

#### Desvantagem 

Delay no conteúdo (Usuários podem acessar conteúdo desatualizado por conta do time definido). Sem real-time (Todos os usuários vão acessar a mesma página)