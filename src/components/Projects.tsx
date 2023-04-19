import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'

const projectsData = [
	{
		image: 'https://ucarecdn.com/e35c7d12-3b26-49fd-8d45-4bb42210e2e1/',
		title: 'senvii',
		description:
			'Demo project that aims to showcase the virtues of a intelligent roadway diagnosis.',
		deploy: 'https://www.senvii.com/',
		repo: null,
	},
	{
		image: 'https://ucarecdn.com/803732bd-ffa1-4608-b918-bf280c6b6877/',
		title: 'spin off',
		description:
			'Front-end project using a vast database of movies and TV shows.',
		deploy: 'https://spin-off.netlify.app/',
		repo: 'https://github.com/shinyhawk/MoviesApp',
	},
]

export default function Projects() {
	return (
		<section className="bg-main-dark">
			<div className="py-28 mx-auto w-box" id="projects">
				<h2 className="text-3xl uppercase font-titles text-center">Projects</h2>

				<div className="mt-14 w-full flex flex-wrap justify-center gap-8">
					{projectsData.map(project => (
						<div key={project.title} className="max-w-xs">
							<div className="relative aspect-video">
								<div className="absolute w-full h-full bg-main-mid rounded-lg" />
								<Image
									src={project.image}
									className="absolute object-top object-cover block rounded-lg aspect-video"
									width={320}
									height={180}
									alt={project.title}
								/>
							</div>
							<div className="px-2 mt-4 flex items-center justify-between">
								<p className="font-sans uppercase tracking-[.2rem] text-zinc-400 text-sm">
									{project.title}
								</p>
								<div className="flex gap-x-2">
									<a
										title="live deploy"
										target="_blank"
										href={project.deploy ?? '/'}
										className={`hover:bg-zinc-400/20 rounded-md outline outline-1 outline-zinc-600 transition-colors ease-out ${
											project.deploy ||
											'select-none pointer-events-none opacity-30'
										}`}
									>
										<BiLinkExternal className="m-2" />
									</a>
									{/* <a
										title="github repo"
										target="_blank"
										href={project.repo ?? '/'}
										className={`hover:bg-zinc-400/20 rounded-md outline outline-1 outline-zinc-600 transition-colors ease-out ${
											project.repo ||
											'select-none pointer-events-none opacity-30'
										}`}
									>
										<FiGithub className="m-2" />
									</a> */}
								</div>
							</div>
							<p className="px-2 mt-2 text-base text-zinc-400 h-24">
								{project.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
