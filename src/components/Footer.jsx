import Container from "../container/Containers";

const Footer = () => {
   return(
      /* div.w-full>h1{lorem}.text-lg+p{lorem}*2 */
      <div className="w-full bg-[#973131] mt-10 py-10 text-[#F9D689]">
         <Container>
            <div className="flex flex-col items-center justify-center">
               <span className="text-2xl">All rights reserved</span>
               <span>Copyright 2024</span>
            </div>
         </Container>
      </div>
   );
}

export default Footer;
