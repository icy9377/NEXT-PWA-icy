import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://yourdomain.com' />
        <meta name='twitter:title' content='PWA App' />
        <meta name='twitter:description' content='Best PWA App in the world' />
        <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PWA App' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://yourdomain.com' />
        <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />
        {/* apple splash related */}
        <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Chaeyoung PWA!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
