// import { ArrowLeft } from "lucide-react";
// import React from "react";

// // Define props type
// type ButtonProps = {
//   title: string;
//   bgColor: string,
//   color: string,
// };

// // Use props in the function
// function Button({ title, bgColor, color }: ButtonProps) {
//   return (
//     <div className="flex items-center">
//       <div className="text-black bg-white rounded-full py-2 px-3">
//         <h1 className="font-Sora">{title}</h1>
//       </div>
//       <div className="bg-white size-10 rounded-full relative px-3 py-2">
//         <ArrowLeft className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//       </div>
//     </div>
//   );
// }

// export default Button;
import { ArrowLeft } from "lucide-react";
import React from "react";

// Define props type
type ButtonProps = {
  title: string;
  bgColor: string;
  color: string;
};

function Button({ title, bgColor, color }: ButtonProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="rounded-full py-2 px-3"
        style={{ backgroundColor: bgColor, color }}
      >
        <h1 className="font-Sora">{title}</h1>
      </div>
      <div
        className="size-10 rounded-full relative px-3 py-2"
        style={{ backgroundColor: bgColor }}
      >
        <ArrowLeft
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color }}
        />
      </div>
    </div>
  );
}

export default Button;
