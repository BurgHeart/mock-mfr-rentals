
export const Footer = () => {
  return (
    <footer className="w-full flex sm:flex-row flex-col px-12 py-8 text-center sticky top-[100vh] sm:text-left sm:gap-8 text-white bg-[#353535]">
      <h1 className="text-6xl font-bold">
        MFR
      </h1>
      <div>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-8">
          <ul className="grid">
            <li>
              Rent a Vehicle
            </li>
            <li>
              Add Your Vehicle
            </li>
            <li>
              Contact
            </li>
          </ul>
          <ul className="grid">
            <li>
              About
            </li>
            <li>
              FAQ
            </li>
            <li>
              Careers
            </li>
          </ul>
          <ul className="grid">
            <li>
              Press
            </li>
            <li>
              Blog
            </li>
            <li>
              Log In
            </li>
          </ul>
          <ul className="grid md:absolute right-8">
            <li>
              Terms and Conditions
            </li>
            <li>
              Privacy Policy
            </li>
            <li>
              © 2023, MFR Rentals
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer