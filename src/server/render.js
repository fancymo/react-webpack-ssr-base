import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderMe, state) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Universal React Router 4 Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <link href="/static/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script>window.__initialState__ = ${JSON.stringify(state)};</script>
        <script src="/static/client.js"></script>
    </body>
</html>`;
