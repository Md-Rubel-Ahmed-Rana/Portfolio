import { useDeleteSkillMutation } from "@/features/skill.api";
import { ISkill } from "@/types/home.type";
import { Card } from "antd/lib";
import DeleteCardItemModal from "../common/DeleteCardItemModal";
import SkillEditModal from "./SkillEditModal";

type Props = {
  skill: ISkill;
};

const SkillCard = ({ skill }: Props) => {
  return (
    <Card
      title={skill?.name}
      variant={"outlined"}
      className="w-full shadow-md rounded-2xl"
      actions={[
        <SkillEditModal skill={skill} key={"edit"} />,
        <DeleteCardItemModal
          itemId={skill?.id}
          itemName={skill?.name}
          itemCategory="skill"
          key={"delete"}
          useReduxMutation={useDeleteSkillMutation}
        />,
      ]}
    >
      <p>
        <strong>Serial:</strong> {skill?.serial}
      </p>
      <p>
        <strong>Icon:</strong> {skill?.icon}
      </p>
    </Card>
  );
};

export default SkillCard;
