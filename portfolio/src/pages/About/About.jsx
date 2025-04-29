import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            About me ..
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0 flex justify-center items-center">
              <div className="w-80 h-80 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg">
                <img
                  src={HeroImg}
                  alt="payments illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Mohamed Oussema Boussida, a passionate software
                engineering student specializing in web and Internet
                technologies - TWIN.{" "}
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    👨🏻‍💻 I am actively seeking opportunities to acquire new
                    skills, learn, and ultimately achieve success in my ongoing
                    journey of personal and professional development.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      TWIN 💡💻
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                    </div> */}
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
