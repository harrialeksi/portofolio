import { AiFillHome } from 'react-icons/ai'
import { HiSquares2X2, HiUser } from 'react-icons/hi2'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdMail, IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const sections = [
	{
		title: 'start',
		id: 'start',
		icon: <AiFillHome className="text-2xl m-2" />,
	},
	{
		title: 'about me',
		id: 'about',
		icon: <HiUser className="text-2xl m-2" />,
	},
	{
		title: 'projects',
		id: 'projects',
		icon: <HiSquares2X2 className="text-2xl m-2" />,
	},
	{
		title: 'contact',
		id: 'contact',
		icon: <IoMdMail className="text-2xl m-2" />,
	},
]

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false)
	const openNav = () => {
		setIsVisible(true)
		document.body.style.overflow = 'hidden'
	}
	const closeNav = () => {
		setIsVisible(false)
		document.body.style.overflow = 'auto'
	}
	const navigate = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		closeNav()
	}
	return (
		<>
			<button
				title="menu"
				className="shadow-md fixed top-6 left-0 z-40 bg-zinc-800 flex justify-end w-16 rounded-r-2xl"
				onClick={openNav}
			>
				<HiMenuAlt2 className="text-3xl mr-4 my-4" />
			</button>
			<AnimatePresence>
				{isVisible && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className="fixed top-0 w-full h-screen bg-black/40 z-[45] backdrop-brightness-75"
						/>
						<motion.div
							initial={{ x: -320 }}
							animate={{ x: 0 }}
							exit={{ x: -320 }}
							transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
							className="fixed top-0 left-0 z-[45] bg-main-mid w-full max-w-xs h-screen"
						>
							{/* sidebar content container */}
							<div className="relative w-full h-full shadow-lg pt-24">
								<button className="absolute top-6" onClick={closeNav}>
									<IoMdClose className="m-4 text-3xl" />
								</button>
								{/* links */}
								<nav className="px-4 flex flex-col gap-y-3">
									{sections.map(section => (
										<motion.button
											whileTap={{ scale: 0.9 }}
											onClick={() => navigate(section.id)}
											key={section.id}
											className="flex items-center px-2 py-3 rounded-md bg-main-dark/40 hover:text-emerald-500 transition-colors ease-out"
										>
											{section.icon}
											{section.title}
										</motion.button>
									))}
								</nav>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
