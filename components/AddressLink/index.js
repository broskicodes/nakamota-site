import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from 'next/link';

export const AddressLink = ({ data, idx }) => {
  const [imgSrc, setImgSrc] = useState("/imgs/missing.jpg");
  const router = useRouter();

  useEffect(() => {
    fetch(data.metadata.image)
      .then((imgRes) => imgRes.blob())
      .then((imgBlob) => {
        setImgSrc(URL.createObjectURL(imgBlob));
      })
  }, []);

  return (
    <Link href={`/address_book/${router.query.district}/${router.query.block}/${idx}`}>
      <a>
        <div className="flex my-2 hover:bg-gray-100">
          <div className="ml-2">
            <Image src={imgSrc} width={50} height={50} />
          </div>
          <div className="my-auto ml-6">
            {data.metadata.name}
          </div>
        </div>
      </a>
    </Link>
  )
}