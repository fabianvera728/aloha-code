import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-200 flex">
            <h2> Aloha code </h2>
            <Image src="/images/prueba.jpg" width={500} height={500} alt='Prueba'/>
        </div>
    )
}

export default Home
