import { useGetHomeDataQuery } from "@/features/home.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IPersonalInfo } from "@/types/home.type";
import BannerImage from "./BannerImage";
import Personals from "./Personals";
import SocialLinks from "./SocialLinks";

const PersonalInfo = () => {
  const { data, isLoading } = useGetHomeDataQuery({});
  const personalData = data?.data as IPersonalInfo;

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="space-y-6 flex flex-col gap-4">
          <Personals data={personalData} />

          <BannerImage
            id={personalData?.id}
            imageLink={personalData?.bannerImage}
          />

          <SocialLinks
            id={personalData?.id}
            links={personalData?.socialLinks}
          />
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
