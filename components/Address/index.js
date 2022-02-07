import { web3 } from '@project-serum/anchor';
import { set } from '@project-serum/anchor/dist/cjs/utils/features';
import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { titlize } from '../../helpers/helpers';

export const Address = ({ data }) => {
  const { connection } = useConnection();
  const [imgSrc, setImgSrc] = useState("/imgs/missing.jpg");
  const [owner, setOwner] = useState("");
  const { publicKey } = useWallet();

  const getVillaOwner = async () => {
    const mint = new web3.PublicKey(data.mint);
    const tokenAcnts = await connection.getTokenLargestAccounts(mint);
    const info = await connection.getParsedAccountInfo(tokenAcnts.value[0].address);

    // console.log(info.value.owner.toString())
    return info.value.data.parsed.info.owner;
  }

  useEffect(() => {
    fetch(data.metadata.image)
      .then((imgRes) => imgRes.blob())
      .then((imgBlob) => {
        setImgSrc(URL.createObjectURL(imgBlob));
      })
    getVillaOwner()
      .then((pk) => {
        setOwner(pk);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl">
        <div className="mt-8 font-bold text-2xl">
          {data.metadata.name}
        </div>
        <div className="mt-4 flex justify-center">
          <Image src={imgSrc} width={400} height={400} />
        </div>
        <div className="mt-4 flex justify-around">
          <div>
            Resident: <a className="text-blue-400" href={`https://solscan.io/account/${owner}`} target="_blank" rel="noreferrer"> {owner}↗ </a>
          </div>
          <div>
            <a className="text-blue-400" href={data.metadata.vpLink} target="_blank" rel="noreferrer">Villa Page ↗</a>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="font-semibold text-lg">
                Description
              </div>
              <div className="mt-2">
                {data.metadata.description}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-4">
          <div className="font-semibold text-lg">
            Attributes
          </div>
          <div className="grid grid-cols-2 mt-2">
            {Object.keys(data.metadata.attributes).map((attr) => {
              return (
                <div className="flex" key={attr}>
                  <p className="font-semibold">{titlize(attr)}:</p> <p className="ml-2">{titlize(data.metadata.attributes[attr])}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* <button onClick={test}>wohho</button> */}
      </div>
    </div>
  );
}

// export default Address;