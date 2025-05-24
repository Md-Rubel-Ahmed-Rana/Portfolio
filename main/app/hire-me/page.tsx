import WorkTogetherContactForm from "../components/WorkTogetherContactForm";
import { developerSkillDescription } from "../constants/seo";

export async function generateMetadata() {
  return {
    title: `Let's connect!`,
    description: developerSkillDescription,
  };
}

const HireMeForm = async () => {
  return (
    <div className="flex justify-center flex-col items-center py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Let’s Work Together!</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Looking to hire a passionate and experienced Full Stack JavaScript
        Developer? I’d love to hear more about your project or opportunity. Fill
        out the form below and let’s get in touch!
      </p>
      <WorkTogetherContactForm />
    </div>
  );
};

export default HireMeForm;
