import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconUrl?: string;
}

interface FeatureGridProps {
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
  withBorder?: boolean;
  withBackground?: boolean;
}

export function FeatureGrid({
  title,
  description,
  features,
  columns = 3,
  className,
  withBorder = false,
  withBackground = false,
}: FeatureGridProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      withBackground && "bg-gray-50",
      className
    )}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          )}
        </div>
        
        <div className={cn(
          "grid gap-8",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6",
                withBorder && "border border-gray-200 rounded-lg"
              )}
            >
              <div className="mb-4">
                {feature.icon || (feature.iconUrl && (
                  <img 
                    src={feature.iconUrl} 
                    alt={feature.title} 
                    className="w-12 h-12" 
                  />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 