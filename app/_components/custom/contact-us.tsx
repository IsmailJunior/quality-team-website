"use client";
import type { FC } from "react";
import { send } from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
	from_name: z.string().min(2).max(50),
	to_name: z.string().min(2).max(50),
	message: z.string().min(4),
	reply_to: z.string().email(),
});

export const ContactUs: FC = () => {
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
			const result = await send(
				"service_ojofyv6",
				"template_3myggmh",
				values,
				"PXUaPhRxenWs9DCqa"
			);
			console.log(result);
			console.log(values);
			form.reset();
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
								<FormLabel className="text-white">
									Name
								</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormDescription>Your name</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="reply_to"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									Email
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Your Email"
										{...field}
									/>
								</FormControl>
								<FormDescription>Your email</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									Message
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Message"
										{...field}
									/>
								</FormControl>
								<FormDescription>Your message</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="mt-4 bg-white border text-zinc-950 hover:text-white w-full"
					>
						Submit
					</Button>
				</form>
			</Form>
			<div>
				<Map />
			</div>
		</div>
	);
};
