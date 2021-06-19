<pre>

╔═══╗───────────╔╗─────╔╗─╔╗───────╔╗────────╔═══╦╗────────╔╗╔═╦╗
║╔═╗║──────────╔╝╚╗────║║─║║───────║║────────║╔═╗║║────────║║║╔╣║
║╚══╦══╦══╦╗╔╦═╬╗╔╬╗─╔╗║╚═╝╠══╦══╦═╝╠══╦═╦══╗║║─╚╣║╔══╦╗╔╦═╝╠╝╚╣║╔══╦═╦══╗
╚══╗║║═╣╔═╣║║║╔╬╣║║║─║║║╔═╗║║═╣╔╗║╔╗║║═╣╔╣══╣║║─╔╣║║╔╗║║║║╔╗╠╗╔╣║║╔╗║╔╣║═╣
║╚═╝║║═╣╚═╣╚╝║║║║╚╣╚═╝║║║─║║║═╣╔╗║╚╝║║═╣║╠══║║╚═╝║╚╣╚╝║╚╝║╚╝║║║║╚╣╔╗║║║║═╣
╚═══╩══╩══╩══╩╝╚╩═╩═╗╔╝╚╝─╚╩══╩╝╚╩══╩══╩╝╚══╝╚═══╩═╩══╩══╩══╝╚╝╚═╩╝╚╩╝╚══╝
──────────────────╔═╝║
──────────────────╚══╝
by Renato Andalik (@andalik)
</pre>

Manipulando Security Headers na Cloudflare através do Workers

## Uso:

### Introdução ao Cloudflare Workers
Resumidamente, Workers permite que você execute códigos serverless em JS, Rust, C e C++ diretamente da borda Cloudflare. A grande vantagem é que o código é executado instantaneamente, sem 'cold starts' (0ms worldwide).

A página oficial do projeto é https://workers.cloudflare.com


### Implementação

Como a Cloudflare não dispõe de recursos nativos para customizar os security headers, podemos utilizar desta funcionalidade para no momento do acesso executar nosso código em JS, alterar os security headers, e em seguida, repassar a execução para o servidor de destino.

Acesse o painel de controle da Cloudflare e clique em Workers.
Em seguida, clique em Manage Workers.
Agora, clique em Create Workers, e na area esquerda da tela, cole o código security-headers-cf.js.

Aproveite e renomeie o script para security-headers-cf e clique em Save and Deploy.

Novamente na tela do Workers, clique em Add route.

Em Route, especifique a url, por exemplo, www.andalik.com.br/*
e em Worker, selecione security-headers-cf

Clique em Save.

Pronto!
Para validar, acesse https://securityheaders.com
