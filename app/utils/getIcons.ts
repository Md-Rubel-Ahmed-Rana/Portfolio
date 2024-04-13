import { IconType } from "react-icons";
import * as FaIcon from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { skillIcons } from "./skillsIcons";

export const getIcon = (iconName: string): IconType => {
  const iconKey = iconName.toLowerCase();

  let iconLibrary: any = FaIcon;
  const simpleIcons: any = SiIcons;
  const tablerIcons: any = TbIcons;
  if (skillIcons[iconKey] && simpleIcons[skillIcons[iconKey]]) {
    iconLibrary = SiIcons;
  } else if (skillIcons[iconKey] && tablerIcons[skillIcons[iconKey]]) {
    iconLibrary = TbIcons;
  }

  const IconComponent =
    iconLibrary[skillIcons[iconKey]] || FaIcon.FaQuestionCircle;

  return IconComponent;
};
