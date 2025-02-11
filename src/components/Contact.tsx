import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32 px-4">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Touch</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Lorem Ipsum
        </p>
      </div>
      <Card className="shadow-lg max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Lorem Ipsum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <p>Brasil</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <p>(xx) xxxxx-xxxx</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <p> xxxxxxxxxxxxx@xxxxx.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/" target="_blank" className="text-primary flex items-center gap-2">
              <Phone size={20} /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/eduardo-gerhardt/" target="_blank" className="text-primary flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="text-primary flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
