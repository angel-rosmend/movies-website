import { Footer } from "@/client/presentation/components/Footer/Footer";


export default async function FooterSSR() {
 const footerData = {
  itemsMainSection: [
    {
      title: { label: "Home", url: "#" },
      links: [
        { label: "Categories", url: "#" },
        { label: "Devices", url: "#" },
        { label: "Pricing", url: "#" },
        { label: "FAQ", url: "#" },
      ],
    },
    {
      title: { label: "Movies", url: "#" },
      links: [
        { label: "Gernes", url: "#" },
        { label: "Trending", url: "#" },
        { label: "New Release", url: "#" },
        { label: "Popular", url: "#" },
      ],
    },
    {
      title: { label: "Shows", url: "#" },
      links: [
        { label: "Gernes", url: "#" },
        { label: "Trending", url: "#" },
        { label: "New Release", url: "#" },
        { label: "Popular", url: "#" },
      ],
    },
    {
      title: { label: "Support", url: "#" },
      links: [{ label: "Contact Us", url: "#" }],
    },
    {
      title: { label: "Subscription", url: "#" },
      links: [
        { label: "Plans", url: "#" },
        { label: "Features", url: "#" },
      ],
    },
  ],
  itemsBottomSection: [
    { label: "Terms of Use", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "Cookie Policy", url: "#" },
  ],
  brandEmail: "mailto:example@email.com",
  social: [
    { type: "facebook", url: "#" },
    { type: "twitter", url: "#" },
    { type: "linkedin", url: "#" },
  ],
  copyright: "©2023 streamvib, All Rights Reserved",
};

  return <Footer {...footerData}/>
}
