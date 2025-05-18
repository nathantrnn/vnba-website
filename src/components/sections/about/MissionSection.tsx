import { Container } from "@/components/ui/Container";

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Vietnam Basketball Academy, our mission is to develop young athletes through the game of basketball, instilling values of teamwork, discipline, and perseverance.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We aim to grow the sport of basketball in Vietnam while providing world-class training that prepares players for success both on and off the court.
            </p>
            <p className="text-lg text-gray-700">
              Our academy focuses on holistic development, emphasizing not only basketball skills but also character building, leadership, and academic excellence.
            </p>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg">
            {/* Placeholder for mission image or video */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Mission Image Placeholder
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 