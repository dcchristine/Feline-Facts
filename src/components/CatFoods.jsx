import Container from "../container/Containers";
import { CAT_FOODS } from "../data.js";
import Foods from "./Foods";

const CatFoods = () => {
   return (
      <Container>
         <div className="bg-[#973131] text-[#F9D689] p-10 gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {CAT_FOODS.map((items) =>
               (<Foods key={items.name} {...items} />)
            )}
         </div>
      </Container>

   );
};

export default CatFoods;