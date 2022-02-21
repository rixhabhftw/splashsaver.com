import Head from "next/head";

interface Props {
  description: string;
  title: string;
}

export const Seo = ({ description, title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" />
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={description} />
      <meta property="og:url" content="https://splashsaver.com/" />
      <meta property="og:site_name" content="Splashsaver" />
      <meta property="og:type" content="website" />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />
    </Head>
  );
};
