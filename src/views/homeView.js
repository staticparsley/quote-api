export function renderHomePage() {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NERV Quote API</title>
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

          h1 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            margin-bottom: 0.5rem;
          }

          p {
            color: #aaa;
            font-size: 1.1rem;
          }

          code {
            background: #222;
            color: #fff;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
          }

          li {
            margin: 0.5rem 0;
          }

          a {
            color: #9ad;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>NERV Quote API</h1>
          <p>Message of the Day quote service for the NERV homelab.</p>

          <h2>Endpoints</h2>
          <ul>
            <li><code>GET /quote</code> — random quote as HTML or JSON</li>
            <li><code>GET /health</code> — health check</li>
          </ul>

          <p>
            Try <a href="/quote"><code>/quote</code></a>.
          </p>
        </main>
      </body>
    </html>
  `;
}