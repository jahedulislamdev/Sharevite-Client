import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { ContentLoading } from "../../Components/Loading/Loading";
import ContentError from "../Error/ContentError";

const EditCampaigns = () => {
   // load campaign using id from params
   const { id } = useParams();
   const { data: campaign, isLoading, error } = useGetData(`project/${id}`, "singleCampaign");
   if (isLoading) return <ContentLoading />;
   if (error) return <ContentError />;
   console.log(campaign);





   return (
      <div></div>
   );
};

export default EditCampaigns;