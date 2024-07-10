import Container from "../container/Containers";
import logo from "../assets/heroBannerImg.png"
const Header = () => {
   return(
      <div className="w-full fixed top-0 left-0 z-[1000] bg-[#F9D689] opacity-95">
         <Container>
            <div className="flex items-center justify-start p-4 gap-6">
               <img src={logo} alt="" className="bg-red-950 rounded-full h-auto w-[2rem]"/>
               <h1 className="text-2xl ultra">Feline Facts</h1>
            </div>
         </Container>
      </div>
   );
}

export default Header;