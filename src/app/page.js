import Header from "./components/main-header";
import { Allison } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import img1 from "../../public/assets_img/kalari.jpg"


const praiseFont = Allison({
  subsets: ["latin"], // or other needed subsets.
  weight: "400", // Praise only has a single weight.
});

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full bg-background text-primary flex flex-col">
        <div className="my-10 flex flex-row justify-center items-center">
          <p
            className={`${praiseFont.className} text-center text-foreground text-3xl`}
          >
            “The blood of a warrior is closer to God, <br />
            than the ink of the philosopher or prayers of the Devout.”
          </p>
        </div>
        <div className="flex flex-row justify-around">

          <Card className={"w-max"}>
            <CardHeader>
              <CardTitle>Nair History</CardTitle>
              <CardDescription>Nair also known as Malayala Kshatriya.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={{img1}} alt="404" />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
