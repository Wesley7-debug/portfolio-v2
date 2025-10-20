import { ArrowLeft } from "lucide-react";
import React from "react";
import Magnetic from "../hooks/MagneticGsap";
// Define props type
type ButtonProps = {
  title: string;
};

// Use props in the function
// export default function Button({ title }: ButtonProps) {
//   return (
//     <Magnetic>
//       <div className="flex items-center cursor-pointer">
//         <div className="text-black bg-Card3 rounded-full py-2 px-3">
//           <h1 className="font-Sora">{title}</h1>
//         </div>
//         <div className="bg-Card3 size-10 rounded-full relative px-3 py-2">
//           <ArrowLeft className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//         </div>
//       </div>
//     </Magnetic>
//   );
// }
export default function Button({ title }: ButtonProps) {
  return (
    <Magnetic>
      <div className="flex items-center cursor-pointer custom-cursor-ignore">
        {" "}
        {/* add this class */}
        <div className="text-black bg-Card3 rounded-full py-2 px-3">
          <h1 className="font-Sora">{title}</h1>
        </div>
        <div className="bg-Card3 size-10 rounded-full relative px-3 py-2">
          <ArrowLeft className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </Magnetic>
  );
}
