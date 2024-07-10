import Containers from "../container/Containers";
import heroBannerImg from "../assets/heroBannerImg.png"
const HeroBanner = () => {
   const siteDescription =["Welcome to Feline Facts, your go-to single-page app for everything cats! Here, you'll find a concise yet comprehensive collection of facts about different cat breeds, their behaviors, and essential care tips.","Our streamlined interface ensures quick and easy access to expert advice, fun trivia, and fascinating insights about felines. Perfect for both cat lovers and newcomers alike, Feline Facts is designed to enhance your understanding and appreciation of these wonderful creatures.","Welcome to Feline Facts, your ultimate single-page app dedicated to everything feline! This app offers a rich collection of facts about various cat breeds, insights into their unique behaviors, and essential care tips. With our user-friendly design, you can easily navigate through expert advice, interesting trivia, and captivating stories all on one page. "]

   function getIndex(max){
      return Math.floor(Math.random() * (max+1));
   }

   return(
      <Containers>
         <div className="flex items-center justify-center gap-10 py-20 text-[#973131] bg-gradient-to-r from-[#E0A75E] via-[#F9D689] to-transparent flex-col md:flex-row" >
            <img src={heroBannerImg} alt="" className="w-56 h-auto"/>
            <div className="w-1/2 flex flex-col gap-5 ">
               <h1 className="text-6xl ultra font-bold">Feline Facts</h1>
               <p className="pt-seriftext font-medium"> { siteDescription[getIndex(siteDescription.length-1)] } Dive in and explore the captivating world of cats all in one convenient page!</p>
               
            </div>
         </div>
      </Containers>
   );
};

export default HeroBanner;