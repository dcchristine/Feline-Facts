const TabButtons = ({ children,onSelect, isSelected }) =>{
   return( 
      <li>
         <button 
            className={isSelected ? "rounded py-2 px-5 bg-[#f5e7b2] text-[#973131]" :"hover:text-[#973131] hover:bg-[#f5e7b2d4] rounded py-2 px-5"} 
            onClick={onSelect}>{ children }</button>
      </li>
      
   );
};

export default TabButtons;