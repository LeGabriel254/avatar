import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ name, role, paragraph, image }) => {
  return (
    <div className="bg-[#21293C] shadow-md rounded-lg p-6 text-center w-30">
      <p className="text-[#e3e4e5] mt-2 text-start">{paragraph}</p>
      <div className="md:flex md:items-end ">
        <img
          className="w-10 h-10 rounded-full items-end mt-4"
          src={image}
          alt={`${name} avatar`}
        />
        <h2 className="text-sm mt-2 ml-2 text-start font-semibold text-slate-300 object-left-bottom">{name} <br /> <span className="text-xs font-light text-slate-300">{role}</span></h2>
      </div>

    </div>
  )
};

export default Card;