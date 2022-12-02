<p align="center">
<p align="center">
<img width="150" height="150" src="https://github.com/splashsaver/splashsaver.com/blob/main/packages/assets/GradientLogo.png" alt="Logo">
</p>
<h1 align="center"><b>Splashsaver</b></h1>
<p align="center">Making managing your startup team easy.
<br />
<a href="https://www.splashsaver.com/" target="_blank"><strong>splashsaver.com »</strong></a>
</p>
</p>

> Important: Right I'm facing multiple issues with the monorepo being unable to build, development has stopped for now until a fix is found. [Click here to learn more about the issue](https://github.com/vercel/next.js/discussions/43577).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Getting started

> NOTE: Splashsaver is still in active development.

To run the monorepo locally on your machine, please follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)

## Development

1. Clone the GitHub repository by clicking the "Code" green button and copy the link ([https://github.com/splashsaver/splashsaver.com.git](https://github.com/splashsaver/splashsaver.com.git)).

```
https://github.com/splashsaver/splashsaver.com.git
```

<img width="424" alt="Screenshot 2022-11-30 at 15 07 04" src="https://user-images.githubusercontent.com/101022772/204834012-a4f43f9a-a78a-4a67-9861-a6c88773fcfb.png">

> If you plan to make contributions then make sure to fork the repository to your personal account and clone your version instead.

2. Navigate to the `splashsaver.com` directory.

```sh
cd splashsaver.com
```

3. Install the missing packages with yarn.

```
yarn
```

4. Set up your environment variables.

- Create a `.env` file
- Copy the keys into the `.env` file and fill in the appropriate values.

> Please be sure to DM on [Discord](https://discord.com/) if you're having problems setting up your `.env` file.

> Discord username: Nicholas#0050

5. Run the monorepo.

```
yarn dev
```

## Structure:

### Apps:

- `docs`: Our official developers documentation.
- `landing`: The landing page written in [Next.js](https://nextjs.org/).
- `web`: The main web page.

### Packages:

- `assets`: Our official developers documentation.
- `config`: Configurations used throughout the monorepo.
- `eslint-config-custom`: ESLint configurations used throughout the monorepo.
- `lib`: Our library package containing helper functions and constants.
- `tsconfig`: TypeScript configurations used throughout the monorepo.
- `ui`: Shared component library.
