import BuildingIcon from "@/icons/BuildingIcon";
export default function Home() {
  const isShopOpen = true;

  return (
    <div>
      <div className="flex px-3 py-4 max-w-[95%] align-middle m-auto">
        <h3 className="font-semibold text-lg">BarberShop</h3>
        <p className="ml-auto text-lg">Iniciar sesion</p>
      </div>
      <section className="shadow-lg mb-6">
        <div className="px-3 py-4 max-w-[95%] m-auto">
          <div className="flex gap-2 items-center">
            <div className="bg-[#e7e7e7] p-2 rounded-2xl ">
              <BuildingIcon size={62} />
            </div>
            <h1 className="text-2xl font-semibold">BarberShop</h1>
          </div>
          <strong>
            {isShopOpen ? (
              <span className="text-lime-800">Abierto</span>
            ) : (
              <span className="text-red-500">Cerrado</span>
            )}
          </strong>
          <span> (08:00 - 16:00) - España 765, Corrientes</span>
        </div>
      </section>
      <section className="px-3 py-4 max-w-[95%] m-auto border-b-[1px] pb-12">
        <h2 className="font-semibold text-3xl mb-4">Servicios</h2>

        <div>
          <div className="flex gap-2 border-[1px] p-2 items-center">
            <div className="bg-[#e7e7e7] p-2 rounded-2xl ">
              <BuildingIcon size={62} />
            </div>
            <div>
              <p className="font-semibold text-lg">Pelo</p>
              <a href="#" className="underline">
                Mostrar detalles &gt;
              </a>
            </div>
            <button className="ml-auto p-2 rounded-sm border-[1px] text-blue-400 border-blue-400">
              Reservar
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2 border-[1px] p-2 items-center">
            <div className="bg-[#e7e7e7] p-2 rounded-2xl ">
              <BuildingIcon size={62} />
            </div>
            <div>
              <p className="font-semibold text-lg">Pelo</p>
              <a href="#" className="underline">
                Mostrar detalles &gt;
              </a>
            </div>
            <button className="ml-auto p-2 rounded-sm border-[1px] text-blue-400 border-blue-400">
              Reservar
            </button>
          </div>
        </div>
      </section>
      <section className="px-3 py-4 max-w-[95%] m-auto border-b-[1px] pb-12">
        <span className="font-semibold text-3xl">Miembros del personal</span>
        <span className="text-3xl text-gray-500"> 2</span>
        <div className="grid grid-cols-5 gap-y-2 mt-4">
          <div className="gap-2 p-2 flex flex-col items-center">
            <div className="bg-[#e7e7e7] p-2 rounded-2xl w-fit">
              <BuildingIcon size={62} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg">Franco</p>
              <a href="#" className="underline">
                Reservar ahora &gt;
              </a>
            </div>
          </div>

          <div className="gap-2 p-2 flex flex-col items-center">
            <div className="bg-[#e7e7e7] p-2 rounded-2xl">
              <BuildingIcon size={62} />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg">Juan</p>
              <a href="#" className="underline">
                Reservar ahora &gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-4 max-w-[95%] m-auto grid grid-cols-[2fr,1fr] gap-4">
        <p className="font-semibold text-3xl mb-4 col-span-2">Sobre nosotros</p>
        <div>
          <p className="font-semibold text-2xl">Direccion</p>
          <iframe
            className="w-[80%]"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBj6APxS4pPJ6_xjs_zMlb0fVrM_8CcM-8&amp;q=La Rioja 765, Corrientes, AR"
            title="La Rioja 765, Corrientes, AR"
          ></iframe>
        </div>
        <div>
          <div>
            <p className="font-semibold text-2xl">Informacion de contacto</p>
            <span>37942666666</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-semibold text-2xl col-span-2">
              Horario de apertura
            </p>

            <span className="font-semibold">Domingo</span>
            <span> Cerrado</span>

            <span className="font-semibold">Lunes</span>
            <span> 08:00 - 16:00</span>

            <span className="font-semibold">Martes</span>
            <span> 08:00 - 16:00</span>

            <span className="font-semibold">Miercoles</span>
            <span> 08:00 - 16:00</span>
          </div>
        </div>
      </section>

      <footer className="text-center border-t-[1px] mt-12 py-4 text-lg">
        Made with 💖
      </footer>
    </div>
  );
}
