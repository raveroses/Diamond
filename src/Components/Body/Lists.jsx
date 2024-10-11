import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";

const lists = [
  {
    id: 1,
    icon: <IoMdHome />,
    name: "Home",
  },
  {
    id: 2,
    icon: <SiYoutubeshorts />,
    name: "Shorts",
  },
  {
    id: 3,
    icon: <MdSubscriptions />,
    name: "Subscription",
  },
  {
    id: 4,
    icon: <RiVideoLine />,
    name: "Your Video",
  },
];

export default lists;
