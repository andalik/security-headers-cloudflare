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

### Introdução ao Cloudflare Workers:

Resumidamente, Workers permite que você execute códigos serverless em JS, Rust, C e C++ diretamente da borda Cloudflare. A grande vantagem é que o código é executado instantaneamente, sem 'cold starts' (0ms worldwide).

A página oficial do projeto é https://workers.cloudflare.com


### Customização dos Security Headers:

Como a Cloudflare não dispõe de recursos nativos para customizar os Security Headers, podemos nos valer do Workers para no momento do acesso executar primeiro nosso código em JS, e em seguida, repassar a execução para o servidor de destino.

Antes de colar o código JS no Workers, recomendo a revisão e customização dos security headers para atender as necessidades de segurança do seu site e/ou serviço.

````
let securityHeaders = {
	"Content-Security-Policy" : "default-src 'self'; frame-ancestors 'none'",
	"Strict-Transport-Security" : "max-age=31536000; includeSubDomains; preload",
	"X-Xss-Protection" : "1; mode=block",
	"X-Frame-Options" : "DENY",
	"X-Content-Type-Options" : "nosniff",
	"Referrer-Policy" : "no-referrer, strict-origin-when-cross-origin",
	"Permissions-Policy" : "geolocation=(), microphone=()",
	"Cache-Control" : "private, max-age=0, no-cache, no-store, must-revalidate",
	"Pragma" : "no-cache",
	"Content-Type" : "text/html; charset=UTF-8",
}
````

### Configuração e Ativação:

Acesse o painel de controle da Cloudflare e clique em Workers.

Em seguida, clique em Manage Workers.

Agora, clique em Create Workers, e na area esquerda da tela, cole o código [security-headers-cf.js](https://github.com/andalik/security-headers-cloudflare/blob/main/security-headers-cf.js).

Aproveite e renomeie o script para security-headers-cf e clique em Save and Deploy.

Novamente na tela do Workers, clique em Add route.

Em Route, especifique a url, por exemplo, www.andalik.com.br/*
e em Worker, selecione security-headers-cf

Clique em Save.

Pronto!
Para validar, acesse https://securityheaders.com
