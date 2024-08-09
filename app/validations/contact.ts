import * as z from "zod";

export const formSchema = z.object( {
	from_name: z.string().min(2).max(50),
	to_name: z.string().min(2).max(50),
	message: z.string().min(4),
	reply_to: z.string().email(),
});