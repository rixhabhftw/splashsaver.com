const withTM = require("next-transpile-modules")([
  "@splashsaver/ui",
  "@splashsaver/lib",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
});
