import ImageBox from "../common/ImageBox";

const TeamCard = ({ member }) => (
  <div>
    <div className="aspect-[3/4] overflow-hidden">
      <ImageBox src={member.image} alt={member.name} />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
    <p className="text-sm text-accent">{member.role}</p>
  </div>
);

export default TeamCard;
