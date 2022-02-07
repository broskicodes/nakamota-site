import { Navbar } from '../../components/Navbar';
import { Wallet } from '../../components/Wallet';
import { titlize } from '../../helpers/helpers';
// import mtdt from '../../data/nakamota-metadata.json';
import Link from  'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://arweave.net/6Ob5PN-BIIgNArbIOUKdwx9avArgecQ5EzIjT351sM4");
  const metadata = await res.json();
  
  return {
    props: { metadata: metadata }
  }
}

const AderessBook = ({ metadata }) => {

  return (
    <>
      <Wallet>
        <Navbar />
        <div className="max-w-4xl">
          <div className="mt-4 ml-2 font-bold text-xl">
            District
          </div>
          <div className="mt-2 ml-2">
            {Object.keys(metadata).map((district) => {
              return (
                <Link href={`/address_book/${district}`} key={district}>
                  <a>
                    <div className="text-lg hover:bg-gray-100">
                      {titlize(district)}   
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      </Wallet>
    </>
  )
}

export default AderessBook;