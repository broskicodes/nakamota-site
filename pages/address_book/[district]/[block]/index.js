import { Navbar } from '../../../../components/Navbar';
// import metadata from '../../../../data/nakamota-metadata.json';
import { useRouter } from 'next/router';
import { Wallet } from '../../../../components/Wallet';
import { AddressLink } from '../../../../components/AddressLink';
import { titlize } from '../../../../helpers/helpers';

export const getStaticPaths = async () => {
  const res = await fetch("https://arweave.net/6Ob5PN-BIIgNArbIOUKdwx9avArgecQ5EzIjT351sM4");
  const metadata = await res.json();
  let paths = [];
  
  Object.keys(metadata).forEach((district) => {
    Object.keys(metadata[district]).forEach((block) => {
      paths.push({
        params: { block: block, district: district }
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const res = await fetch("https://arweave.net/6Ob5PN-BIIgNArbIOUKdwx9avArgecQ5EzIjT351sM4");
  const metadata = await res.json();

  const block = context.params.block;
  const district = context.params.district;

  return {
    props: { 
      data: metadata[district][block],
     }
  }
}

const Block = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Wallet>
        <Navbar />
        <div className="max-w-4xl">
          <div className="mt-4 ml-2 font-bold text-xl">
            {titlize(router.query.block)}
          </div>
          <div> 
            {Object.keys(data).map((k) => {
              return (
                <AddressLink data={data[k]} idx={k} />
              )
            })}
          </div>
        </div>
      </Wallet>
    </>
  )
}

export default Block;