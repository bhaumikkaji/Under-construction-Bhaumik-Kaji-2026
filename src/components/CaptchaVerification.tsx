
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Simple schema for the CAPTCHA form
const formSchema = z.object({
  captchaInput: z.string().min(1, { message: "Please enter the CAPTCHA code" }),
});

type CaptchaVerificationProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  captchaCode?: string;
};

export function CaptchaVerification({ 
  isOpen, 
  onOpenChange, 
  onSuccess,
  captchaCode = Math.floor(1000 + Math.random() * 9000).toString() // Default to a 4-digit code if none provided
}: CaptchaVerificationProps) {
  const { toast } = useToast();
  const [code] = useState(captchaCode);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      captchaInput: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.captchaInput === code) {
      toast({
        title: "Verification successful",
        description: "You are being redirected...",
      });
      onSuccess();
      onOpenChange(false);
    } else {
      toast({
        title: "Verification failed",
        description: "Please try again with the correct code",
        variant: "destructive",
      });
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-navy dark:text-cybertext">Verify you're human</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-2xl font-bold tracking-widest select-none text-navy dark:text-cybertext mb-2" style={{ letterSpacing: '0.5em' }}>
                {code}
              </div>
              <p className="text-sm text-navy/70 dark:text-cybertext/70">
                Please enter the code shown above
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="captchaInput"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy dark:text-cybertext">CAPTCHA Code</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter the code" 
                      {...field} 
                      className="bg-background text-navy dark:text-cybertext"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="submit" className="bg-navy dark:bg-cybertext text-white dark:text-darkbg">
                Verify
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
