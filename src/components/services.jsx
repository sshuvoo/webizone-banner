/* eslint-disable react/prop-types */
export default function Services({ title, src }) {
   return (
      <div className="flex">
         <div>
            <img className="w-12" src={src} />
         </div>
         <h2 className="font-medium text-lg px-2">{title}</h2>
      </div>
   );
}
