import Image from 'next/image'
import express from '../../public/stack/express.svg'
import git from '../../public/stack/git.svg'
import github from '../../public/stack/github.svg'
import js from '../../public/stack/js.svg'
import next from '../../public/stack/next.svg'
import nodejs from '../../public/stack/nodejs.svg'
import postgresql from '../../public/stack/postgresql.svg'
import react from '../../public/stack/react.svg'
import redux from '../../public/stack/redux.svg'
import solid from '../../public/stack/solid.svg'
import tailwind from '../../public/stack/tailwind.svg'
import ts from '../../public/stack/ts.svg'
import vite from '../../public/stack/vite.svg'
import { motion } from 'framer-motion'

const stackImages = [
	js,
	ts,
	react,
	vite,
	next,
	express,
	git,
	github,
	solid,
	nodejs,
	postgresql,
	redux,
	tailwind,
]

export default function Technologies() {
	return (
		<div className="mx-auto max-w-[800px] mt-20">
			<h3 className="text-3xl mb-6 font-titles text-accent uppercase text-center">
				what i use
			</h3>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ type: 'spring', bounce: false }}
				viewport={{ once: true }}
				className="flex gap-6 flex-wrap justify-center bg-zinc-500/30 px-2 py-4 rounded-lg"
			>
				{stackImages.map((image, i) => (
					<div key={i}>
						<Image
							src={image}
							alt="technology icon"
							className="aspect-square m-4 w-14 drop-shadow-lg shadow-main-dark"
						/>
					</div>
				))}
			</motion.div>
		</div>
	)
}
