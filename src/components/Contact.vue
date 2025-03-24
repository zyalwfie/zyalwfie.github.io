<script setup>
	import { ref } from 'vue';

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
									:class="[phoneCopied ? 'opacity-100' : 'opacity-0']"
									class="text-xs font-anonymousPro italic opacity-0 transition">
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
									:class="[emailCopied ? 'opacity-100' : 'opacity-0']"
									class="text-xs font-anonymousPro italic opacity-0 transition">
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
									for=""
									class="text-base font-medium">
									Your name
								</label>
								<div class="mt-2.5 relative">
									<input
										type="text"
										name=""
										id=""
										placeholder="Enter your full name"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for=""
									class="text-base font-medium">
									Email address
								</label>
								<div class="mt-2.5 relative">
									<input
										type="email"
										name=""
										id=""
										placeholder="Enter your full name"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for=""
									class="text-base font-medium">
									Phone number
								</label>
								<div class="mt-2.5 relative">
									<input
										type="tel"
										name=""
										id=""
										placeholder="Enter your full name"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div>
								<label
									for=""
									class="text-base font-medium">
									Company name
								</label>
								<div class="mt-2.5 relative">
									<input
										type="text"
										name=""
										id=""
										placeholder="Enter your full name"
										class="block w-full px-4 py-4 font-anonymousPro placeholder:font-biryani transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px" />
								</div>
							</div>

							<div class="sm:col-span-2">
								<label
									for=""
									class="text-base font-medium">
									Message
								</label>
								<div class="mt-2.5 relative">
									<textarea
										name=""
										id=""
										placeholder=""
										class="block w-full px-4 py-4 transition-all duration-200 border-2 shadow-[5px_5px_0] focus-visible:outline-none focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px font-anonymousPro resize-y"
										rows="4"></textarea>
								</div>
							</div>

							<div class="sm:col-span-2">
								<button
									type="submit"
									class="w-full px-4 py-4 mt-2 text-base font-semibold transition-all duration-200 border-2 shadow-[5px_5px_0] hover:shadow-[2px_2px_0] hover:translate-y-px focus-visible:shadow-[2px_2px_0] focus-visible:translate-y-px focus-visible:outline-none">
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
