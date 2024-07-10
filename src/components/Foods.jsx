
const Foods = ({name, img, description }) => {
   return(
      <li className="list-none flex flex-col gap-12">
         <h2 className="text-4xl ultra text-[#E0A75E]">{name}</h2>
         <img src={img} />
         <p className="text-[#F5E7B2]">{description}</p>
      </li>
   );
};

export default Foods;