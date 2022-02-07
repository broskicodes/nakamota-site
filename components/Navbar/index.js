import { Wallet  } from "../Wallet";
import Link from "next/link";
import Image from "next/image";
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

export const Navbar = ({ children }) => {

  return (
    <>
      <nav className="flex justify-between h-16">
        <div className="my-auto flex">
          <Link href="/">
            <a  className="ml-2 font-mono text-2xl hover:underline">
              Nakamota
            </a>
          </Link>
          <div className="text-xs mt-3 ml-1">
            By 
            <a href="https://metavillage.app/" target="_blank" className="ml-1 hover:underline">
              Metavillage
            </a>
          </div>
        </div>
        <div className="flex justify-evenly gap-x-2">
          {/* <WalletMultiButton/> */}
          <Link href="/address_book">
            <a  className="ml-2 text-sm my-auto hover:underline">
              Aderess Book
            </a>
          </Link>
          <a href="https://twitter.com/NakamotaMV" target="_blank" className="my-auto">
            <Image src="/imgs/twitter-logo.svg" width={50} height={50} />
          </a>
          <a href="https://t.co/rq760C14KB" target="_blank" className="my-auto mr-2">
            <Image src="/imgs/discord-logo.svg" width={45} height={45} />
          </a>
        </div>
      </nav>
      <hr />
    </>
  );
}