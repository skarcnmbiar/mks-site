import Link from "next/link";
import "@/app/globals.css";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-background text-primary rounded p-4 
       flex flex-col items-center w-[100%] bottom-0">
        <nav className="flex flex-row">
          <Link href={""} className="link link-hover hover:text-secondary">
            About us
            
          </Link>
          <Link href={""} className="link link-hover hover:text-secondary">
            Contact
          </Link>
          <Link href={""} className="link link-hover hover:text-secondary">
            Jobs
          </Link>
          <Link href={""} className="link link-hover hover:text-secondary">
            Press kit
          </Link>
        </nav>
        <div className="flex flex-row align-middle">
          <p>Copyright ©- All right reserved by </p>
        </div>
      </footer>
    </>
  );
}
