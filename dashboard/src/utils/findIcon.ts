import { ReactElement, createElement } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";

const iconPacks = {
  ...FaIcons,
  ...SiIcons,
  ...MdIcons,
  ...BiIcons,
  ...BsIcons,
  ...AiIcons,
  ...IoIcons,
  ...HiIcons,
  ...GiIcons,
  ...GoIcons,
  ...RiIcons,
  ...FiIcons,
  ...TbIcons,
  ...CgIcons,
  ...ImIcons,
  ...TiIcons,
  ...VscIcons,
  ...SlIcons,
  ...TfiIcons,
};

const findIcon = (iconName: string): ReactElement | null => {
  const IconComponent = iconPacks[iconName as keyof typeof iconPacks];
  if (!IconComponent) return null;
  return createElement(IconComponent);
};

export default findIcon;
