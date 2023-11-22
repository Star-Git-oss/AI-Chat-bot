import React from "react"
import Item from "../../sidebar/right/Item"

interface DrawerProps {
  isRightDrawer: boolean; 
  setRightDrawer: (isOpen: boolean) => void
}

const RightDrawer: React.FC<DrawerProps> = ({ isRightDrawer, setRightDrawer }) => {
  return (
    <div
      
      className={`${
        isRightDrawer ? 'translate-x-0' : 'translate-x-full'
      } fixed top-0 right-0 w-full h-full shadow-lg transform transition-transform duration-300 ease-in-out z-1000`}
      style={{zIndex:1000}}
    >
      <div className="flex h-full w-400">
            <div 
                onClick={()=>setRightDrawer(!isRightDrawer)} 
                className="w-3/12 min-w-fit min-h-fit bg-disable"
            >  
            </div>
            <div className="w-9/12 min-h-full bg-white relative bg-image" style={{zIndex:"1000"}}>
                <div className="pt-2 pl-2 h-full overflow-y-scroll overflow-hidden">
                    <div className="h-8">
                        <h3 className="text-[#52525B] text-[15px] font-bold">AI Feelings</h3>
                    </div>
                    <ul>
                        { ["bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]", "bg-[#E2F1EB]", "bg-[#DAE8F3]", "bg-[#FEE7E3]"]
                            .map((item, index)=><Item key={index} bg={item}/>)}
                    </ul>
                </div>
                <div className="absolute block sm:block md:hidden top-1/2 left-[-25px]" style={{zIndex:"-1", marginLeft:"5px"}}>
                        <div 
                            onClick={()=>setRightDrawer(!isRightDrawer)} 
                            className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full cursor-pointer"
                        >
                            <img
                                style={{marginRight:"18px"}}
                                height={22}
                                width={22}
                                src="/img/icons/left-arrow.svg"
                            />
                        </div>
                </div>
            </div>
           
        </div>
    </div>
  );
};

export default RightDrawer;
