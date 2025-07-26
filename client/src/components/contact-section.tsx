import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
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
      subject: "",
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
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <Mail className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-[var(--portfolio-text-secondary)]">aaryan@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <Phone className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-[var(--portfolio-text-secondary)]">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <MapPin className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-[var(--portfolio-text-secondary)]">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-[var(--portfolio-secondary)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
              >
                <Linkedin className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[var(--portfolio-secondary)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
              >
                <Github className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[var(--portfolio-secondary)] rounded-xl flex items-center justify-center hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
              >
                <Twitter className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[var(--portfolio-secondary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)]">
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[var(--portfolio-text-primary)]">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Project discussion"
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
                  className="w-full gradient-bg text-[var(--portfolio-text-primary)] py-4 rounded-lg font-semibold hover:scale-[1.02] transition-transform duration-300"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
