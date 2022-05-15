import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const links = [
  {
    refLink: "/",
    linkTitle: "Home",
  },
  {
    refLink: "blogs",
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
    refLink: "https://www.facebook.com/",
    refIcon: <FaFacebook />,
  },
  {
    refLink: "https://www.facebook.com/",
    refIcon: <FaTwitter />,
  },
  {
    refLink: "https://www.facebook.com/",
    refIcon: <FaInstagram />,
  },
  {
    refLink: "https://www.facebook.com/",
    refIcon: <FaLinkedin />,
  },
];
export { socialLinks, links };
