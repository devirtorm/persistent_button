// HomePage.jsx
import React from "react";
import Brand from "@/components/Brand";
import PersistentButton from "@/components/PersistentButton";

function HomePage() {
  return (
    <>
      <PersistentButton />
      <div className="flex flex-col md:flex-row justify-center items-center h-screen space-y-4 md:space-y-0 md:space-x-4">
        <h1 className="text-indigo-700 font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase">
          Botón persistente
        </h1>
        <Brand />
      </div>
    </>
  );
}

export default HomePage;
