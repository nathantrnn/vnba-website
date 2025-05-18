import { Container } from "../ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Vietnam Basketball Academy</h3>
            <p className="text-sm text-gray-600 max-w-md">
              Vietnam's leading youth basketball training academy
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* Links will go here */}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              {/* Contact info will go here */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Vietnam Basketball Academy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
} 