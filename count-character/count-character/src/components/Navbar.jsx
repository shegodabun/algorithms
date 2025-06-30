import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <section className="flex justify-between items-center p-4">
        <h3 className="text-xl font-semibold text-white">Count Character</h3>
        <div className="bg-gray-700 p-2 rounded-md">
          <Sun color="white" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
