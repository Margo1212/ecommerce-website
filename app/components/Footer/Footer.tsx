import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-slate-200 bg-slate-700 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              quo obcaecati natus fugit consequuntur ab itaque voluptatum optio
              aliquam cupiditate repellat asperiores fuga hic iusto molestias
              quasi porro aperiam veniam.
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-commerce. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
