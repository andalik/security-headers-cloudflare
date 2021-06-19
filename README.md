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

