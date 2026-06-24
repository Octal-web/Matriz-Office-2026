import React, { useEffect, useRef } from 'react';
import { CustomLink } from '@/Components/CustomLink';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroBanner = () => {
    const HeroImgRef = useRef(null);
    const HeroBgRef = useRef(null);
    const HeroTextRef = useRef(null);
    const HeroQuoteRefs = useRef([]);

    const HeroQuote = [
        <>Soluções em <span className="font-semibold">Mobiliário </span></>,
        <><span className="font-semibold">Corporativo</span> para Escritórios </>,
        <>que <span className="font-semibold text-primary">Evoluem</span> com o seu Negócio </>
    ];

    useEffect(() => {  
        gsap.fromTo(HeroImgRef.current, 
        {
            backgroundPositionY: '50%',
        },
        {
            backgroundPositionY: '-40%',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: HeroImgRef.current,
                start: 'top',
                end: 'bottom',
                scrub: true
            }
        });

        HeroQuoteRefs.current = HeroQuoteRefs.current.filter(Boolean);

        HeroQuoteRefs.current.forEach((ref, index) => {
            gsap.fromTo(
                ref,
                {
                    y: '100%',
                },
                {
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: HeroImgRef.current,
                        start: 'top 75%',
                    },
                }
            );
        });

        gsap.fromTo(
            HeroTextRef.current,
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: HeroTextRef.current,
                    start: 'top 85%',
                },
            }
        );

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="relative overflow-hidden">
            <div
                ref={HeroImgRef}
                className="absolute inset-0 max-[430px]:bg-[length:auto_120%] max-[570px]:bg-[length:200%] sm:bg-[length:170%] xl:bg-[length:100%] opacity-60 sm:opacity-100 bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(content/display/main-bg.jpg)',
                }}
            />

            <div ref={HeroBgRef} className="absolute inset-0 bg-black origin-top opacity-50" />
            <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-black/90 from-30% to-transparent" />

            <div className="relative container max-w-large">
                <div className="md:w-3/4 md:max-w-4xl min-h-[84vh] 2xl:min-h-[78vh] flex flex-col justify-end pb-[15%] md:ml-2 pt-28 md:pb-[5%] 2xl:pb-[8%]">
                    <h1 className="text-3xl sm:text-4xl 2xl:text-[44px] text-white leading-tight mb-6">
                        {HeroQuote.map((quote, index) => (
                            <div
                                key={index}
                                className="inline sm:block overflow-hidden 2xl:pb-1.5"
                            >
                                <div
                                    ref={(el) => {
                                        if (el) {
                                            HeroQuoteRefs.current[index] = el;
                                        }
                                    }}
                                    className="inline sm:block tracking-tight sm:tracking-normal"
                                >
                                    {quote}
                                </div>
                            </div>
                        ))}
                    </h1>

                    <div
                        ref={HeroTextRef}
                        className="max-w-[715px] text-sm sm:text-base xl:text-lg 2xl:text-xl font-light leading-normal mb-8 sm:mb-11 text-white text-balance"
                    >
                        <p>A Matriz Office desenvolve soluções completas para ambientes corporativos, unindo mobiliário, planejamento de espaços e personalização para criar escritórios mais funcionais, produtivos e alinhados à realidade de cada empresa.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                        <CustomLink
                            href={route('Home.index')}
                            to="#solucoes"
                            className="w-full max-w-xs py-3 sm:py-4 px-8 bg-transparent border border-primary text-white text-sm text-center font-semibold uppercase sm:tracking-wider transition-colors duration-300 hover:bg-primary hover:text-black"
                        >
                            Conheça nossas soluções
                        </CustomLink>
                        
                        <CustomLink
                            href={route('Home.index')}
                            to="#orcamento"
                            className="w-full max-w-xs py-3 sm:py-4 px-8 bg-white border border-white text-sm text-center font-semibold uppercase sm:tracking-wider text-black transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
                        >
                            Peça seu Orçamennto
                        </CustomLink>
                    </div>
                </div>
            </div>
        </section>
    );
};