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
import mural from "../../public/assets_img/mural.jpg";
import ScrollAnimatedContainer from "./components/scroll-animation";

const praiseFont = Allison({
  subsets: ["latin"], // or other needed subsets.
  weight: "400", // Praise only has a single weight.
});

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full bg-background text-primary flex flex-col">
        <ScrollAnimatedContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          options={{ threshold: 0.2 }}
        >
          <div className="my-10 py-6 hidden sm:block flex flex-row justify-center items-center ">
            <p
              className={`${praiseFont.className} text-center text-foreground text-3xl `}
            >
              “ &ensp; The blood of a warrior is closer to God, <br />
              than the ink of the philosopher or prayers of the Devout. &ensp;”
            </p>
          </div>
        </ScrollAnimatedContainer>

        <div className="flex flex-col md:flex-row justify-around my-15 mx-5 gap-y-3 ">
          <ScrollAnimatedContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            options={{ threshold: 0.2 }}
            className="w-full md:w-1/5"
          >
            <Card
              className={
                "w-full border-primary/20 rounded-none p-0 m-0 overflow-hidden"
              }
            >
              <div className="relative h-60">
                <Image src={img1} alt={"404"} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-1000 ">
                  <Link href={""}>
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
          </ScrollAnimatedContainer>
          <ScrollAnimatedContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            options={{ threshold: 0.2 }}
            className="w-full md:w-1/5"
          >
            <Card
              className={
                "w-full border-primary/20 rounded-none p-0 m-0"
              }
            >
              <div className="relative h-60">
                <Image src={img2} alt={"404"} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-1000 ">
                  <Link href={""}>
                    <CardTitle className="text-white text-2xl font-bold">
                      Myths Debunked
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
          </ScrollAnimatedContainer>
          <ScrollAnimatedContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            options={{ threshold: 0.2 }}
            className="w-full md:w-1/5"
          >
            <Card
              className={
                "w-full border-primary/20 rounded-none p-0 m-0"
              }
            >
              <div className="relative h-60">
                <Image src={img3} alt={"404"} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black/70 hover:bg-black/30 flex items-center justify-center transition ease-in-out duration-1000 ">
                  <Link href={""}>
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
          </ScrollAnimatedContainer>
        </div>
        <div></div>
      </div>
    </>
  );
}
