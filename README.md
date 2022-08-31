# remix-vanilla-extract-prototype

If you want to use [vanilla-extract](https://vanilla-extract.style) with [Remix,](https://remix.run) this is one way you could do it.

The Remix team have said they're interested in providing official support for vanilla-extract, but this could work in the meantime with a few tradeoffs.

## Usage

This project uses [pnpm.](https://pnpm.io) First, install dependencies.

```bash
pnpm install
```

To run the dev server.

```bash
pnpm dev
```

To check the production build.

```bash
pnpm build
pnpm start
```

## Tradeoffs

- A separate [tsup](https://github.com/egoist/tsup) process is needed to generate CSS + JS + types since we can't hook into the Remix compiler.
- All styles from `.css.ts` files need to be manually re-exported from `/styles/index.ts`. This is then compiled into `/app/styles`. You can think of it as maintaining a style manifest file. This step could potentially be automated.
- As a result of the previous point, your Remix code always needs to import styles from `~/styles`, even if the `.css.ts` file is in the same directory. If you don't do this, your vanilla-extract styles won't be compiled properly as they will go directly through the Remix compiler.
- All styles are built into a single `index.css` file in `/app/styles` which your root route needs to include.
- You can keep the file size down using [Sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles) which generates compression-friendly atomic CSS. You can then access these classes at runtime via the type-safe `sprinkles` function, which can also be wired up to a `Box` component. This prototype includes a basic example of a Box component using [Dessert Box.](https://github.com/TheMightyPenguin/dessert-box)
- This particular solution works within a single project, but doesn't scale well to a design system shared across multiple projects that require tree shaking of unused styles. You might be able to create a more complicated architecture that works about this, but this is why an official Remix integration would be preferred in the long run.

## Contributing

This is a very rough prototype and hasn't been used in a production setting. If you've got any suggestions for how to improve this, please [let me know on Twitter.](https://twitter.com/markdalgleish)

## License

MIT.
