"use client"
import {
    Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().min(5),
  message: z.string().min(15),
  contact: z.string().min(10),
  address: z.string().min(15)
});
function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      address: "",
      contact: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset();
  }
  return (
    <div>
      <h1 className="text-blue-500 text-center text-3xl">Dealer Enquiry</h1>
      <p className="text-center mt-4">For Dealer Enquiry whatsoever,please feel free to contact us</p>
      <div className="border sm:mx-auto mx-3 my-4 rounded-md bg-slate-100 sm:w-2/4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 flex flex-col ml-3 mr-3 mb-2 mt-2"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/4">Full Name*</FormLabel>
                  <FormControl className="w-3/4">
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/4">Email*</FormLabel>
                  <FormControl className="w-3/4">
                    <Input placeholder="Your mail id" type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/4">Contact*</FormLabel>
                  <FormControl className="w-3/4">
                    <Input
                      placeholder="Your Contact No."
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/4">Address*</FormLabel>
                  <FormControl className="w-3/4">
                    <Textarea
                      placeholder="Complete Address(minimum 15 characters)"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/4">Message*</FormLabel>
                  <FormControl className="w-3/4">
                    <Textarea
                      placeholder="Minimum 15 characters"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <button
              type="submit"
              className={
                !form.formState.isValid || form.formState.isSubmitting
                  ? `border w-2/6 mx-auto bg-gray-400 rounded-md font-semibold text-white`
                  : `border w-1/5 mx-auto bg-blue-500 rounded-md font-semibold text-white`
              }
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting" : "Submit"}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Page;
