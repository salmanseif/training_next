import { useRouter } from "next/router";
import { useEffect } from "react";
import Head  from 'next/head'
import Link  from 'next/link'
import Style from '../styles/latihan.module.css'

const Hello = () =>{
    const router = useRouter();

    useEffect(()=>{
        // setTimeout(()=>{
        //     router.push('/')
        // }, )
    })

    return (
        <div className={Style.container}>
            <Head>
                <title>Halaman Hello</title>
            </Head>
            <div className={Style.customLink}>
                <Link href="/" passHref>
                    <div className={Style.btn}>Kehalaman Index</div>
                </Link>
                <Link href="/test" passHref>
                    <div className={Style.btn}>Kehalaman Test</div>
                </Link>
                <Link href="/latihan" passHref>
                    <div className={Style.btn}>Kehalaman Latihan</div>
                </Link>
            </div>
            <h1 className={Style.h1Custom}>Hello page</h1>
            <style jsx>{`
                h1 {
                    color: blue;
                }
            `}</style>
        </div>
    )
}

export default Hello;