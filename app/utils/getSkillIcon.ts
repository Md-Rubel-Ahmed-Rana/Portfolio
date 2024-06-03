import { IconType } from "react-icons";
import { reactIcons } from "../lib/react-icons";
import * as FaIcon from "react-icons/fa";

export const getSkillIcon = (skillIcons: any, iconName: string): IconType => {
  const iconKey = iconName.toLowerCase();

  for (const lib in reactIcons) {
    if (skillIcons[iconKey] && reactIcons[lib][skillIcons[iconKey]]) {
      return reactIcons[lib][skillIcons[iconKey]];
    }
  }

  return FaIcon.FaQuestionCircle;
};
