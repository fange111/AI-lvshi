import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 法律助手-chatGPT-4</title>
        <meta
          name="description"
          content="AI 法律助手-chatGPT-4"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-6GCGYXNM3S"
      strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6GCGYXNM3S');
        `}
      </Script>
      <main className={styles.main}>
        <h1 className='text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400'><Image src={'/logo.png'} width="32" height="32" alt="MagickPen logo" /> AI 法律助手-ChatGPT-4驱动</h1>
        <div className={styles.center}>
          <SearchDialog />
        </div>
        <div className='mt-28 md:mt-40 text-center w-full'>
          <a href="https://www.aiclubpro.com" className='ml-1 underline decoration-wavy decoration-indigo-500 underline-offset-2 hover:text-slate-500' >AI·Club·Pro-查看法律依据</a>

        </div>

        <div className="py-10 w-full md:flex items-center justify-center md:space-x-6">
          
        </div>
      </main>
    </>
  )
}
