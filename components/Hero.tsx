/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="Professional padel player hitting an overhead smash on a modern blue outdoor court with dramatic evening lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyNLodc5IAqd3pPdCvx5WwDdUzqGP7ND1gcQq2THNehNzMTNs71-VT3r4hEf7zuNdl3p_Df_vmhy_ZuXiEidtmVFaUl7iBtxU8Qdz_Gq-DozoOTv8hIiWh-kYFZ2aEfxrnfKzPERLieysq9GnYVloTq2m9LrRoz52HYR2O4JdiXrwV6aC4-8sZiIYBG7VC3TMPzcdBl6MXpwqBzVLUOoOruS22VaJXAmEZ3N2-FTSlH2PlDlwSmKObCyOa7gb6KqZwgH1jJ0oTbSbq"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="text-xs font-label uppercase tracking-widest text-primary">
              Live Now: 8 Courts Available
            </span>
          </div>

          <h1 className="font-headline text-6xl md:text-8xl font-black italic text-primary leading-none tracking-tighter">
            VANTAGE <br />
            <span className="text-on-surface">POINT PADEL</span>
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed">
            Elevate your game at the intersection of electric energy and premium
            performance. Experience the ultimate Padel destination.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-primary-fixed text-on-primary-fixed rounded-full font-headline font-extrabold text-lg flex items-center gap-2 hover:bg-primary-container transition-all shadow-[0_0_30px_-5px_rgba(202,253,0,0.3)]">
              Book a Court{" "}
              <span className="material-symbols-outlined">bolt</span>
            </button>
            <button className="px-10 py-4 bg-secondary-container text-on-secondary-container rounded-full font-headline font-extrabold text-lg flex items-center gap-2 hover:bg-secondary-fixed-dim transition-all">
              View Schedule
            </button>
          </div>
        </div>

        {/* Right - Image Grid */}
        <div className="hidden lg:block relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-container/10 blur-[120px] rounded-full" />
          <div className="grid grid-cols-2 gap-4 translate-x-12 rotate-3">
            <div className="space-y-4 pt-12">
              <div className="rounded-xl overflow-hidden border-2 border-primary-container/20 aspect-[3/4]">
                <img
                  className="w-full h-full object-cover"
                  alt="Neon yellow padel ball hitting the glass wall of a court with water droplets and motion blur"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVf9hPt1JcfxG46tiVxXgIhR-rVtOXZaZJa-F6cNsIr9U-TnjrFksREEMXqvqTIM9otddfpCGKQNXTJPhQRIfpK3qpklwTW4wvFcVu6ig9XwEFux9AvCuBdlPi4zlXF97F73YmkTarae6hDolm6SydcmyXwBw96BYhVhKouBiOGxcbDHHtBVFQQIn2AP5xMSJpCFwMuESLHhYF0ajjqf5Y2EvJ_eQ_CNAWfeo_HynMaT2anuoZW8UW785GljAVwAyAxHO0cEMK4Gup"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square bg-surface-container-high p-6 flex flex-col justify-end">
                <span className="text-4xl font-headline font-black text-primary">
                  12
                </span>
                <span className="text-sm font-label text-on-surface-variant">
                  Panoramic Courts
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden aspect-square bg-surface-container-highest p-6 flex flex-col justify-end border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">
                  sports_tennis
                </span>
                <span className="text-lg font-headline font-bold">
                  Elite Academy
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border-2 border-primary-container/20 aspect-[3/4]">
                <img
                  className="w-full h-full object-cover"
                  alt="Action shot of a padel racket connecting with a ball with high speed shutter capturing vibration"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGT6j0gFl1bmDyF8Aawg4V9JDOPGldTkhWCjdRCj1IXFo3vjXY-VWaTdzI1mqlydaFd3Lq1OMYwc54auAclg3RSoFy2pOjVyz-DJj2xaLGWoxbkqdEcgQYZIGZmKzXAdm6aQdDJJ1L1qfwPLxHr7-l0Cl5aLqtCss3JDYKY4cFBjy7oOftqoa38d_6_4Hr5kJE_8poayKVEXLdPXXAPLhNHOC0pd7qpPuQ4hWfpTsrETZ_R1hVAJotx_i2xqmmZACIPt4maG_8kmM6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
