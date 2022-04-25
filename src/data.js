// import imgSrc from "./img/testPic/pic_2.jpeg";
import dateFormat from "dateformat";
const now = new Date();
export const blogSample = [
  {
    id: 1,
    featured: true,
    title: "what do you think about computer science",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "./img/testPic/pic_4.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 4,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
  {
    id: 2,
    featured: true,
    title: "what do you think about Artificial Intelligence",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "./img/testPic/pic_2.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 7,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
  {
    id: 3,
    featured: false,
    title: "How To Save your money when doing CPT",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "./img/testPic/pic_6.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 4,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
  {
    id: 4,
    featured: true,
    title: "Apply what you learn in school will help you in the future",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "./img/testPic/pic_5.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 4,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
  {
    id: 5,
    featured: true,
    title: "Keep your healthy life style if you need to live longer",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "../../img/testPic/pic_4.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 4,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
  {
    id: 6,
    featured: true,
    title: "Keep your healthy life style if you need to live longer",
    public_date: dateFormat(now, "mmmm dd, yyyy"),
    img: "../../img/testPic/pic_4.jpeg",
    post_content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
    nb_likes: 4,
    comments: {
      nb_comment: 1,
      comment: {
        comment_title: "I love this post",
        comment_content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic quis dolore assumenda voluptatem molestiae corrupti rem, praesentium consequatur a consequuntur, quasi exercitationem aliquam odio modi nihil iste in beatae ab obcaecati consectetur totam voluptate facilis. Nisi praesentium, veritatis, sit modi nesciunt vero id ducimus sed vel officia temporibus reprehenderit.",
      },
    },
  },
];
