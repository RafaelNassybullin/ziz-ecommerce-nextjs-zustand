export default function Navbar() {
  return (
    <nav className={`w-full h-[64px] shadow  bg-black fixed top-0 left-0`}>
      <div className="container px-[15px] mx-auto h-full w-full flex justify-between items-center">
        <p className="text-[40px] text-white font-bold font-antonRegular">Rafael's</p>
        <div className="w-[70%] relative h-[60%] border-[#E3E3E3] border-[1px] border-solid rounded-full overflow-hidden">
          <svg className="absolute w-[27px] h-[27px] top-[5px] left-[11px] fill-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-ppui="true"><path fillRule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clipRule="evenodd" data-ppui="true"></path></svg>
          <input type="text" placeholder="Введите для поиска товаров в магазине..." className="w-full h-full bg-white outline-none px-[48px]" />
									
                  
                  <div className="absolute top-[3px] right-[4px] cursor-pointer bg-gray-200 grid place-items-center w-[30px] rounded-full h-[30px] ">
                  <svg className="fill-black w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" data-ppui="true"><path fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.111 9.171L10.94 12l-2.83 2.829a.75.75 0 0 0 1.06 1.06L12 13.061l2.828 2.828a.75.75 0 0 0 1.06-1.06L13.061 12l2.828-2.828a.75.75 0 1 0-1.06-1.061L12 10.939 9.172 8.111a.75.75 0 0 0-1.06 1.06z" clipRule="evenodd" data-ppui="true"></path></svg>

                  </div>

        </div>
        <p>
          <svg
            className="w-[35px] h-[35px] cursor-pointer fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <g>
              <g>
                <path d="M422.957,133.565H372.87V116.87C372.87,52.428,320.442,0,256,0S139.13,52.428,139.13,116.87v16.696H89.044
			c-9.22,0-16.696,7.475-16.696,16.696v311.652c0,27.618,22.469,50.087,50.087,50.087h267.13c27.618,0,50.087-22.469,50.087-50.087
			V150.261C439.652,141.04,432.177,133.565,422.957,133.565z M172.522,116.87c0-46.03,37.448-83.478,83.478-83.478
			s83.478,37.448,83.478,83.478v16.696H172.522V116.87z M406.261,461.913c0,9.206-7.49,16.696-16.696,16.696h-267.13
			c-9.206,0-16.696-7.49-16.696-16.696V350.609h33.391V384c0,9.22,7.475,16.696,16.696,16.696
			c43.538,0,80.076-12.261,100.174-31.382c20.098,19.121,56.636,31.382,100.174,31.382c9.22,0,16.696-7.475,16.696-16.696v-33.391
			h33.391V461.913z M172.522,366.571v-65.316c41.256,3.698,66.783,20.596,66.783,32.658
			C239.304,345.975,213.778,362.873,172.522,366.571z M272.696,333.913c0-12.062,25.526-28.96,66.783-32.658v65.316
			C298.222,362.873,272.696,345.975,272.696,333.913z M406.261,317.217H372.87v-33.391c0-9.22-7.475-16.696-16.696-16.696
			c-43.538,0-80.076,12.261-100.174,31.382c-20.098-19.121-56.636-31.382-100.174-31.382c-9.22,0-16.696,7.475-16.696,16.696v33.391
			h-33.391V166.957h33.391v16.696c0,9.22,7.475,16.696,16.696,16.696s16.696-7.475,16.696-16.696v-16.696h166.957v16.696
			c0,9.22,7.475,16.696,16.696,16.696c9.22,0,16.696-7.475,16.696-16.696v-16.696h33.391V317.217z"/>
              </g>
            </g>
          </svg>
        </p>
      </div>
    </nav>
  )
}