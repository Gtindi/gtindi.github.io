import Head from "next/head";

export const Header = ({ seo }) => {
	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="title" content={seo.title} />
			<meta name="author" content={seo.author} />
			<meta name="description" content={seo.description} />
			<meta name="keywords" content={seo.keywords.join(", ")} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={seo.url} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:site_name" content={seo.title} />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={seo.url} />
			<meta property="twitter:title" content={seo.title} />
			<meta property="twitter:description" content={seo.description} />
			<meta property="twitter:image" content={seo.image} />
			<meta name="robots" content="Index" />
		</Head>
	);
};
