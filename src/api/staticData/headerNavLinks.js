const headerNavLinks = {
  links: [
    { href: "/", title: "COMPANY", id: 0 },
    {
      href: "/",
      title: "SERVICES",
      submenu: [
        {
          href: "/",
          title: "Travel Catering",
          content:
            "Soar to new culinary heights with our travel catering services. With attention to detail and top-notch service, passengers will experience an excellent gourmet menu that reflects the prestige of your company. ",
          imgURL: "/images/serveImg.jpg",
        },
        {
          href: "/",
          title: "Corporates & Institutes",
          content:
            "We understand the unique demands of the professional, institutional and educational realms. CAFS finds delight in curating safe and healthy culinary experiences that not only meet but also exceed expectations.",
            imgURL: "/images/serveimgtwo.jpg",

        },

        {
          href: "/",
          title: "Retail Store Catering",
          content:
          "Our retail catering services offer a delightful blend of health and taste for your shelves. At CAFS, we understand the significance of offering your customers nourishing and wholesome options. We are setting a new standard for quality in retail catering.",
            imgURL: "/images/serveimgthree.jpg",

        },

      ],

      id: 1,
    },
    { href: "/", title: "INSIGHTS", id: 2 },
    { href: "/", title: "LOCATIONS ", id: 3 },
    { href: "/", title: "CAREERS ", id: 4 },
    { href: "/", title: "WHY CAFS", id: 5 },

    // { href: "/static/contact", title: "CONTACT US " },
  ],
  btn: {
    url: "/",
    title: "CONTACT US",
  },
};

export default headerNavLinks;
