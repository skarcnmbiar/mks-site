import Link from "next/link";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";
import SocialTray from "./social-tray";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'], // Or any other subsets you need
  weight: ['400', '600', '700'], // Specify the weights you want to use
});

export default function Footer() {
  return (
    <>
      <footer  className={`${nunitoSans.className} footer footer-horizontal footer-center bg-background text-primary rounded p-4 
       flex flex-col items-center w-[100%] bottom-0`}>
        <nav className="flex flex-row">
          <Link href={""} className="text-foreground link link-hover hover:text-primary">
            About us
            
          </Link>
          <Link href={""} className="text-foreground link link-hover hover:text-primary">
            Contact
          </Link>
          <Link href={""} className="text-foreground link link-hover hover:text-primary">
            Jobs
          </Link>
          <Link href={""} className="text-foreground link link-hover hover:text-primary">
            Press kit
          </Link>
        </nav>
        <div>
          <SocialTray/>
        </div>
        <div className="flex flex-row align-middle">
          <p>Copyright ©- All right reserved by </p>
        </div>
      </footer>
    </>
  );
}
