import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Navigation from "./(site)/components/menu/Menu";

export default function Home() {
  dayjs.extend(jalaliday);
  
  return (
    <div className="">
      <Navigation/>
    </div>
  );
}
