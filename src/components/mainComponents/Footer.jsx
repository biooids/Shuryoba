function Footer() {
  return (
    <footer className=" p-5 border-t-[1px] border-text-color">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Creator Info */}
        <section className="flex items-center gap-2">
          <span className="">Created by:</span>
          <a
            href="https://biooids.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            biooids.com
          </a>
        </section>

        {/* Copy Right Info */}
        <section className="mt-3 md:mt-0">
          <span className="text-sm">&copy; 2025. All rights reserved.</span>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
