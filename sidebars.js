/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /* buildsSidebar: [{ type: "autogenerated", dirName: "." }],
  ticketsSidebar: [{ type: "autogenerated", dirName: "." }], */
  // But you can create a sidebar manually

  buildsSidebar: [
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Prerequisites</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Assets",
      items: ["builds/assets-request", "builds/assets-uploading"],
      link: { type: "doc", id: "builds/assets-introduction" },
    },
    {
      type: "doc",
      id: "builds/documents",
    },
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Product Categories</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Casino",
      items: [
        "builds/casino-carousel",
        "builds/casino-odrBanner",
        "builds/casino-mpp",
      ],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "category",
      label: "Poker",
      items: [
        "builds/poker-carousel",
        {
          type: "category",
          label: "Tournaments",
          items: [
            "builds/poker-tournaments-page",
            "builds/poker-tournaments-nav",
          ],
          link: {
            type: "generated-index",
          },
        },
        "builds/poker-clientOverlay",
        "builds/poker-banners",
      ],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "category",
      label: "Sports",
      items: ["builds/sports-core"],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "html",
      value:
        "<div class='divider'><span class='divider__inner'>Common Components</div>",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Rest ID",
      items: [
        "builds/restId-promohub",
        "builds/restId-inbox",
        "builds/restId-overlay",
        "builds/restId-toaster",
        "builds/restId-cta",
      ],
      link: {
        type: "generated-index",
      },
    },
    {
      type: "doc",
      id: "builds/staticTile",
    },
    {
      type: "category",
      label: "Engagements",
      link: {
        type: "generated-index",
      },
      items: ["builds/engagements-stw", "builds/engagements-pab"],
    },
    {
      type: "doc",
      id: "builds/landing-page",
    },
  ],
  ticketsSidebar: [
    "tickets/monday",
    "tickets/workfront",
    {
      type: "category",
      label: "Ticket Details",
      items: ["tickets/details-brand", "tickets/details-state"],
      link: {
        type: "generated-index",
      },
    },
  ],
  toolsSidebar: ["tools/htmlTidy", "tools/textCompare", "tools/restIdQaTool"],
  /* teamSidebar: [],
  toolsSidebar: [], */
};

export default sidebars;
