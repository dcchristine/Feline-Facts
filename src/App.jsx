import "./App.css"
import CatBreeds from "./components/CatBreeds";
import HeroBanner from "./components/HeroBanner";
import CatFoods from "./components/CatFoods";
import Header from "./components/Header";
import Footer from "./components/Footer"


const App = () => {
   return (
      <div className="pt-seriftext font-medium bg-[#E0A75E] text-[#973131]">
         <Header />
         <HeroBanner/>
         <CatBreeds/>
         <CatFoods/>
         <Footer />
      </div>
   );
}

export default App;