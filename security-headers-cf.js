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

let sanitiseHeaders = {
	"Server" : "headers override",
}

let removeHeaders = [
	"Public-Key-Pins",
	"X-Powered-By",
	"X-AspNet-Version",
]

addEventListener('fetch', event => {
	event.respondWith(addHeaders(event.request))
})

async function addHeaders(req) {
	let response = await fetch(req)
	let newHdrs = new Headers(response.headers)

	if (newHdrs.has("Content-Type") && !newHdrs.get("Content-Type").includes("text/html")) {
        return new Response(response.body , {
            status: response.status,
            statusText: response.statusText,
            headers: newHdrs
        })
	}

	Object.keys(securityHeaders).map(function(name, index) {
		newHdrs.set(name, securityHeaders[name]);
	})

	Object.keys(sanitiseHeaders).map(function(name, index) {
		newHdrs.set(name, sanitiseHeaders[name]);
	})

	removeHeaders.forEach(function(name){
		newHdrs.delete(name)
	})

	return new Response(response.body , {
		status: response.status,
		statusText: response.statusText,
		headers: newHdrs
	})
}
