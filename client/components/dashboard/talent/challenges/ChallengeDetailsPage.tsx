import ChallengeDetails from "./ChallengeDetails";
import KeyInstructions from "./KeyInstructions";
import ChallengeNavbar from "./ChallengaNavbar"

const ChallengeDetailsPage: React.FC = () => {
    return (
        <div className="">
          <ChallengeNavbar />
          <div className="container mx-auto p-6 flex gap-6">
            <div className="w-2/3">
              <ChallengeDetails />
            </div>
            <div className="w-1/3">
              <KeyInstructions />
            </div>
          </div>
        </div>
      );
    };

export default ChallengeDetailsPage;
