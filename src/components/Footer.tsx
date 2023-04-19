import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const social_tags = [
	{
		name: 'github',
		href: 'https://github.com/shinyhawk',
		icon: <BsGithub className="text-2xl" />,
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/samuelrnnv1/',
		icon: <BsInstagram className="text-2xl" />,
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/sam-p-quino/',
		icon: <BsLinkedin className="text-2xl" />,
	},
]

export default function Footer() {
	return (
		<div className="h-48 w-full flex flex-col justify-center items-center bg-main-dark bg-fixed bg-cover">
			<div className="w-40 mx-auto">
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
			<p className="mt-2 text-base">Peter.H | 2023</p>
		</div>
	)
}
