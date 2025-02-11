import Marquee from "react-fast-marquee";

interface SponsorProps {
  logo: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  { logo: "/brands/1.png", name: "1" },
  { logo: "/brands/2.png", name: "2" },
  { logo: "/brands/3.png", name: "3" },
  { logo: "/brands/4.png", name: "4" },
  { logo: "/brands/5.png", name: "5" },
  { logo: "/brands/6.png", name: "6" },
  { logo: "/brands/7.png", name: "7" },
  { logo: "/brands/8.png", name: "8" },
  { logo: "/brands/9.png", name: "9" },
  { logo: "/brands/10.png", name: "10" },
  { logo: "/brands/11.png", name: "11" },
  { logo: "/brands/12.png", name: "12" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-lg lg:text-2xl font-bold mb-8 text-primary">
        Lorem Ipsum
      </h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex items-center"
        loop={0}
      >
        {sponsors.map(({ logo, name }: SponsorProps) => (
          <div key={name} className="flex items-center gap-16 px-8">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
