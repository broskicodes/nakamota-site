import { Navbar } from '../../../../components/Navbar';
import { useRouter } from 'next/router';
import { Wallet } from '../../../../components/Wallet';
import { Address } from '../../../../components/Address';

export const getStaticPaths = async () => {
  const res = await fetch("https://arweave.net/6Ob5PN-BIIgNArbIOUKdwx9avArgecQ5EzIjT351sM4");
  const metadata = await res.json();
  let paths = [];
  
  Object.keys(metadata).forEach((district) => {
    Object.keys(metadata[district]).forEach((block) => {
      Object.keys(metadata[district][block]).forEach((num, idx) => {
        // let i = addr.metadata.name.indexOf(" ");
        paths.push({
          params: { 
            block: block, 
            district: district,
            address: num,
          },
        });
      })
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
  const num = context.params.address;

  const address = metadata[district][block][num];
  // const imgRes = await fetch(address.metadata.image);
  // const imgBuf = await imgRes.arrayBuffer();
  // const imgSrc = URL.createObjectURL(imgBlob);

  return {
    props: { 
      data: address,
      // imgSrc: ,
     }
  }
}

const AddressShell = ({ data }) => {
  // const router = useRouter(); 

  return (
    <>
      <Wallet>
        <Navbar />
        <Address data={data} />
      </Wallet>
    </>
  );
}

export default AddressShell;