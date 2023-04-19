import Image from 'next/image'
import dev from '../../public/dev.png'
import code from '../../public/code.png'
import { useTransform, motion, useScroll } from 'framer-motion'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useTypewriter } from 'react-simple-typewriter'

const social_tags = [
	{
		name: 'github',
		href: 'https://github.com/shinyhawk',
		icon: <BsGithub className="text-2xl text-neutral-300" />,
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/samuelrnnv1/',
		icon: <BsInstagram className="text-2xl text-rose-400" />,
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/sam-p-quino/',
		icon: <BsLinkedin className="text-2xl text-sky-400" />,
	},
]

export default function Header() {
	const { scrollY } = useScroll()
	let y = useTransform(scrollY, [0, 800], ['0%', '-14%'])
	const [output] = useTypewriter({
		words: ['peter hill', 'full stack developer'],
	})

	return (
		<header className="relative overflow-hidden" id="start">
			<motion.div
				className="fixed -z-10 top-0 w-full origin-center left-0"
				style={{ y }}
			>
				<Image
					src={code}
					alt="code hero banner"
					priority
					quality={60}
					className="object-cover object-left h-screen blur-[3px] w-full"
				/>
			</motion.div>

			<div className="flex flex-col justify-center w-full h-screen bg-main-dark/50">
				<div className="mx-auto flex flex-col items-center justify-center gap-6 -mt-16 min-[400px]:px-10">
					<Image
						width={180}
						height={180}
						src={dev}
						priority
						alt="dev photo"
						className="rounded-full shadow-lg shadow-black/40 brightness-[1.02]"
					/>

					<div className="text-center">
						<h1 className="font-titles text-4xl md:text-5xl uppercase">
							Peter . H
						</h1>

						<h2 className="thin-text pl-1 font-sans text-sm md:text-base">
							{output}
							<span className="animate-ping font-main">|</span>
						</h2>

						{/* Social content */}
						<div className="w-40 mx-auto mt-6">
							<div className="flex justify-between">
								{/* {social_tags.map(({ href, icon, name }) => (
									<a
										key={name}
										title={name}
										target="_blank"
										href={href}
										className="rounded-lg w-8 h-8 flex justify-center items-center"
									>
										{icon}
									</a>
								))} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
