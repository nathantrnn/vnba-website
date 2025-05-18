"use client";

import React from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Container } from '@/components/ui/Container';

export default function DesignPage() {
  return (
    <MainLayout withBackground backgroundClass="bg-background-alt">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <Container size="lg">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Design System
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl">
              This page demonstrates how layouts and containers work together to create
              consistent page structures across the VNBA website.
            </p>
          </div>
        </Container>
      </section>

      {/* Layout Explanation Section */}
      <section className="py-12 bg-white">
        <Container size="md" withVerticalPadding>
          <div className="grid gap-8">
            <div className="border border-border-light rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Root Layout</h2>
              <p className="mb-2 text-foreground-muted">
                <code className="bg-background-alt px-2 py-1 rounded">src/app/layout.tsx</code> is the root layout that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
                <li>Sets up the HTML and body structure</li>
                <li>Loads and configures the Poppins font</li>
                <li>Configures metadata and viewport settings</li>
                <li>Ensures proper mobile optimization</li>
              </ul>
            </div>

            <div className="border border-border-light rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Main Layout</h2>
              <p className="mb-2 text-foreground-muted">
                <code className="bg-background-alt px-2 py-1 rounded">MainLayout</code> is a client component that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
                <li>Handles adding the header and footer</li>
                <li>Optimizes rendering for different devices</li>
                <li>Supports custom background colors</li>
                <li>Controls header and footer visibility</li>
              </ul>
            </div>

            <div className="border border-border-light rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Container</h2>
              <p className="mb-2 text-foreground-muted">
                <code className="bg-background-alt px-2 py-1 rounded">Container</code> controls:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
                <li>Content width constraints (sm, md, lg, xl, full)</li>
                <li>Horizontal padding with device-safe areas</li>
                <li>Optional vertical padding</li>
                <li>Can render as any HTML element</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Container Size Demonstrations */}
      <section className="py-12 bg-background-alt">
        <Container size="xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">Container Size Examples</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <Container size="sm" className="bg-primary-50 rounded-lg p-4">
                <p className="text-center font-semibold">Container: Small (max-w-3xl)</p>
              </Container>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <Container size="md" className="bg-secondary-50 rounded-lg p-4">
                <p className="text-center font-semibold">Container: Medium (max-w-5xl)</p>
              </Container>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <Container size="lg" className="bg-accent-50 rounded-lg p-4">
                <p className="text-center font-semibold">Container: Large (max-w-7xl)</p>
              </Container>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <Container size="xl" className="bg-success-50 rounded-lg p-4">
                <p className="text-center font-semibold">Container: XL (max-w-screen-2xl)</p>
              </Container>
            </div>
          </div>
        </Container>
      </section>

      {/* Layout Component Usage Example */}
      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">How to Use in New Pages</h2>
          <div className="bg-gray-50 p-6 rounded-lg overflow-auto">
            <pre className="text-sm">
{`// Example page implementation
import React from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Container } from '@/components/ui/Container';

export default function NewPage() {
  return (
    <MainLayout>
      <section className="py-12">
        <Container size="lg">
          <h1>Page Title</h1>
          <p>Content goes here...</p>
        </Container>
      </section>
      
      <section className="py-12 bg-background-alt">
        <Container size="md">
          <h2>Another Section</h2>
          <p>More content...</p>
        </Container>
      </section>
    </MainLayout>
  );
}`}
            </pre>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 