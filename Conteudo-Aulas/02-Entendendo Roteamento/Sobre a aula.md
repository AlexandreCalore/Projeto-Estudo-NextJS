# Roteamento

## Pages

A pasta pages, serve como pasta central de roteamento, onde o que estiver definido ali dentro, poderá ser acessado através do site.

## Rotas dinâmicas

Rotas dinamicas se baseam no auto roteamento de uma página ao clicar nela por exemplo, levando ao seu respectivo endereço.

Para definirmos uma rota dinâmica, temos que usar a sintaxe [slug] no nome do arquivo.

## Catch All

O **Catch All** é uma forma de criar rotas dinâmicas que capturam múltiplos segmentos de URL.

A sintaxe é feita usando colchetes com reticências no nome do arquivo:

[...slug].ts

Diferente da rota dinâmica simples ([slug].ts), que captura apenas um segmento, o Catch All captura vários níveis de rota.

Exemplo: uma rota definida como [...slug].ts pode responder a:

/blog/

/blog/artigo

/blog/artigo/comentarios/1

Todos os segmentos são recebidos como um array em params.slug.