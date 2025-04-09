
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";
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
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Configure emailjs with your service ID, template ID, and public key
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "bhaumikkaji@gmail.com",
        subject: "Portfolio connect - New message from " + data.name,
      };
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy dark:text-cybertext">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  className="border-stone bg-transparent dark:border-cyberborder focus:ring-navy dark:focus:ring-cybertext"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy dark:text-cybertext">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  {...field} 
                  className="border-stone bg-transparent dark:border-cyberborder focus:ring-navy dark:focus:ring-cybertext"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy dark:text-cybertext">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message" 
                  {...field} 
                  rows={5}
                  className="border-stone bg-transparent dark:border-cyberborder focus:ring-navy dark:focus:ring-cybertext resize-none" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy text-white dark:bg-cybertext dark:text-darkbg hover:bg-navy/90 dark:hover:bg-cybertext/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-sm text-navy/70 dark:text-cybertext/70">
          Or email me directly at{" "}
          <a
            href="mailto:bhaumikkaji@gmail.com"
            className="underline hover:text-navy dark:hover:text-cybertext transition-colors"
          >
            bhaumikkaji@gmail.com
          </a>
        </p>
      </form>
    </Form>
  );
}
