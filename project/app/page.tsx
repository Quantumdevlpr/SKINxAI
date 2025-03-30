'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Brain, Shield, Activity } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            SKINX AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Advanced AI-powered skin disease detection and telemedicine platform for instant medical assistance
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="text-lg" onClick={() => router.push('/scan')}>
              Start Scan
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Talk to Doctor
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="AI Detection"
            description="Advanced machine learning for accurate skin condition analysis"
          />
          <FeatureCard
            icon={<Stethoscope className="w-8 h-8" />}
            title="Expert Consultation"
            description="Connect with certified dermatologists instantly"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Privacy First"
            description="Your data is encrypted and secure with medical-grade protection"
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8" />}
            title="Real-time Analysis"
            description="Get instant results and recommendations"
          />
        </div>

        {/* Trust Section */}
        <div className="bg-card rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Trusted by Healthcare Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard number="98%" text="Accuracy Rate" />
            <StatCard number="24/7" text="Available Support" />
            <StatCard number="50k+" text="Patients Helped" />
          </div>
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

interface StatCardProps {
  number: string;
  text: string;
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted-foreground">{text}</div>
    </div>
  );
}