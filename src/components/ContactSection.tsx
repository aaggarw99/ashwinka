import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Download, Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Send me an email for collaborations, opportunities, or just to say hello.
          </p>
          <Button asChild>
            <a href="mailto:aaggarw99@gmail.com">Send Email</a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Connect with me on LinkedIn for professional networking and updates.
          </p>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/aaggarw99" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Resume
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Download my resume for a detailed overview of my experience and skills.
          </p>
          <Button asChild variant="outline">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
