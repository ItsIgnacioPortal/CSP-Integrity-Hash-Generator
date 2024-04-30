# CSP-Hash-Generator
Javascript to quickly generate CSP hashes for all script/style elements in a website.

1. Copy the source code of [main.js](main.js)
2. Open the website you want to generate the SHA-256 integrity hashes for.
3. Open the browser's developer console.
4. Paste the code into the developer console.
5. Press enter.

The results will be logged to the browser's console via console.log in messages like:
```
Style Hash for: <style>
Code snippet:

			:where([data-hydro-view*="pull-request-hovercard-hover"] ~ .d-flex.mt-2):not(.rgh-seen--8093118031) {
				animation: 1ms rgh-selector-observer;

The SHA-256 for this style is: sha256-iYiB5NAARSnEd19sfwObvGTjyh4xG4zFPcenZcpB40I=
```