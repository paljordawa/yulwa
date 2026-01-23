
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricePlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}