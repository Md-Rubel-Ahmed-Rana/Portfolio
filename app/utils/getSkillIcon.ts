import { IconType } from "react-icons";
import { reactIcons } from "../lib/react-icons";
import * as FaIcon from "react-icons/fa";

export const getSkillIcon = (iconName: string): IconType | undefined => {
  for (const pack of Object.values(reactIcons)) {
    if (iconName in pack) {
      return pack[iconName] as IconType;
    }
  }
  return FaIcon.FaQuestionCircle;
};
