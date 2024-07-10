import puspinImg from "./assets/puspin-freepik.png"
import persianImg from "./assets/persian-pexels-feyzayildirimphoto.png"
import britishShorthairImg from "./assets/british-shorthair-pexels-kirsten-buhne.png"
import ragdollImg from "./assets/ragdoll-pexels-ivaivo.png"
import siameseImg from "./assets/siamese-pexels.png"
import fish from "./assets/tilapia.png"
import chicken from "./assets/chicken.png"
import squash from "./assets/squash.png"
import spinach from "./assets/spinach.png"

export const CAT_BREED_INFORMATION = {
   puspin:{
      breedName : "Puspin",
      origin: "Philippines",
      lifeSpan: "12-16 years",
      description: "The Puspin, or Pusang Pinoy, is the term for native mixed-breed cats in the Philippines. They are typically medium-sized with short to medium coats, and they come in various colors and patterns. These cats are known for their resilience, adaptability, and friendly nature.",
      funFact: "Puspins are often street cats and are well-loved in Filipino households for their charming personalities and low-maintenance care.",
      img:puspinImg
   },
   persian:{
      breedName : "Persian",
      origin: "Iran (Persia)",
      lifeSpan: "12-17 years",
      description: "Persian cats are known for their long, luxurious coats, round faces, and short muzzles. They have a calm and gentle temperament, making them ideal indoor pets. Their coats require regular grooming to prevent matting.",
      funFact: "Persians are one of the oldest cat breeds and have been featured in various artworks and literature throughout history.",
      img:persianImg
   },
   siamese:{
      breedName : "Siamese",
      origin: "Thailand (formerly Siam)",
      lifeSpan: "10-15 years",
      description: "Siamese cats are sleek and elegant with a distinctive color-point pattern, blue almond-shaped eyes, and a short coat. They are highly social, vocal, and intelligent, often forming strong bonds with their owners.",
      funFact: "Siamese cats are known for their \"talkative\" nature, often engaging in conversations with their owners using a unique, loud voice.",
      img:siameseImg
   },
   britishShorthair:{
      breedName : "British Shorthair",
      origin: "United Kingdom",
      lifeSpan: "12-20 years",
      description: "British Shorthairs are sturdy and muscular cats with a dense, plush coat and a round face. They are calm, easygoing, and make excellent companions. They come in a variety of colors, with the blue (gray) variant being particularly popular.",
      funFact: "The British Shorthair is one of the most ancient cat breeds, believed to have been brought to Britain by the Romans.",
      img:britishShorthairImg
   },
   ragdoll:{
      breedName : "Ragdoll",
      origin: "United States",
      lifeSpan: "12-17 years",
      description: "Ragdolls are large, affectionate cats with semi-longhair coats and striking blue eyes. They are known for their docile and relaxed temperament, often going limp when picked up, hence the name \"Ragdoll.\"",
      funFact: "Ragdolls are often referred to as \"puppy-like\" cats because of their tendency to follow their owners around and their friendly, social nature.",
      img:ragdollImg
   },
   
};

export const CAT_FOODS = [
   {
      name:"Cooked Fish",
      description:"Cooked fish like bangus (milkfish) or tilapia is an excellent source of protein and omega-3 fatty acids. These nutrients support a cat's overall health, including its skin, coat, and heart. Ensure the fish is thoroughly cooked and free of bones before serving.",
      img:fish
   },
   {
      name:"Leafy Greens",
      description:"Spinach is rich in vitamins A, C, and K, as well as iron and calcium. It has antioxidant properties and can be beneficial for a cat's immune system. Fresh spinach should be washed thoroughly and steamed before being finely chopped and mixed into your cat's food in small amounts.",
      img:spinach
   },
   {
      name:"Cooked Chicken",
      description:"Cooked chicken is a staple protein source for cats. It is lean, easily digestible, and provides essential amino acids. Be sure to remove bones and skin before serving to avoid any choking hazards and excess fat.",
      img:chicken
   },
   {
      name:"Kalabasa (Squash)",
      description:"Kalabasa, or squash, is high in fiber and can aid in digestion. It also contains vitamins A and C, which are beneficial for a cat's vision and immune system. Cooked and mashed squash can be mixed into your cat's regular food.",
      img:squash
   }];