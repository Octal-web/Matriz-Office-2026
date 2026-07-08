import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { CustomLink } from '@/Components/CustomLink';

const HeroProjectForm = lazy(() =>
    import('@/Components/HeroProjectForm').then((module) => ({
        default: module.HeroProjectForm,
    }))
);

export const HeroBanner = () => {
    const sectionRef = useRef(null);
    const HeroImgRef = useRef(null);
    const HeroTextRef = useRef(null);
    const HeroQuoteRefs = useRef([]);

    const HeroQuote = [
        <>Soluções em <span className="font-semibold">Mobiliário </span></>,
        <><span className="font-semibold">Corporativo</span> para Escritórios </>,
        <>que <span className="font-semibold text-primary">Evoluem</span> com o seu Negócio </>,
    ];

    useEffect(() => {
        let context;
        let cancelled = false;

        const runAnimation = async () => {
            if (typeof window === 'undefined') {
                return;
            }

            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const quoteItems = HeroQuoteRefs.current.filter(Boolean);

            if (prefersReducedMotion || !isDesktop) {
                quoteItems.forEach((item) => {
                    if (item) {
                        item.style.transform = 'translateY(0)';
                    }
                });

                if (HeroTextRef.current) {
                    HeroTextRef.current.style.opacity = 1;
                    HeroTextRef.current.style.transform = 'translateY(0)';
                }

                return;
            }

            const [{ gsap }, { ScrollTrigger }] = await Promise.all([
                import('gsap'),
                import('gsap/ScrollTrigger'),
            ]);

            if (cancelled) {
                return;
            }

            gsap.registerPlugin(ScrollTrigger);

            context = gsap.context(() => {
                gsap.fromTo(
                    HeroImgRef.current,
                    { yPercent: 0 },
                    {
                        yPercent: -8,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );

                quoteItems.forEach((ref, index) => {
                    gsap.fromTo(
                        ref,
                        { y: '100%' },
                        {
                            y: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            delay: index * 0.15,
                        }
                    );
                });

                gsap.fromTo(
                    HeroTextRef.current,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.6,
                        ease: 'power2.out',
                    }
                );
            }, sectionRef);

            ScrollTrigger.refresh();
        };

        runAnimation();

        return () => {
            cancelled = true;

            if (context) {
                context.revert();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            <img
                ref={HeroImgRef}
                src="/content/display/main-bg.jpg"
                alt=""
                width="1920"
                height="1080"
                fetchPriority="high"
                decoding="sync"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-60 sm:opacity-100"
            />

            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute bottom-0 left-0 top-0 w-full bg-gradient-to-r from-black/95 from-20% via-black/55 to-black/20 lg:w-3/4 lg:to-transparent" />

            <div className="relative container max-w-large">
                <div className="grid min-h-[100vh] grid-cols-1 items-end gap-10 pb-12 pt-28 md:min-h-[84vh] md:pb-[4%] lg:grid-cols-[minmax(0,1fr)_430px] lg:items-end lg:gap-12 2xl:min-h-[78vh] 2xl:pb-[5%]">
                    <div className="max-w-4xl md:ml-2">
                        <h1 className="mb-6 text-3xl leading-tight text-white sm:text-4xl 2xl:text-[44px]">
                            {HeroQuote.map((quote, index) => (
                                <div key={index} className="inline overflow-hidden sm:block 2xl:pb-1.5">
                                    <div
                                        ref={(element) => {
                                            if (element) HeroQuoteRefs.current[index] = element;
                                        }}
                                        className="inline tracking-tight sm:block sm:tracking-normal"
                                    >
                                        {quote}
                                    </div>
                                </div>
                            ))}
                        </h1>

                        <div
                            ref={HeroTextRef}
                            className="mb-8 max-w-[715px] text-balance text-sm font-light leading-normal text-white opacity-100 sm:mb-11 sm:text-base xl:text-lg 2xl:text-xl lg:opacity-0"
                        >
                            <p>
                                A Matriz Office desenvolve soluções completas para ambientes corporativos, unindo mobiliário, planejamento de espaços e personalização para criar escritórios mais funcionais, produtivos e alinhados à realidade de cada empresa.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            <CustomLink
                                href={route('Home.index')}
                                to="#solucoes"
                                className="w-full max-w-xs border border-primary bg-transparent px-8 py-3 text-center text-sm font-semibold uppercase text-white transition-colors duration-300 hover:bg-primary hover:text-black sm:py-4 sm:tracking-wider"
                            >
                                Conheça nossas soluções
                            </CustomLink>
                        </div>
                    </div>

                    <div className="w-full max-lg:mx-auto max-lg:max-w-[520px]">
                        <Suspense fallback={<div className="min-h-[420px]" />}>
                            <HeroProjectForm
                                submitRoute="Contato.enviar"
                                privacyUrl="/politica-de-privacidade"
                                buttonLabel="Peça seu orçamento"
                                fieldPrefix="hero"
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};