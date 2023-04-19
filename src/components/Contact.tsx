import { FormEvent, useState, useRef, ChangeEvent } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'

const EMAIL_REGEX =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const onChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!Object.values(form).every(value => value)) {
			return toast.error('Fill all fields!', { id: 'fillerror' })
		}
		if (!EMAIL_REGEX.test(form.email)) {
			return toast.error('Type a valid email!', { id: 'emailerror' })
		}
		setIsSubmitting(true)

		try {
			await axios.post('/api/contact', form)
		} catch (error) {
			return toast.error('There was an unexpected error', { id: 'servererror' })
		}
		setIsSubmitting(false)
		setForm({
			name: '',
			email: '',
			message: '',
		})
		setIsSuccess(true)
		toast.success('Message sent successfully', { id: 'sendsucess' })
	}

	return (
		<section
			id="contact"
			className="bg-no-repeat bg-cover bg-fixed bg-center bg-main-dark"
			style={{ backgroundImage: 'url(/peaks.svg)' }}
		>
			<div className="w-box mx-auto py-12 lg:py-32 grid lg:grid-cols-2 gap-10">
				<div className="lg:mt-12">
					<h2 className="font-titles uppercase text-3xl max-lg:text-center">
						Let&apos;s work together
					</h2>
					<p className="mt-8">
						Did my profile catch your interest? Are you looking for a talented
						dev to bring your web solution to life? Tell me more about it!
					</p>
					<p className="mt-6">
						Send me a message using this form. Be sure to provide as much detail
						as possible. And don&apos;t forget to include any links you want me
						to check out - just make sure they start with{' '}
						<span className="text-emerald-500 font-bold">
							&quot;https://&quot;
						</span>
						, for script neccesities 🤝.
					</p>
				</div>
				<div className="place-self-center w-full max-w-lg h-[500px] bg-main-mid rounded-2xl shadow-xl px-6 py-8">
					<form
						onSubmit={onSubmit}
						acceptCharset="utf-8"
						className="flex flex-col justify-between h-full"
					>
						<div className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Your name"
								name="name"
								onChange={onChange}
								value={form.name}
								className="bg-transparent text-base px-2 py-2 border-b outline-none border-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
							<input
								type="text"
								placeholder="Your email"
								name="email"
								onChange={onChange}
								value={form.email}
								className="bg-transparent text-base px-2 py-2 border-b outline-none border-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
							<textarea
								placeholder="Type your message here..."
								name="message"
								onChange={onChange}
								value={form.message}
								className="bg-main-dark/10 text-base mt-5 px-2 py-3 outline-none h-52 rounded-md resize-none border border-zinc-600 scrollbar-thin scrollbar-track-white/0 scrollbar-thumb-zinc-600 focus:border-accent transition-colors ease-out duration-300"
							/>
						</div>
						<motion.button
							whileTap={{ scale: 0.9 }}
							disabled={!form.name || !form.email || !form.message || isSuccess}
							type="submit"
							className={`text-zinc-200 h-12 rounded-full ${
								isSuccess ? 'bg-emerald-500' : 'bg-zinc-700'
							} transition-all ease-out disabled:animate-none disabled:opacity-30 disabled:cursor-not-allowed duration-500 grid place-content-center`}
						>
							<AnimatePresence>
								{isSubmitting ? (
									<motion.div
										variants={{
											visible: { opacity: 1 },
											notVisible: { opacity: 0 },
										}}
										initial="notVisible"
										animate="visible"
										className="h-5 w-5 rounded-full border-[3px] border-t-transparent animate-spin"
									/>
								) : (
									<motion.span
										variants={{
											visible: { opacity: 1 },
											notVisible: { opacity: 0 },
										}}
										initial="notVisible"
										animate="visible"
									>
										Send
									</motion.span>
								)}
							</AnimatePresence>
						</motion.button>
					</form>
				</div>
			</div>
		</section>
	)
}
