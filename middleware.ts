import { next } from "@vercel/edge";

export default function middleware(request: Request) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set a new header `x-hello-from-middleware1`
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // Use the `next()` function to forward the request with modified headers
  return next({
    request: {
      headers: requestHeaders,
    },
    headers: {
      "x-hello-from-middleware2": "hello",
    },
  });
}
