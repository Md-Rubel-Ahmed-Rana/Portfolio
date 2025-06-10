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
    <div className="flex justify-center flex-col items-center py-10 px-4 dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-4">Let’s Work Together!</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8 text-center">
        Looking to hire a passionate and experienced Full Stack JavaScript
        Developer? I&apos;d love to hear more about your project or opportunity.
        Fill out the form below and let&apos;s get in touch!
      </p>
      <WorkTogetherContactForm />
    </div>
  );
};

export default HireMeForm;
