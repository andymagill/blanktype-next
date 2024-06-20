# BlankType: Next.JS

A minimalist Next.js boilerplate for building custom web applications with a focus on performance, testing, and developer experience.

Author: Andrew Magill
Author Site: [https://magill.dev](https://magill.dev)
Author GitHub: [@andymagill](https://github.com/andymagill)

## Description

This repository serves as a starting point for greenfield Next.js projects. It includes a basic structure with placeholder content to demonstrate some typical methods, a comprehensive test suite with Vitest, and a toolkit to develop custom features. The project is set up with TypeScript for better code maintainability and type safety, and it leverages Next.js's built-in performance optimizations and server-side rendering capabilities.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering, static site generation, and performance optimizations
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds optional static typing
- [Vitest](https://vitest.dev/) - Blazing fast unit test runner powered by Vite
- [MDX](https://mdxjs.com/) - Markdown for the component era

## Features

- **Server-Side Rendering (SSR)**: Next.js provides out-of-the-box server-side rendering for improved performance and SEO.
- **Comprehensive Testing**: Vitest provides a fast and efficient testing environment for unit and integration tests.
- **MDX Support**: Write React components in Markdown with MDX for better content management and reusability.
- **SVG Support**: Import and use SVG files as React components with ease.
- **Bundle Analysis**: Analyze the generated bundles for optimization opportunities.

## Getting Started

1. Clone the repository: `git clone https://github.com/andymagill/blanktype-next.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Unit Testing

Run all Vitest unit tests with: `npm run test` or `yarn test`

### Bundle Analysis

To analyze the generated bundles: `npm run analyze` or `yarn analyze`

### Building for Production

To build the production-ready optimized bundle: `npm run build` or `yarn build`

### Linting

This project uses ESLint for code linting. Run the linter with: `npm run lint` or `yarn lint`

## Upstream Updates and Forks

If you want to use this project as a starting point for your own project, you can fork the repository on GitHub and then set the original repository as an "upstream" remote. This will allow you to pull in updates and bug fixes from the original repository into your forked version.

1. Fork the repository on GitHub.
2. Clone your forked repository: `git clone https://github.com/YOUR_USERNAME/blanktype-next.git`
3. Change to the project directory: `cd blanktype-next`
4. Add the original repository as an upstream remote: `git remote add upstream https://github.com/andymagill/blanktype-next.git`
5. To pull in updates from the upstream repository, run: `git pull upstream main`

By following these steps, you can keep your forked version of the project up-to-date with the latest changes from the original repository.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) when submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
