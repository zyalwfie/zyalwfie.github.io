<script setup>
	import emailjs from '@emailjs/browser';
	import { ref } from 'vue';

	const messageData = ref({
		name: '',
		subject: '',
		phoneNumber: '',
		email: '',
		message: '',
	});

	const sendEmail = async () => {
		try {
			await emailjs.send(
				'service_zz9w6tq',
				'template_ofup0to',
				messageData.value,
				'yULuTkGJNE_8VrJtk'
			);

			showEmailAlert.value = true;
			emailAlertStats.value = 'success';

			setTimeout(() => {
				showEmailAlert.value = false;
				emailAlertStats.value = '';
			}, 2000);
		} catch (error) {
			console.error('Error sending email: ', error);
			showEmailAlert.value = true;
			emailAlertStats.value = 'error';

			let width = 0;
			const interval = setInterval(() => {
				width += 2;
				loadingBarWidth.value = width;
				if (width >= 100) {
					clearInterval(interval);
				}
			}, 20);

			setTimeout(() => {
				showEmailAlert.value = false;
				emailAlertStats.value = '';
			}, 2000);
		}
	};

	const showEmailAlert = ref(false);
	const emailAlertStats = ref('');
	const copyPhone = ref(null);
	const copyEmail = ref(null);
	const phoneCopied = ref(false);
	const emailCopied = ref(false);

	const copyPhoneToClipboard = async () => {
		try {
			if (copyPhone.value) {
				const copyPhoneTrimmed = copyPhone.value.textContent.trim();
				await navigator.clipboard.writeText(copyPhoneTrimmed);
				phoneCopied.value = true;

				setTimeout(() => {
					phoneCopied.value = false;
				}, 2000);
			}
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	const copyEmailToClipboard = async () => {
		try {
			if (copyEmail.value) {
				const copyEmailTrimmed = copyEmail.value.textContent.trim();
				await navigator.clipboard.writeText(copyEmailTrimmed);
				emailCopied.value = true;

				setTimeout(() => {
					emailCopied.value = false;
				}, 2000);
			}
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
</script>

<template>
	<Transition name="alert">
		<div
			v-show="showEmailAlert"
			class="fixed z-40 top-24 right-3 lg:top-28 lg:right-8">
			<div
				class="relative p-4 flex gap-4 items-center bg-black text-white dark:text-black dark:bg-white">
				<div class="flex items-center gap-2">
					<div class="text-xl flex items-center">
						<i class="bx bx-check-square"></i>
					</div>
					<p class="text-sm font-anonymousPro">
						Email has been sent!
					</p>
				</div>
				<div class="border-l-2 h-8"></div>
				<button
					@click="showEmailAlert = false"
					class="text-xl flex items-center cursor-pointer dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black transition">
					<i class="bx bx-x"></i>
				</button>
			</div>
		</div>
	</Transition>

	<section
		id="contact"
		class="scroll-mt-34 px-4 my-60 md:px-8 lg:px-16 xl:px-64 dark:text-white">
		<div class="max-w-2xl">
			<h2 class="flex gap-x-4 items-center font-federo">
				<i class="bx bxs-right-arrow"></i>
				<span class="text-4xl font-bold font-federo">Contact</span>
			</h2>
		</div>

		<div class="max-w-5xl mx-auto mt-12 sm:mt-16">
			<div
				class="grid grid-cols-1 gap-18 lg:gap-6 px-8 text-center md:px-0 md:grid-cols-3">
				<div class="rounded-xl">
					<div>
						<i class="bx bxs-phone bx-md"></i>
						<div class="group mt-6 relative gap-x-4">
							<p
								ref="copyPhone"
								class="text-lg min-w-max font-medium absolute z-20 bg-white dark:bg-black left-[50%] -translate-x-[50%] cursor-pointer">
								+62 821 4732 1636
							</p>
							<div
								class="hidden lg:flex flex-col gap-y-1 items-center absolute z-10 -bottom-22 opacity-0 -translate-y-10 left-[50%] -translate-x-[50%] transition group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer">
								<span
									@click="copyPhoneToClipboard"
									class="rounded-full size-8 border-2 flex justify-center items-center">
									<i
										v-if="phoneCopied"
										class="bx bx-check"></i>
									<i
										v-else
										class="bx bx-clipboard"></i>
								</span>
								<p
									:class="[
										'text-xs font-anonymousPro italic transition',
										phoneCopied
											? 'opacity-100'
											: 'opacity-0',
									]">
									copied!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-xl">
					<div>
						<i class="bx bxs-envelope bx-md"></i>
						<div class="group mt-6 relative gap-x-4">
							<p
								ref="copyEmail"
								class="text-lg min-w-max font-medium absolute z-20 bg-white dark:bg-black left-[50%] -translate-x-[50%] cursor-pointer">
								zyalwfie@gmail.com
							</p>
							<div
								class="hidden lg:flex flex-col gap-y-1 items-center absolute z-10 -bottom-22 opacity-0 -translate-y-10 left-[50%] -translate-x-[50%] transition group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer">
								<span
									@click="copyEmailToClipboard"
									class="rounded-full size-8 border-2 flex justify-center items-center">
									<i
										v-if="emailCopied"
										class="bx bx-check"></i>
									<i
										v-else
										class="bx bx-clipboard"></i>
								</span>
								<p
									:class="[
										'text-xs font-anonymousPro italic transition',
										emailCopied
											? 'opacity-100'
											: 'opacity-0',
									]">
									copied!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-xl">
					<div>
						<i class="bx bxs-map bx-md"></i>
						<p class="mt-6 text-lg font-medium leading-relaxed">
							East Pagutan, Mataram City, West Nusa Tenggara,
							Indonesia
						</p>
					</div>
				</div>
			</div>

			<div class="mt-6 rounded-xl">
				<div class="py-12">
					<h3 class="text-3xl font-semibold font-federo">
						Send me a message
					</h3>

					<form
						action="#"
						method="POST"
						class="mt-14">
						<div
							class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
							<div>
								<label
									for="name"
									class="text-base font-medium">
									Name
								</label>
								<div class="mt-2.5 relative">
									<input
										v-model="messageData.name"
										id="name"
										type="text"
										placeholder="Enter your name"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for="subject"
									class="text-base font-medium">
									Subject
								</label>
								<div class="mt-2.5 relative">
									<input
										v-model="messageData.subject"
										type="text"
										id="subject"
										placeholder="Enter your subject"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for="phone"
									class="text-base font-medium">
									Phone number
								</label>
								<div class="mt-2.5 relative">
									<input
										v-model="messageData.phoneNumber"
										type="tel"
										id="phone"
										placeholder="Enter your phone number"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for="email"
									class="text-base font-medium">
									Email
								</label>
								<div class="mt-2.5 relative">
									<input
										v-model="messageData.email"
										type="email"
										id="email"
										placeholder="Enter your email"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div class="sm:col-span-2">
								<label
									for="message"
									class="text-base font-medium">
									Message
								</label>
								<div class="mt-2.5 relative">
									<textarea
										v-model="messageData.message"
										id="message"
										placeholder="Enter your message"
										class="block w-full px-4 py-4 transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px font-anonymousPro placeholder:font-biryani resize-y"
										rows="8"></textarea>
								</div>
							</div>

							<div class="sm:col-span-2">
								<button
									@click.prevent="sendEmail"
									type="submit"
									class="w-full px-4 py-4 mt-2 text-base font-semibold transition-all duration-200 border-2 shadow-[5px_5px_0] hover:shadow-[2px_2px_0] hover:translate-y-px focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px focus-visible:outline-none cursor-pointer">
									Send
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	.alert-enter-active {
		transition: all 0.3s ease-out;
	}

	.alert-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.alert-enter-from,
	.alert-leave-to {
		transform: translateX(20px);
		opacity: 0;
	}
</style>
