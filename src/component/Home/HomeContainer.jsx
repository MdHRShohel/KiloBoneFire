import AntiDrugCampaign from "./AntiDrugCampaign";
import Banner from "./Banner";
import BecomeAVolunteer from "./BecomeAVolunteer";
import BloodDonation from "./BloodDonation";
import ContactUs from "./ContactUs";
import CoPartners from "./CoPartners";
import DoNotNeedTrash from "./DoNotNeedTrash";
import FreeCounselling from "./FreeCounselling";
import FundRaising from "./FundRaising";
import SmallCounterBanner from "./SmallCounterBanner";
import Team from "./Team";
import UrgentHelp from "./UrgentHelp";
import YouthDevelopment from "./YouthDevelopment";

function HomeContainer() {
	return (
		<>
			<Banner />
			<AntiDrugCampaign />
			<FreeCounselling />
			<BloodDonation />
			<FundRaising />
			<YouthDevelopment />
			<DoNotNeedTrash />
			<SmallCounterBanner />
			<Team />
			<CoPartners />
			<ContactUs />
			<BecomeAVolunteer />
			<UrgentHelp />
		</>
	);
}

export default HomeContainer;
