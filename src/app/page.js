import Header from "./components/main-header";
import { Allison } from "next/font/google";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import img1 from "../../public/assets_img/kalari.jpg";
import img2 from "../../public/assets_img/marriage.jpg";
import img3 from "../../public/assets_img/house.jpg";
import mural from "../../public/assets_img/mural.jpg"




const praiseFont = Allison({
  subsets: ["latin"], // or other needed subsets.
  weight: "400", // Praise only has a single weight.
});

export default function Home() {
  return (
    <>
      <Header imageUrl={mural} />
      <div className="w-full bg-background text-primary flex flex-col">
        <div className="py-6 hidden sm:block flex flex-row justify-center items-center bg-primary">
          <p
            className={`${praiseFont.className} text-center text-foreground text-3xl`}
          >
            “The blood of a warrior is closer to God, <br />
            than the ink of the philosopher or prayers of the Devout.”
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around my-15 mx-5 gap-y-3">

          <Card className={"w-full md:w-1/5 border-primary/20 rounded-none p-0 m-0"}>
            <div className="relative h-60">
              <Image src={img1} alt={"404"} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-500 ">
                <Link href={
                  ''
                }>
                  <CardTitle className="text-white text-2xl font-bold">
                    Nair History
                  </CardTitle>
                </Link>
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <Link href={"./articles"}>
                <h1>Latest</h1>
              </Link>
            </CardContent>
          </Card>

          <Card className={"w-full md:w-1/5 border-primary/20 rounded-none p-0 m-0"}>
            <div className="relative h-60">
              <Image src={img2} alt={"404"} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-500 ">
                <Link href={
                  ''
                }>
                  <CardTitle className="text-white text-2xl font-bold">
                    Facts Debunked
                  </CardTitle>
                </Link>
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <Link href={"./articles"}>
                <h1>Latest</h1>
              </Link>
            </CardContent>
          </Card>

          <Card className={"w-full md:w-1/5 border-primary/20 rounded-none p-0 m-0"}>
            <div className="relative h-60">
              <Image src={img3} alt={"404"} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-500 ">
                <Link href={
                  ''
                }>
                  <CardTitle className="text-white text-2xl font-bold">
                    Join Us
                  </CardTitle>
                </Link>
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <Link href={"./articles"}>
                <h1>Membership</h1>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
