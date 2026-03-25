import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export interface MethodologyStep {
  title: string;
  description: string;
  stepNumber: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}