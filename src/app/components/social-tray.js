import Link from "next/link";
import Image from "next/image";
import fb from "../../../public/assets_img/facebook.svg";
import ins from "../../../public/assets_img/instagram.svg";
import yt from "../../../public/assets_img/youtube.svg";
import x from "../../../public/assets_img/x.svg";

export default function SocialTray() {
  return (
    <div className="mb-5 flex flex-row justify-center items-center ">
      <Link href={"#"}>
        <div className="p-3 m-1 rounded-[100%] bg-background hover:scale-120 transition ease-in-out duration-300">
          <Image
            src={fb}
            alt={"404"}
            height={25}
            width={25}
            className="dark:invert"
          />
        </div>
      </Link>
      <Link href={"#"}>
        <div className="p-3 m-1 rounded-[100%] bg-background hover:scale-120 transition ease-in-out duration-300">
          <Image
            src={yt}
            alt={"404"}
            height={25}
            width={25}
            className="dark:invert"
          />
        </div>
      </Link>
      <Link href={"#"}>
        <div className="p-3 m-1 rounded-[100%] bg-background hover:scale-120 transition ease-in-out duration-300">
          <Image
            src={ins}
            alt={"404"}
            height={25}
            width={25}
            className="dark:invert"
          />
        </div>
      </Link>
      <Link href={"#"}>
        <div className="p-3 m-1 rounded-[100%] bg-background hover:scale-120 transition ease-in-out duration-300">
          <Image
            src={x}
            alt={"404"}
            height={25}
            width={25}
            className="dark:invert"
          />
        </div>
      </Link>
    </div>
  );
}
