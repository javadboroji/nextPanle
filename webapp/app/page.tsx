import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

export default function Home() {
  dayjs.extend(jalaliday);
  
  return (
    <div className="">
      
    </div>
  );
}
