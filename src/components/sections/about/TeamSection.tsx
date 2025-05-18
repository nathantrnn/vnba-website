import { Container } from "@/components/ui/Container";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export function TeamSection() {
  // Placeholder data - would likely come from CMS or API
  const teamMembers: TeamMember[] = [
    {
      name: "Team Member 1",
      role: "Head Coach",
      bio: "Brief biography of team member 1",
      imageUrl: "/media/placeholder.jpg"
    },
    // Additional team members would go here
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the dedicated coaches and staff who make VNBA possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gray-100">
                {/* This would be the team member's photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Photo Placeholder
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 