import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Style from '../styles/latihan.module.css'
import Nav from './navigation'

const Latihan = () =>{
    return (
        <div className={Style.container}>
            <Head>
                <title>Page Latihan</title>
            </Head>
            <Nav/>
            <h1 className={Style.h1Custom}>Latihan Next Js</h1>
            <Image src="/assets/luffy.jpg" width={300} height={350} alt="gambar" className={Style.image}/>
        </div>
    )
}

export default Latihan