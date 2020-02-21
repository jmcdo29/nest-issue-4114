# Nest Issue 4114 Minimum Reproduction

A simple server set up to reproduce the functionality in [Issue 4114](https://github.com/nestjs/nest/issues/4114).

## Disclaimer

I'm not 100% convinced this is a bug rather than expected functionality after running multiple Nest Factories. It feels like a better solution would be to use the [Nest-Router](https://github.com/nestjsx/nest-router) package, or something along those lines.

## Reproduction steps

1) `git clone`
2) `npm i`
3) `npm run start:dev` or `npm run build && npm run start` (or the `yarn` variants)
4) `curl http://localhost:3000/admin/admin` and view the `admin get` returned
5) `curl http://localhost:3000/api/api` and view the 404 returned

## Other

It looks like both the `/admin/admin/` and `/api/api` routes are registered with Express, after logging the server and removing the middleware, you can see the routes printed as such:

```js
[
  {
    regexp: /^\/admin\/admin\/?$/i { fast_star: false, fast_slash: false },
    route: Route { path: '/admin/admin', stack: [Array], methods: [Object] }
  },
  {
    regexp: /^\/api\/api\/?$/i { fast_star: false, fast_slash: false },
    route: Route { path: '/api/api', stack: [Array], methods: [Object] }
  }
]
```

That makes it seem like it could be something with the underlying adapter. This has not been tested with fastify yet.