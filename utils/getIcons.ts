import * as FaIcon from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { skillIcons } from "./skillsIcons";

export const getIcon = (iconName: string) => {
  const IconComponent =
    (skillIcons[iconName.toLowerCase()] &&
      FaIcon[skillIcons[iconName.toLowerCase()]]) ||
    SiIcons[skillIcons[iconName.toLowerCase()]] ||
    TbIcons[skillIcons[iconName.toLowerCase()]] ||
    FaIcon.FaQuestionCircle;

  return IconComponent;
};
