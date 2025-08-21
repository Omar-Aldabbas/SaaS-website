import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col p-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 justify-evenly items-center ">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl text-primary font-bold">Biccas</h2>
          <p className="text-brand">Get started noew try our product</p>
          <form action="#" className="relative">
            <input
              type="email"
              placeholder="Enter your email here"
              name="email input"
              className="outline-3 outline-white h-9 w-[70%] rounded-xl p-1"
            />
            <Send
              size={35}
              className="rounded-full bg-primary text-white p-2 absolute top-0 right-3/10"
            />
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-evenly items-center px-6 py-8">
          <div>
            <h4 className="text-xl mb-3 text-white">Support</h4>
            <ul className="list-none text-brand ">
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Help Center
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                About
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Contact
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xl mb-3 text-white">Help and Solution</h4>
            <ul className="list-none text-brand ">
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Support docs{" "}
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                System status
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Covid responde
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xl mb-3 text-white">Product</h4>
            <ul className="list-none text-brand ">
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Update
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Security
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Beta test
              </li>
              <li className="hover:underline hover:scale-102 transition-all duration-400">
                Pricing product
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly p-4 text-white">
        <div>&copy; {new Date().getFullYear()} Biccas Inc. Copyright and rights reserved</div>
        <div>Terms and Condtions | Privacy Policy</div>
      </div>
    </footer>
  );
};
