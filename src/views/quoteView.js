export function renderQuotePage(quote) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NERV Quote</title>
        <style>
          body {
            background: #111;
            color: #eee;
            font-family: system-ui, sans-serif;
            display: grid;
            place-items: center;
            min-height: 100vh;
            margin: 0;
          }

          main {
            max-width: 760px;
            padding: 2rem;
          }

          blockquote {
            font-size: clamp(2rem, 5vw, 4rem);
            line-height: 1.1;
            margin: 0 0 1.5rem;
          }

          p {
            color: #aaa;
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <main>
          <blockquote>“${quote.text}”</blockquote>
          <p>— ${quote.source}</p>
        </main>
      </body>
    </html>
  `;
}