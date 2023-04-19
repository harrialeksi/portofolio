import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Sen, Didact_Gothic } from 'next/font/google'

const sen = Sen({
	subsets: ['latin'],
	variable: '--font-sen',
	weight: '700',
})

const didact_gothic = Didact_Gothic({
	subsets: ['latin'],
	variable: '--font-didact-gothic',
	weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${sen.variable} ${didact_gothic.variable} font-main `}>
			<Component {...pageProps} />
		</main>
	)
}
