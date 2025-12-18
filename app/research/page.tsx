"use client";

import Image from "next/image";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background image + overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/uclanight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.7,
          filter: "blur(0.5px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        {/* Title card + context */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            BHC&apos;s Research Group
          </h1>
          <p className="text-white/85 text-base lg:text-lg leading-relaxed">
            The BHC Research Group provides UCLA undergraduates with guidance, mentorship, and resources to pursue independent research—from framing questions and building methods to presenting at conferences and integrating projects into campus labs.
          </p>
        </div>

        {/* Research initiative */}
        <div className="space-y-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-[0.08em] uppercase">
            Research Initiatives
          </h2>

          <div className="space-y-2 max-w-4xl mx-auto">
            <p className="text-white text-lg leading-relaxed">
              UNET and Attention-Based Architectures for Denoising Functional Ultrasound Imaging
            </p>
            <p className="text-white/85 text-sm">
              Alfred Ukudeev-Freeman, Avik Pamarthi, Naren Sathishkumar, Sahil Puranik, Ganeshreddy Venumbaka
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.35)] aspect-[4/3] max-w-[520px] mx-auto w-full">
              <Image
                src="/images/IMG_6451.jpg"
                alt="Functional ultrasound imaging research, sample 1"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.35)] aspect-[4/3] max-w-[520px] mx-auto w-full">
              <Image
                src="/images/IMG_6458.jpg"
                alt="Functional ultrasound imaging research, sample 2"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-white text-base leading-relaxed">
              Functional ultrasound imaging (fUSI) is a powerful neuroimaging technology based on sensitive Doppler signals to detect cerebral blood flow and volume, but physiological noise often obscures spatiotemporal detail. This work compares a classical Gaussian + band-pass filtering baseline against a 3-D U-Net baseline and a 3-D U-Net + Transformer trained on synthetically corrupted Caltech fUSI data to achieve data-driven denoising that preserves both fine spatial detail and global temporal consistency. Presented at the Society of Neuroscience 2025 Annual Conference and the UCLA Neuroscience Day Conference, awarded a UCLA Brain Research Initiative scholarship, and now being integrated into labs at UCLA.
            </p>
          </div>

          <div className="text-center pt-20">
            <p className="text-white text-base lg:text-lg leading-relaxed">
              Additional research initiatives currently in the works...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

