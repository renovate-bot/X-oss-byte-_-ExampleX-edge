# Static Files

### Build Output API

This Prebuilt Deployment example demonstrates how to output static files in a Deployment using the Build Output API.

The [`.vercel/output/static`](./.vercel/output/static) directory contains static files which will
be served globally by the [Vercel Edge Network](https://vercel.com/docs/concepts/edge-network/overview).

In this case, there are three static files which will be served at their respective paths within the `static` directory.
For example, the [`.vercel/output/static/another.html`](./.vercel/output/static/another.html) file will be served
from a `GET /another.html` HTTP request that is sent to the Deployment URL.