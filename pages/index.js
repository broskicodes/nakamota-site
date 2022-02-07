import { Navbar } from '../components/Navbar'
import { Wallet } from '../components/Wallet'
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Wallet>
        <Navbar />
        <div className="mt-12 mb-8 flex justify-center">
          <div className="max-w-lg flex-items-center">
            <div className="text-center text-2xl font-semibold">
              Welcome to Nakamota
            </div>
            <div className="text-center text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-8 mb-4 flex justify-around">
          <div className="max-w-md">
            <div className="text-left font-semibold text-lg">
              Roadmap
            </div>
            <div className="text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </div>
          </div>
          <Image src="/imgs/roadmap.png" width={300} height={550}/>
        </div>
        <hr />
        <div>

        </div>
      </Wallet>
    </>
  )
}


export default Home;