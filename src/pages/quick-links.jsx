import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";

import quickLinksData from "@site/config/quicklink/index.json"
import { enableMapSet } from "immer";

const QuickLinkIcon = ({ brand }) => {
    const icons = {
        betmgm: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729422/svg/brands/betmgm_rjkbeg.svg",
        borgata: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729426/svg/brands/borgata_ms2oh6.svg",
        partycasino: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729430/svg/brands/partycasino_ziqhts.svg",
        partypoker: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729434/svg/brands/partypoker_zm9fse.svg",
        wof: "https://res.cloudinary.com/dlfu36fiw/image/upload/v1717729438/svg/brands/wof_zglu4s.svg",
    }

    return icons[brand] ? <img className="w-7 h-7 p-0 m-0" src={icons[brand]} /> : null
}

const QuickLinkLabel = ({ depth, label }) => {
    const headingTags = ['h2', 'h3', 'h4', 'h5', 'h6', 'p'];
    const textSizes = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-md'];

    const HeadingTag = headingTags[depth] || 'p';
    const textSize = textSizes[depth] || 'text-md';

    return (
        <HeadingTag className={`mb-4 tracking-tight font-bold text-gray-900 dark:text-white ${textSize}`}>
            {label}
        </HeadingTag>
    );
};

const QuickLinksList = ({ quickLinks, depth = 0 }) => {
    console.log(quickLinks, depth)
    return (
        <>
            {
                quickLinks ? quickLinks.map((quickLink, index) => {
                    return (
                        <>
                            <div className="max-w-screen-md" key={index}>
                                {
                                    quickLink._template !== 'quickLink' ?
                                        <QuickLinkLabel depth={depth} label={quickLink.label} />
                                        : null
                                }
                                {
                                    quickLink.links && quickLink._template ?
                                        <>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                                                {
                                                    quickLink.links.map((link, index) => {
                                                        return link._template === 'quickLink' ?
                                                            <Link to={link.url} target="_blank" key={index}>
                                                                <div className="flex items-center p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-neutral-800 outline-offset-2 hover:outline-1 hover:outline outline-primary" role="alert">
                                                                    {link.brand ? <QuickLinkIcon brand={link.brand} /> : null}
                                                                    <p className=" ps-4 text-sm font-normal text-ellipsis overflow-hidden m-0 line-clamp-2">
                                                                        {link.label}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                            : null
                                                    })
                                                }
                                            </div>
                                        </>
                                        : null
                                }
                                {quickLink.links ? <QuickLinksList quickLinks={quickLink.links} depth={depth + 1} /> : null}
                            </div>
                        </>
                    )
                })
                    : null
            }
        </>
    )
}

export default function () {
    const { siteConfig } = useDocusaurusContext();

    const quickLinks = quickLinksData.quickLinksGroup

    console.log(quickLinks)
    return (
        <Layout title="Quick Links" description="Collection of frequently used Sitecore links, tools, and previews">
            <section
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dlfu36fiw/image/upload/v1717638160/hero-bg_mkts99.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
                className="bg-white dark:bg-[#333333] bg-cover bg-blend-multiply bg-fixed"
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-primary">
                        Quick Links
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        Collection of frequently used Sitecore links, tools, and previews
                    </p>
                </div>
            </section>

            <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <QuickLinksList quickLinks={quickLinks} />
            </section>
        </Layout>
    );
}
