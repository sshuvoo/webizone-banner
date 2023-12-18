import Services from './components/services';
import desktopAppDevelopmentTools from './data/desktop';
import digitalMarketingTools from './data/dm';
import mobileDevelopmentTools from './data/mobileTools';
import webDevelopmentTools from './data/webTools';

function App() {
   return (
      <section className="w-full min-h-screen xl:bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_50%,rgba(8,31,66,1)_100%)]">
         <div className="max-w-7xl mx-auto h-full py-4 px-4 xl:px-0">
            <div className="grid xl:grid-cols-2 gap-4 xl:gap-0">
               <div>
                  <img src="./logo.jpeg" className="w-20" />
                  <h1 className="text-indigo-700 font-bold text-5xl pl-20">
                     Webizone It
                  </h1>
                  <h1 className="text-black uppercase font-bold text-5xl py-4">
                     Business Agency
                  </h1>
                  <span className="w-16 h-[2px] bg-indigo-700 block"></span>
                  <h1 className="text-black uppercase font-bold text-2xl py-4">
                     We provide services
                  </h1>
                  <div className="grid xl:grid-cols-2 gap-3 gap-y-8">
                     <Services
                        src={'./coding.png'}
                        title={'Website development'}
                     />
                     <Services
                        src={'./mobile.png'}
                        title={'Mobile App Development'}
                     />
                     <Services
                        src={'./../public/coding3.png'}
                        title={'Desktop App Development'}
                     />
                     <Services
                        src={'./social-media.png'}
                        title={'Digital Marketing'}
                     />
                     <Services
                        src={'./growth.png'}
                        title={'Business Development'}
                     />
                     <Services
                        src={'./creativity.png'}
                        title={'Creative Ideas'}
                     />
                  </div>
                  <button className="uppercase bg-indigo-700 text-white px-4 rounded-full font-semibold py-2 text-base my-8">
                     Learn more
                  </button>
               </div>
               <div className="flex justify-center items-center">
                  <img
                     src="./team.jpg"
                     className="w-[400px] h-[400px] rounded-full border-[15px] border-white"
                  />
               </div>
            </div>
            <section className='px-2 xl:px-0'>
               <h1 className="text-black uppercase font-bold text-2xl py-4">
                  Tools We Use
               </h1>
               <div className="grid xl:grid-cols-2 gap-4 gap-y-8">
                  <div>
                     <Services
                        src={'./coding.png'}
                        title={'Website development'}
                     />
                     <div>
                        {webDevelopmentTools.map((tool, index) => (
                           <span
                              className="text-base font-medium bg-orange-300 px-2 py-1 inline-block mt-2 rounded mr-2"
                              key={index}
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <Services
                        src={'./mobile.png'}
                        title={'Mobile App Development'}
                     />
                     <div>
                        {mobileDevelopmentTools.map((tool, index) => (
                           <span
                              className="text-base font-medium bg-orange-300 px-2 py-1 inline-block mt-2 rounded mr-2"
                              key={index}
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <Services
                        src={'./../public/coding3.png'}
                        title={'Desktop App Development'}
                     />
                     <div>
                        {desktopAppDevelopmentTools.map((tool, index) => (
                           <span
                              className="text-base font-medium bg-orange-300 px-2 py-1 inline-block mt-2 rounded mr-2"
                              key={index}
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <Services
                        src={'./social-media.png'}
                        title={'Digital Marketing'}
                     />
                     <div>
                        {digitalMarketingTools.map((tool, index) => (
                           <span
                              className="text-base font-medium bg-orange-300 px-2 py-1 inline-block mt-2 rounded mr-2"
                              key={index}
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </section>
            <footer className="flex justify-between pt-20 px-2 xl:px-0">
               <div className="flex items-center justify-start">
                  <div className="bg-indigo-700 p-2 rounded-full">
                     <svg
                        className="w-7 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        // height="16"
                        // width="16"
                        viewBox="0 0 512 512"
                     >
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                     </svg>
                  </div>
                  <div className="pl-2">
                     <h2 className="text-base font-medium">Contact Us</h2>
                     <h2 className="text-base font-medium">01601-054041</h2>
                  </div>
               </div>
               <div className="flex items-center justify-start">
                  <div className="pr-2">
                     <h2 className="text-base font-medium text-end xl:text-white">
                        Visit Our Website
                     </h2>
                     <h2 className="text-base font-medium xl:text-white">
                        www.webizoneit.com
                     </h2>
                  </div>
                  <div className="bg-white p-2 rounded-full">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 fill-indigo-700"
                        viewBox="0 0 512 512"
                     >
                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                     </svg>
                  </div>
               </div>
            </footer>
         </div>
      </section>
   );
}

export default App;
