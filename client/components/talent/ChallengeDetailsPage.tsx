import ChallengeDetails from "./ChallengeDetails";
import KeyInstructions from "./ChallengeKetInstraction";

const TalentChallengeDetailsPage: React.FC = () => {
    return (
        <div className="">
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

export default TalentChallengeDetailsPage;