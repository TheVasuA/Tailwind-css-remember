import React, { useEffect, useState } from "react";
let backImage =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgrWxBi7OLcbkT71F8BGCtMDU2rscmxRi2sJgObPFirjTJWowjz17h_RbpDOsBhp3glbjZVR1UwywT/pubchart?oid=780854348&format=image";
const Tailwind = () => {
  const [widthb, setWidthb] = useState("");

  useEffect(() => {
    const widthBrowser = window.innerWidth;
    setWidthb(widthBrowser);
  }, []);
  return (
    <div>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            "flex p-5 max-w-sm text-green-900 mx-auto bg-indigo-200 rounded-xl
            shadow-lg shadow-indigo-500 mt-5"
          </h2>
        </div>
        <div class="flex p-5  max-w-sm text-green-900 mx-auto bg-indigo-200  rounded-xl shadow-lg shadow-indigo-500 mt-5">
          Are you sure want to delete?
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold mt-10">"m-5 bg-slate-100 p-2"</h2>
        </div>
        <div class="  m-5 bg-slate-100 p-2">
          <h3>Content</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nostrum nam tempore, quam exercitationem a quia beatae voluptas
            molestiae dolorem officiis quod blanditiis mollitia assumenda
            impedit fugiat asperiores, natus explicabo!
          </p>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">"flex mt-10 p-5 space-x-4"</h2>
        </div>
        <div className="flex mt-2 p-5 space-x-7">
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
          <div>Item 7</div>
        </div>
      </section>

      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">"flex flex-col mt-2 p-5 space-y-4"</h2>
        </div>
        <div className="flex flex-col mt-2 p-5 space-y-4">
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 5</div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Text Size</h2>
        </div>
        <div className="flex mt-1 p-5 space-x-4">
          <div className="text-xs">text-xs</div>
          <div className="text-sm">text-sm</div>
          <div className="text-lg">text-lg</div>
          <div className="text-2xl">text-2xl</div>
          <div className="text-3xl">text-3xl</div>
        </div>
      </section>

      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Font weight</h2>
        </div>
        <div className="flex mt-1 p-5 space-x-1">
          <div className="font-light">font-light</div>
          <div className="font-normal">font-normal</div>
          <div className="font-medium">font-medium</div>
          <div className="font-semibold">font-semibold</div>
          <div className="font-bold">font-bold</div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Letter Spacing</h2>
        </div>
        <div className="flex flex-col mt-1 p-1 space-y-2">
          <div className="tracking-tight">tracking-tight</div>
          <div className="tracking-normal">tracking-normal</div>
          <div className="tracking-wide">tracking-wide</div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold mt-3">Text Alignment</h2>
        </div>
        <div className="flex flex-col p-5 space-y-1">
          <div className="text-right">text-right</div>
          <div className="text-center">text-center</div>
          <div className="text-left">text-left</div>
        </div>
      </section>

      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Text Decoration</h2>
        </div>
        <div className="flex flex-col mt-1 p-5 space-y-1">
          <div className="underline decoration-4 decoration-yellow-400 font-bold">
            underline decoration-4 decoration-yellow-400{" "}
          </div>
          <div className="underline decoration-double decoration-indigo-700 font-bold">
            underline decoration-double decoration-indigo-700
          </div>
          <div className="underline decoration-dotted decoration-green-900 font-bold">
            underline decoration-dotted decoration-green-900
          </div>
          <div className="underline decoration-dashed decoration-blue-900 font-bold">
            underline decoration-dashed decoration-blue-900{" "}
          </div>
          <div className="underline decoration-wavy decoration-pink-900 font-bold">
            underline decoration-dashed decoration-pink-900
          </div>
          <div className="underline decoration-4 decoration-pink-900 font-bold underline-offset-1">
            underline decoration-4 decoration-pink-900 underline-offset-1
          </div>
          <div className="underline decoration-4 decoration-pink-900 font-bold underline-offset-8">
            underline decoration-4 decoration-pink-900 underline-offset-8
          </div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Text Transform</h2>
        </div>
        <div className="flex flex-col mt-1 p-5 space-y-1">
          <div className="normal-case">normal-case</div>
          <div className="uppercase">
            nOTE: uppercase CLASSNAME SMALL LETTER
          </div>
          <div className="lowercase">LOWERCASE</div>
          <div className="capitalize">capitalize</div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Width</h2>
        </div>
        <div className="flex flex-col mt-1 p-5 space-y-1">
          <div className="bg-green-200 w-80">bg-green-200 w-80</div>
          <div className="bg-green-200 w-60">bg-green-200 w-60</div>
          <div className="bg-green-200 w-auto">bg-green-200 w-auto</div>
          <div className="bg-green-200 w-1/2">bg-green-200 w-1/2 (50%)</div>
          <div className="bg-yellow-200 w-screen">
            bg-yellow-200 w-screen (100vw)
          </div>
          <div className="bg-pink-200 w-full">bg-pink-200 w-full (100%)</div>
          <div className="bg-sky-200 w-[400px]">bg-sky-200 w-[400px]</div>
          <div className="bg-red-200 w-[70%]">bg-red-200 w-[70%]</div>
          <div className="bg-indigo-200 max-w-sm">
            <span className="bg-red-400">max-w-sm</span> ........... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quam numquam expedita
            in? Possimus totam asperiores doloribus aliquam aperiam iure
            numquam, obcaecati sequi sapiente cupiditate facere minima in enim,
            magnam quis?
          </div>
          <div className="bg-indigo-200 max-w-lg">
            <span className="bg-red-400">max-w-lg</span> ........... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quam numquam expedita
            in? Possimus totam asperiores doloribus aliquam aperiam iure
            numquam, obcaecati sequi sapiente cupiditate facere minima in enim,
            magnam quis?
          </div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">height</h2>
        </div>
        <div className="flex flex-col mt-1 p-5 space-y-1">
          <div className="bg-green-200 w-80 h-8">bg-green-200 w-80 h-6</div>
          <div className="bg-green-200 w-60 h-16">bg-green-200 w-60 h-16</div>
          <div className="bg-sky-200 w-[400px] h-[50px]">
            bg-sky-200 w-[400px] h-[20px]
          </div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">positioning</h2>
        </div>
        <div className="flex flex-col mt-1 p-5 space-y-1">
          <div className="relative h-32 bg-red-200 w-3/4">
            <p>Parent Element Relative (relative h-12 bg-red-200 w-3/4)</p>
            <div className="absolute bottom-0 right-0 w-3/4 bg-red-500">
              Absolute Child (absolute bottom-0 right-0 w-3/4 bg-red-500)
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 bg-red-500">
              Absolute Child (absolute bottom-0 right-0 w-3/4 bg-red-500)
            </div>
          </div>
          <div className="relative  h-32 bg-yellow-200 w-3/4 ">
            <p>Parent Element Relative (relative h-12 bg-yellow-200 w-3/4)</p>
            <div className="absolute left-0 top-1/3 w-3/4 bg-yellow-500">
              Absolute Child (absolute left-0 top-1/3 w-3/4 bg-yellow-500)
            </div>
          </div>
          <div className="relative  h-36 bg-green-200 w-3/4 ">
            <p>Parent Element Relative (relative h-12 bg-green-200 w-3/4)</p>
            <div className="absolute  inset-y-12 right-0 w-3/4 bg-green-500">
              Absolute Child (absolute inset-y-12 w-3/4 right-0 bg-green-500)
            </div>
          </div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">z-index</h2>
        </div>
        <div className="relative h-36  mt-1 p-5">
          <div className="absolute left-10 w-24 h-24 bg-blue-300">1</div>
          <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
          <div className="absolute left-40 w-24 h-24 bg-blue-500">3</div>
          <div className="absolute left-60 w-24 h-24 bg-blue-600">4</div>
        </div>
        <div className="relative h-36    ">
          <div className="absolute left-10 w-24 h-24 bg-blue-300">1</div>
          <div className="absolute left-20 w-24 h-24 bg-red-400 z-30">
            2 (z-30)
          </div>
          <div className="absolute left-40 w-24 h-24 bg-blue-500">3</div>
          <div className="absolute left-60 w-24 h-24 bg-blue-600">4</div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">Float</h2>
        </div>
        <div className="flex  mt-1 p-5 space-y-1">
          <p>Lorem ipsum dectus hghgh officia minus vero.</p>
          <img
            className="w-6/12 float-left m-4"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREU9xAouF06YEjKuYoein-CH1go__H2JYY2ZbkBOTqAN1ngpjxFHuzExXEd68_-yT7EDvu6K90NjsA/pubchart?oid=974049458&format=image"
            alt=""
          />
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">bg-no-repeat bg-cover bg-center</h2>
        </div>
        <div className="flex  mt-1 p-5 space-y-1">
          <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${backImage})`,
              width: "600px",
              height: "300px",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            {" "}
            bg-gradient-to-l from-cyan-500 to-blue-500 h-24
          </h2>
        </div>
        <div className=" bg-gradient-to-l from-cyan-500 to-blue-500 h-24"></div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            bg-gradient-to-r from-green-500 to-blue-500 h-24 shadow-2xl
            shadow-blue-800 rounded-xl
          </h2>
        </div>
        <div className=" bg-gradient-to-r from-green-500 to-blue-500 h-24 shadow-2xl shadow-blue-800  rounded-xl"></div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <h2 className="font-bold">border-2 rounded-xl border-cyan-500</h2>
        <div className="flex flex-row space-x-2  ">
          <div className="border-4 h-24 w-24"></div>
          <div className="border-x-4 h-24 w-24"></div>
          <div className="border-y-4 h-24 w-24"></div>
          <div className="border-2 rounded-xl border-cyan-500 h-24 w-24"></div>
          <div className="border-t-4 h-24 w-24"></div>
          <div className="border-b-4 h-24 w-24"></div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">blur-sm</h2>
        </div>
        <div className="blur-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
          autem, architecto, dolorem cum quasi vero officia cumque explicabo
          nesciunt corporis repellendus odit id ducimus fugit. Incidunt rerum
          aliquid nam!
        </div>
        <div className="blur-sm">
          <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${backImage})`,

              height: "300px",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">invert brightness-50 contrast-200</h2>
        </div>

        <div className="invert  brightness-20 contrast-200">
          <div
            className="bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${backImage})`,

              height: "300px",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            bg-purple-700 text-white py-1 px-5 rounded-lg m-3
            hover:bg-purple-900
          </h2>
        </div>

        <div className="grid place-items-center">
          <button className=" bg-purple-700  text-white py-1 px-5 rounded-lg m-3 hover:bg-purple-900">
            Click here
          </button>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            bg-orange-700 text-white py-1 px-5 rounded-lg m-3 focus:bg-green-900
          </h2>
        </div>

        <div className="grid place-items-center">
          <button className=" bg-orange-700  text-white py-1 px-5 rounded-lg m-3 focus:bg-green-900">
            Click here
          </button>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            bg-yellow-700 text-white py-1 px-5 rounded-lg m-3
            active:bg-purple-900
          </h2>
        </div>

        <div className="grid place-items-center">
          <button className=" bg-yellow-500  text-white py-1 px-5 rounded-lg m-3 active:bg-purple-900">
            Click here
          </button>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            group hover:bg-sky-500,.. group-hover:text-white
          </h2>
        </div>

        <div className="grid place-items-center">
          <a
            href=""
            className="group hover:bg-sky-500 shadow-lg p-5 m-2 max-w-sm mx-auto"
          >
            <h3 className="group-hover:text-white font-bold">Title</h3>
            <p className="group-hover:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              blanditiis repudiandae! Necessitatibus ab at suscipit
              exercitationem laborum quae rem expedita?
            </p>
          </a>
        </div>
      </section>
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">first:bg-red-200.... Pseudo classes</h2>
          <ul>
            <li className="first:bg-red-200">item 1</li>
            <li className="first:bg-red-200">item 2</li>
            <li className="first:bg-red-200">item 3</li>
            <li className="first:bg-red-200">item 4</li>
            <li className="first:bg-red-200">item 5</li>
          </ul>
        </div>
      </section>

      {/* mobile screen */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            Breakpoints - <span className="text-orange-500">{widthb}</span>
          </h2>
        </div>
        <ul className="font-bold text-purple-500">
          <li>sm - 640px</li>
          <li>md - 768px</li>
          <li>lg - 1024px</li>
          <li>xl - 1280px</li>
          <li>2xl - 1536px</li>
        </ul>
        <div className="bg-gray-500 h-24 sm:bg-green-500 md:blue-500 lg:bg-yellow-500">
          <h3>bg-gray-500 h-24 sm:bg-green-500 md:blue-500 lg:bg-yellow-500</h3>
        </div>
      </section>

      {/* columns */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">columns-2 gap-2</h2>
          <div className="columns-2 gap-2">
            <img className="w-full" src={backImage} alt="" />
            <img className="w-full" src={backImage} alt="" />
            <img className="w-full" src={backImage} alt="" />
            <img className="w-full" src={backImage} alt="" />
          </div>
        </div>
      </section>

      {/* columns */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">columns-xs</h2>
          <div className="columns-xs">
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
          </div>
        </div>
      </section>

      {/* flex */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">flex flex-row flex-wrap md:flex-row</h2>
          <div className="flex flex-row flex-wrap md:flex-row">
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
          </div>
        </div>
      </section>

      {/* align items */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">items-center items-start items-end</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img className="h-20 w-1/3 items-start" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">
            justify-around justify-end, center, between, start
          </h2>
          <div className="flex flex-row md:flex-row justify-around items-center">
            <img className="h-20 w-1/3 " src={backImage} alt="" />
            <img className="h-20 w-1/3" src={backImage} alt="" />
          </div>
        </div>
      </section>

      {/* grow and shrink */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">flex-1 flex-auto flex-initial</h2>
        </div>
        <div className="flex flex-center h-20 ">
          <div className="flex-auto bg-blue-100">flex-auto</div>
          <div className="flex-initial bg-blue-200">flex-initial</div>
          <div className="flex-1 bg-blue-300">flex-1</div>
        </div>
      </section>

      {/*  grid*/}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold">grid grid-cols-2 md:grid-cols-3 gap-3</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          <div className="col-span-2 p-10  border border-blue-600 bg-blue-100">col-span-2</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 2</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 3</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 4</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 5</div>
          <div className="col-span-2 p-10 border border-blue-600 bg-blue-100">Item 6</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 7</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 8</div>
          <div className="p-10 border border-blue-600 bg-blue-100">Item 9</div>
        </div>
      </section>

      {/*  */}
      <section className="border border-blue-500 p-2 m-2">
        <div>
          <h2 className="font-bold"> hover:bg-pink-600 transition duration-500 rotate-12 hover:scale-125</h2>
        </div>
        <div className="grid grid-cols-1">
          <button className="m-10 bg-sky-700 rounded w-44 px-4 py-2 text-white hover:bg-pink-600 transition duration-500 rotate-12">Click here</button>
          <button className="hover:scale-125 bg-sky-700 rounded w-44 px-4 py-2 text-white hover:bg-pink-600 transition duration-500 ">hover:scale-125</button>
        </div>
      </section>
    </div>
  );
};

export default Tailwind;
