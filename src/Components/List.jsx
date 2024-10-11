import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import {
  RiContactsBookLine,
  RiPlayList2Fill,
  RiVideoLine,
} from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";

const List = [
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
    icon: <RiContactsBookLine />,
    name: "Your Channel",
  },
  {
    id: 5,
    icon: <FaHistory />,
    name: "History",
  },
  {
    id: 6,
    icon: <RiPlayList2Fill />,
    name: "Playlist",
  },
  {
    id: 7,
    icon: <RiVideoLine />,
    name: "Your Video",
  },
  {
    id: 8,
    icon: <MdOutlineWatchLater />,
    name: "Watch Later",
  },
  {
    id: 9,
    icon: <AiFillLike />,
    name: "Liked Video",
  },
];

export default List;
