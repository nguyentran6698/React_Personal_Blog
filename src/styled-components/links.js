import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const links = [
  {
    refLink: "/",
    linkTitle: "Home",
  },
  {
    refLink: "blogs?categories=all",
    linkTitle: "Blogs",
  },

  {
    refLink: "contact",
    linkTitle: "Contact",
  },
  {
    refLink: "about",
    linkTitle: "About",
  },
];
const socialLinks = [
  {
    refLink: "facebook.com",
    refIcon: <FaFacebook />,
  },
  {
    refLink: "twitter.com",
    refIcon: <FaTwitter />,
  },
  {
    refLink: "twitter.com",
    refIcon: <FaInstagram />,
  },
  {
    refLink: "Linkedin.com",
    refIcon: <FaLinkedin />,
  },
];
export { socialLinks, links };
