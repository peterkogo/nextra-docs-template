import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
  head() {
    const { pathname } = useRouter();
    const { frontMatter } = useConfig();

    const title = frontMatter.title ?? pathname;

    return (
      <>
        <title>{title}</title>
        <Head title={title} />
      </>
    );
  },
};

const Head = ({ title }) => <title>{title}</title>;

export default config;
