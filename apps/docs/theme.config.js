// eslint-disable-next-line import/no-anonymous-default-export
export default {
  github: 'https://github.com/splashsaver/splashsaver.com ',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Splashsaver Documentation',
  logo: (
    <>
      <span
        style={{ fontWeight: 600 }}
        className="mr-2 text-lg font-bold hidden md:inline"
      >
        splashsaver.com docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Docs" />
      <meta name="og:description" content="Docs" />
      <meta name="og:title" content="Documentation - Splashsaver" />
      <meta name="apple-mobile-web-app-title" content="Splashsaver" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()}</>,
}
