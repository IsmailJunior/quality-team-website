"use client";
import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { send } from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "@/app/_validations/contact";
import { Button } from "@/app/_components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Map } from "@/app/_components/custom/map";

export const ContactUs: FC = () => {
	const [isSending, setIsSending] = useState(false);
	const { t } = useTranslation();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			from_name: "",
			to_name: "QualityTeam",
			message: "",
			reply_to: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsSending(true);
			await send(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
				values,
				process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
			);
			form.reset();
			setIsSending(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="flex flex-col lg:flex-row gap-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="lg:w-1/3"
				>
					<FormField
						control={form.control}
						name="from_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white text-lg">
									{t(
										"common:widgets.contact.fields.name.label"
									)}
								</FormLabel>
								<FormControl>
									<Input
										className="text-lg"
										placeholder={t(
											"common:widgets.contact.fields.name.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									{t(
										"common:widgets.contact.fields.name.description"
									)}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="reply_to"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white text-lg">
									{t(
										"common:widgets.contact.fields.email.label"
									)}
								</FormLabel>
								<FormControl>
									<Input
										className="text-lg"
										type="email"
										placeholder={t(
											"common:widgets.contact.fields.email.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									{t(
										"common:widgets.contact.fields.email.description"
									)}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white text-lg">
									{t(
										"common:widgets.contact.fields.message.label"
									)}
								</FormLabel>
								<FormControl>
									<Textarea
										className="text-lg"
										placeholder={t(
											"common:widgets.contact.fields.message.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						name="submit"
						disabled={isSending ? true : false}
						type="submit"
						className="mt-4 bg-white border  text-zinc-950 hover:text-white lg:w-full"
					>
						{t("common:widgets.contact.action")}
					</Button>
				</form>
			</Form>
			<div>
				<Map />
			</div>
		</div>
	);
};
