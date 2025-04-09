
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is a simulation of form submission since we don't have a backend
      // In a real implementation, you would send this data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Clear form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-stone bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-stone bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-stone bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-navy resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="text-sm text-navy/70">
        Or email me directly at{" "}
        <a
          href="mailto:bhaumikkaji@gmail.com"
          className="underline hover:text-navy transition-colors"
        >
          bhaumikkaji@gmail.com
        </a>
      </p>
    </form>
  );
}
