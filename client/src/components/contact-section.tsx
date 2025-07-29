import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--portfolio-primary)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <a 
              href="https://linkedin.com/in/aaryandharmadhikari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 border-2 border-[var(--portfolio-accent)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] hover:scale-110 transition-all duration-300 cursor-pointer group"
            >
              <Linkedin className="text-[var(--portfolio-accent)] group-hover:text-[var(--portfolio-primary)] transition-colors duration-300" size={28} />
            </a>
            <a 
              href="https://github.com/aaryandharmadhikari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 border-2 border-[var(--portfolio-accent)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] hover:scale-110 transition-all duration-300 cursor-pointer group"
            >
              <Github className="text-[var(--portfolio-accent)] group-hover:text-[var(--portfolio-primary)] transition-colors duration-300" size={28} />
            </a>
            <a 
              href="mailto:aaryandharmadhikari@gmail.com"
              className="w-16 h-16 border-2 border-[var(--portfolio-accent)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] hover:scale-110 transition-all duration-300 cursor-pointer group"
            >
              <Mail className="text-[var(--portfolio-accent)] group-hover:text-[var(--portfolio-primary)] transition-colors duration-300" size={28} />
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[var(--portfolio-secondary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)] w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[var(--portfolio-text-primary)]">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Your name"
                          className="w-full bg-[var(--portfolio-primary)] border border-[var(--portfolio-secondary)] rounded-lg px-4 py-3 text-[var(--portfolio-text-primary)] focus:border-[var(--portfolio-accent)] focus:outline-none transition-colors duration-300"
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
                      <FormLabel className="text-sm font-medium text-[var(--portfolio-text-primary)]">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="w-full bg-[var(--portfolio-primary)] border border-[var(--portfolio-secondary)] rounded-lg px-4 py-3 text-[var(--portfolio-text-primary)] focus:border-[var(--portfolio-accent)] focus:outline-none transition-colors duration-300"
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
                      <FormLabel className="text-sm font-medium text-[var(--portfolio-text-primary)]">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={5}
                          placeholder="Tell me about your project..."
                          className="w-full bg-[var(--portfolio-primary)] border border-[var(--portfolio-secondary)] rounded-lg px-4 py-3 text-[var(--portfolio-text-primary)] focus:border-[var(--portfolio-accent)] focus:outline-none transition-colors duration-300 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] py-4 rounded-lg font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
