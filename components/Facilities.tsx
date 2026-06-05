/* eslint-disable @next/next/no-img-element */
export default function Facilities() {
  return (
    <section id="facilities" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline text-5xl font-black mb-4">
              PREMIUM{" "}
              <span className="text-secondary italic">FACILITIES</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              World-class infrastructure designed for the modern player. Every
              detail optimized for the perfect bounce.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-lg bg-surface-container-highest text-sm font-label border border-outline-variant/30">
              8 Indoor Courts
            </span>
            <span className="px-4 py-2 rounded-lg bg-surface-container-highest text-sm font-label border border-outline-variant/30">
              4 Outdoor Courts
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Panoramic Center Court - Large */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Aerial perspective of multiple blue indoor padel courts under bright LED studio-style lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHWieJgjMWEsh0QryhkVx4DC5UdYCLmGXcv5hTSNvDp8L_Zlrv-q4BSeBTQHQ2tWsOfJuWAvGs-X_c9LrTV8fZ9OZV0SiCyigxEzx6xIDpr8sFru3TPHRRnDYr8R8Gb9otYD4HwqnboMY-UsPnxP7PTSffXkVRqorFtxDs9yKzBmLQp-HinI3TszzBjqMTglPsBs1BpjQEoLbLbmS3sTZJqCehum4nyf_AfMbtuTOeLlY6EB4_cti8KYtte4vMP09nOuYx1dk7roT_"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-headline font-bold text-primary">
                Panoramic Center Court
              </h3>
              <p className="text-sm text-on-surface-variant">
                Advanced acoustics and HD match recording.
              </p>
            </div>
          </div>

          {/* Elite Locker Suites */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Luxurious locker room with dark matte finishes, gold accents, and clean towels stacked neatly"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKNaojeX6X6TDiu5WGIJ0PRcXBspzBvdJbDrZViO0CxkBDBb-WWdqKNjTbWS3jc7sNe7h5IyMXOqfBdpgtHR7tTkWGxKN-MnZRrd8HHAex85AkZ36I8JluGtrJ_txB82T7-cR1vMvTYkMc2b65eLhqLjNfwCugiLZvM-m7ZaZdahgkYYdo0jnBXMz0S95kcUw2s71emJRZacvVaaXMsQJ0HtM-h9EUutKyFy7Xh6DO12oair3o_d4ocgvZuOyFa03XS_6u1w4eHdD6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-headline font-bold">
                Elite Locker Suites
              </h3>
            </div>
          </div>

          {/* Performance Gym */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="High end fitness area with modern weights and cardiovascular equipment facing court windows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNBMgol0OkTySxzb--kpsTXlFf3OjQ5lZNcxTpfAcojfsRKTCDh36pO7GjPXCoKupFak4A0MkHaD4k7reLRPTZphmUvx-OnVYHLYVAxbwwveB26iUE_F5THbLEkW_UQGp8SfkSbJsZuX3AgyByClZvebovgpn0J7utMKAYASuGoQ-0CgROqscsBGJIcjIoewwZIspZa3IGbtt-m1-lRsSV-9L5G7ztDx9VIA7cIxrAvLyfqpawhO3zMEsFhT2YxFDmLYMw3ObZ2cWb"
            />
            <div className="absolute bottom-4 left-4 font-headline font-bold">
              Performance Gym
            </div>
          </div>

          {/* Kinetic Cafe */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Stylish coffee bar area with minimalist design and warm lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZpXXcUlqmrcOdeovIPKUYdIbQBhhmv1QHKmubMwsx868BWdMWurWMKOs0QWp-cKLv1EPPWzGzW_Pl6igj59Qnook81CoMBg9b-SPhW0I5t6M-aBO86QLuUIdWhvZAtywiQQCLTU0MTQZy6VwUzS4n59zLZTSE0fOAG-7-JTx9qmdbR6tmx9Zyft7I4ZTrtlOjibbm_yyovFvSjb8MmrvUzGDrKvGKXmMI-43fjSCzbipm5diPb4ilBvFL_joKTDXNbSFhAa7BrFnb"
            />
            <div className="absolute bottom-4 left-4 font-headline font-bold">
              Kinetic Cafe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
