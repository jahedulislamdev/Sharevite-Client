import { useSearchParams } from "react-router-dom";
import VolunteerForm from "./VolunteerForm";
import RegulerDonatorForm from "./RegulerDonatorForm";
import LifetimeMemberForm from "./LifetimeMemberForm";
import JobNotice from "./Career/JobNotice";

const JoinUsMain = () => {
   const [searchPerameter] = useSearchParams();
   const formType = searchPerameter.get("form")

   // dynamic page render
   switch (formType) {
      case "volunteer": return <VolunteerForm />;
      case "regulerDoner": return <RegulerDonatorForm />;
      case "lifetimeMember": return <LifetimeMemberForm />;
      case "career": return <JobNotice />
   }
   return (
      <div className="md:w-11/12 mx-auto p-4">
         <p>Start Your Holy Journy with us</p>
         <VolunteerForm />
      </div>
   );
};

export default JoinUsMain;