import Image from "next/image";
import React from "react";


const HomeContent = ()=>{
    return(
        <div className="pt-5">
            <img
                width={450}
                height={480}
                src="/img/bg.png"
                className="mx-auto mt-7 sm:mt-7 md:mt-0"
              />
              <div className="block sm:block md:hidden">
                <div className="flex justify-center mt-5">
                  <div className="bg-[#FFFFFF] py-3 px-7 rounded-full">
                    <div className="flex gap-2">
                      <Image
                          height={20}
                          width={20}
                          src="/img/icons/plus.svg"
                          alt="plus icon"
                        />
                        <span className="text-[#52525B] text-base font-bold">
                          New Chat
                        </span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    );
}
export default HomeContent