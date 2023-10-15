
const Footer = () => {
  return (
    <>
      <footer className="bg-white shadow dark:bg-[#5E42CE] relative w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">© 2023 <a href="#" className="hover:underline">Tugas 3 PWL - 120140004 - Hariando Muthi</a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">Beranda</a>
            </li>
            <li>
              <a href="/tentang" className="mr-4 hover:underline md:mr-6">Tentang</a>
            </li>
            <li>
              <a href="/kontak" className="mr-4 hover:underline md:mr-6">Kontak</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer