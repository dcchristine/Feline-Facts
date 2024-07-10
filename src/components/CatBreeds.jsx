import { useState } from "react";
import Container from "../container/Containers";
import TabButtons from "./TabButtons";
import { CAT_BREED_INFORMATION } from "../data.js";

const CatBreeds = () =>{
   let [selectedBreed, setSelectedBreed] = useState("puspin");
   function selectHandler(selectedButton){
      setSelectedBreed(selectedButton);
   };

   return(
      <Container>
         <section className="bg-[#973131] text-[#F5E7B2] flex flex-col items-center">
            <h1 className="text-3xl font-bold p-4 text-center text-[#E0A75E]">Top Preferred Cat Breeds in the Philippines</h1>
            <menu className="w-full p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
               <TabButtons onSelect={() => selectHandler("puspin")} isSelected={selectedBreed==="puspin"}>
                  Puspin
               </TabButtons>
               <TabButtons onSelect={() => selectHandler("persian")} isSelected={selectedBreed==="persian"}>
                  Persian
               </TabButtons>
               <TabButtons onSelect={() => selectHandler("siamese")} isSelected={selectedBreed==="siamese"}>
               Siamese
               </TabButtons>
               <TabButtons onSelect={() => selectHandler("britishShorthair")} isSelected={selectedBreed==="britishShorthair"}>
               British Shorthair
               </TabButtons>
               <TabButtons onSelect={() => selectHandler("ragdoll")} isSelected={selectedBreed==="ragdoll"}>
                  Ragdoll
               </TabButtons>

            </menu>
            {!selectedBreed ? 
               (<p>Please select a breed</p>) : (
               <div className="w-full p-10 flex flex-col-reverse md:flex-row items-center justify-center text-[#973131] bg-gradient-to-r from-[#E0A75E] via-[#F9D689] to-[#E0A75E]">
                  <div className="my-4">
                     <h1 className="text-4xl bg-[#973131] text-[#E0A75E] p-5 mb-4 ultra">{ CAT_BREED_INFORMATION[selectedBreed].breedName } Cat</h1>
                     <h2 className="text-xl">Origin : { CAT_BREED_INFORMATION[selectedBreed].origin }</h2>
                     <h2>Lifespan :{ CAT_BREED_INFORMATION[selectedBreed].lifeSpan }</h2>
                     <p className="text-sm my-5">{ CAT_BREED_INFORMATION[selectedBreed].description }</p>
                     <p className="text-sm">{ CAT_BREED_INFORMATION[selectedBreed].funFact }</p>
                  </div>
                  <img src={CAT_BREED_INFORMATION[selectedBreed].img} alt="Cat Photo" className="h-auto w-2/4 "/>
               </div>
               )
            }
            
         </section>
      </Container>
   );
}

export default CatBreeds;