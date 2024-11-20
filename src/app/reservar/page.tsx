import React from "react";
import BuildingIcon from "@/icons/BuildingIcon";

function Reservar() {
  return (
    //linear-gradient(90deg, white 50%, #f7f7f7 50%)
    <div className="from-white from-50% to-[#f7f7f7] to-50% bg-gradient-to-r w-full">
      <div className="grid grid-cols-[58%_42%] py-4 max-w-screen-xl m-auto">
        <a href="#" className="col-span-2">
          &lt; Volver
        </a>
        <div>
          <h1 className="text-3xl font-semibold">
            Elige un miembro del personal
          </h1>
          <div className="grid grid-cols-3 mt-4 gap-3">
            <div className="flex flex-col items-center border-[1px] p-4">
              <div className="bg-[#e7e7e7] p-2 rounded-2xl w-fit">
                <BuildingIcon size={62} />
              </div>
              <p className="font-semibold text-lg">
                Cualquier persona disponible
              </p>
            </div>
            <div className="flex flex-col items-center border-[1px] p-4">
              <div className="bg-[#e7e7e7] p-2 rounded-2xl w-fit">
                <BuildingIcon size={62} />
              </div>
              <p className="font-semibold text-lg">Franco</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] p-6">
          <h1 className="text-3xl font-semibold">Resumen</h1>
        </div>
      </div>
    </div>
  );
}

export default Reservar;
