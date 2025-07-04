import Head from "next/head";

const defaultTitle = "Home";

type Props = {
  title: string;
  description: string;
  keywords: string;
};

const PageMetadata = ({
  title = defaultTitle,
  description,
  keywords,
}: Props) => {
  return (
    <Head>
      <title>{`${title} | Md Rubel Ahmed Rana | CMS`}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
};

export default PageMetadata;
