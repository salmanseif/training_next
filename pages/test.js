import Link  from 'next/link'
import Image  from 'next/image'
import Head  from 'next/head'
import Style from '../styles/latihan.module.css'
const Test = () =>{
    return(
        <div className={Style.container}>
            <Head>
                <title>Halaman Test</title>
                <link rel="icon" href="/assets/luffy.jpg" />
            </Head>
            <div className={Style.customLink}>
                <Link href="/" passHref>
                    <div className={Style.btn}>Kehalaman Index</div>
                </Link>
                <Link href="/latihan" passHref>
                    <div className={Style.btn}>Kehalaman Latihan</div>
                </Link>
                <Link href="/hello" passHref>
                    <adiv className={Style.btn}>Kehalaman Hello</adiv>
                </Link>
            </div>
            <h1 className={Style.h1Custom}>Halaman Test</h1>
            {/* <img src='/assets/luffy.jpg' className={Style.image}/> */}
            <Image src="/assets/luffy.jpg" alt="" layout="responsive" width={300} height={300} className={Style.image}/>
            <Image src="https://images.unsplash.com/photo-1649810284947-ffad1fa44634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""  width={300} height={400} className={Style.image} />
            
        </div>
        
    )
}

export default Test;