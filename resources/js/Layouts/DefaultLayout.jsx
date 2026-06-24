import React, { useState, useEffect, useRef } from 'react';
import { usePage, Link, Head } from '@inertiajs/react';

import logoWhite from '@/assets/logo.png';
import logoFooter from '@/assets/logo-footer.png';

import Lenis from 'lenis';

import { CookieModal } from '@/Components/CookieModal';
import { CustomLink } from '@/Components/CustomLink';
import { ExitIntentModal } from '@/Components/ExitIntentModal';

import { homeShowrooms } from '@/Data/homeShowrooms';
import { homeDoubts } from '@/Data/homeDoubts';

const DefaultLayout = ({ children, title = 'Matriz Office – Mobiliário Corporativo em Goiânia e Palmas', description = 'A Matriz Office é especialista em mobiliário corporativo de alto padrão. Soluções completas para escritórios em Goiânia (GO) e Palmas (TO). Peça seu orçamento!' }) => {
    const { controller, notifyCookie, rejectCookie, modalShowCookie } = usePage().props;

    const [isAtTop, setIsAtTop] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY <= 140);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const acceptCookies = () => {
        setTrackingEnabled(true);
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (notifyCookie || trackingEnabled) {
                const script = document.createElement('script');
                script.innerHTML = `
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),
                            dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WQCW52GK');
                `;
                document.head.appendChild(script);

                const noscript = document.createElement('noscript');
                noscript.innerHTML = `
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQCW52GK" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `;
                document.body.appendChild(noscript);
            }
        }, 100);
        
        return () => clearTimeout(timer);
    }, [notifyCookie, trackingEnabled]);

    // Schema: LocalBusiness
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "FurnitureStore"],
        "name": "Matriz Office",
        "description": "Especialistas em mobiliário corporativo de alto padrão para escritórios.",
        "url": window.location.origin,
        "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/site/img/logo.png`
        },
        "image": `${window.location.origin}/content/display/main-bg.jpg`,
        "email": "contato@matrizoffice.com.br",
        "priceRange": "$$",
        "sameAs": [],
        "address": homeShowrooms.map(s => ({
            "@type": "PostalAddress",
            "addressLocality": s.city,
            "addressRegion": s.state,
            "addressCountry": "BR",
            "streetAddress": s.address.replace('\n', ', ')
        })),
        "contactPoint": homeShowrooms.map(s => ({
            "@type": "ContactPoint",
            "telephone": s.phone,
            "contactType": "customer service",
            "areaServed": s.city,
            "availableLanguage": "Portuguese"
        })),
        "hasMap": homeShowrooms.map(s => s.mapUrl),
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            }
        ]
    };

    // Schema: FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homeDoubts.map(item => ({
            "@type": "Question",
            "name": item.title,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.text
            }
        }))
    };

    // Schema: Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Matriz Office",
        "url": window.location.origin,
        "logo": {
            "@type": "ImageObject",
            "url": `${window.location.origin}/site/img/logo.png`
        },
        "email": "contato@matrizoffice.com.br",
        "contactPoint": homeShowrooms.map(s => ({
            "@type": "ContactPoint",
            "telephone": s.phone,
            "contactType": "customer service",
            "areaServed": s.city,
            "availableLanguage": "Portuguese"
        })),
        "sameAs": []
    };

    const menuItems = [
        { name: "A Matriz Office", route: "Home.index", to: "#sobre", label: "Saiba mais sobre a Matriz Office", external: false },
        { name: "Nossas Soluções", route: "Home.index", to: "#solucoes", label: "Confira nossas soluções", external: false },
        { name: "Onde Encontrar", route: "Home.index", to: "#onde-encontrar", label: "Onde encontrar a Matriz Office", external: false },
        { name: "Parceiros", route: "Home.index", to: "#parceiros", label: "Parceiros da Matriz Office", external: false },
    ];

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta property="og:url" content={window.location.pathname} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="/content/display/main-bg.jpg" />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="Octal Web" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description || ''} />
                <meta name="twitter:image" content="/content/display/main-bg.jpg" />

                <link rel="icon" href="/favicon.ico" type="image/x-icon" />

                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Head>
                
            <header className={`header fixed top-0 left-0 right-0 z-[20] transition-all duration-300 ease-in-out ${!isAtTop || ['Contato', 'Politicas'].includes(controller) ? ' bg-black shadow-2xl shadow-black/10' : ''}`}>
                <div className={`fixed inset-0 bg-black xl:hidden duration-300 ease-out ${isMenuOpen ? 'opacity-30' : 'opacity-0 h-0'}`} onClick={() => {setIsMenuOpen(false)}}></div>
                <div className="container max-w-large">
                    <div className="flex items-center justify-between">
                        <div className="relative z-[1] flex items-center justify-between w-full my-5 xl:my-7 2xl:my-8">
                            <h1 className="flex items-center">
                                <Link href={route('Home.index')} className="flex items-center">
                                    <img src={logoWhite} alt="Logo" className="block max-w-30 xl:max-w-50 lg:max-w-80" />
                                </Link>
                            </h1>

                            <button className={`fixed top-0 left-0 w-screen h-screen xl:hidden bg-black transition-all  ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} aria-label="Close Menu" onClick={() => setIsMenuOpen(false)} />

                            <div className={`fixed xl:relative bg-black bg-opacity-70 max-xl:backdrop-blur-sm xl:bg-transparent left-0 ${!isMenuOpen ? '-top-1 max-xl:-translate-y-full' : 'top-0'} xl:left-auto xl:top-auto flex flex-col xl:flex-row xl:items-center justify-center xl:justify-end w-full h-[calc(100vh_/6_*_5)] xl:h-auto xl:my-0.5 2xl:my-1.5 transition-all ease-out duration-500`}>
                                <nav className="relative">
                                    <ul className="flex flex-col xl:flex-row items-center xl:justify-center gap-5 xl:gap-10 relative lg:mr-5 2xl:mr-0">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                {item.external ? (
                                                    <a
                                                        href={item.url}
                                                        className="text-lg xl:text-base text-white font-medium transition-all hover:opacity-80"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={item.name}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <CustomLink
                                                        href={route(item.route)}
                                                        to={item.to}
                                                        className="text-lg xl:text-base text-white font-medium transition-all hover:opacity-80"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        aria-label={item.name}
                                                    >
                                                        {item.name}
                                                    </CustomLink>
                                                )}
                                            </li>
                                        ))}

                                        <li
                                            className="max-xl:opacity-0 max-xl:translate-y-[-20px]"
                                            style={typeof window !== 'undefined' && window.innerWidth < 1280 ? {
                                                opacity: isMenuOpen ? 1 : 0,
                                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                                                transition: `opacity 0.4s ease-out ${menuItems.length * 0.1}s, transform 0.4s ease-out ${menuItems.length * 0.1}s`
                                            } : {}}
                                        >
                                            <CustomLink href={route('Home.index')} to="#orcamento" className="block xl:mx-4 bg-white text-lg xl:text-base font-medium text-center text-black px-5 xl:px-6 py-1.5 min-w-40 sm:min-w-44 transition-all xl:hover:bg-black xl:hover:text-white">Peça seu Orçamento</CustomLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <button className="xl:hidden relative z-[2]" onClick={toggleMenu} aria-label="Toggle Menu">
                                <div className="flex items-center">
                                    <div className="relative w-7 h-[21px]">
                                        <div
                                            className={`absolute top-0 bg-white h-[2px] w-7 transition-all duration-300 ${isMenuOpen ? 'rotate-45 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute top-[9px] bg-white h-[2px] w-7 transition-all duration-300 ${isMenuOpen ? 'scale-x-0 !top-[10px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'top, transform'
                                            }}
                                        ></div>
                                        <div
                                            className={`absolute bottom-0 bg-white h-[2px] w-7 transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-[9px]' : ''}`}
                                            style={{
                                                transitionDelay: isMenuOpen ? '0ms, 400ms' : '0ms',
                                                transitionProperty: 'bottom, transform'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="overflow-hidden">
                {children}
            </main>

            <footer className="bg-neutral-950 pt-12 lg:pt-10 pb-4">
                <div className="container max-w-large">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1fr_1fr] md:gap-12 lg:items-start mb-6">
                        <div className="flex items-start md:pt-10">
                            <img
                                src={logoFooter}
                                alt="Matriz Office"
                                className=""
                            />
                        </div>

                        {homeShowrooms.map((showroom) => (
                            <address
                                key={showroom.id}
                                className="not-italic text-sm leading-snug text-neutral-300"
                            >
                                <h2 className="mb-3 text-lg font-semibold text-white">
                                    {showroom.city} ({showroom.state})
                                </h2>

                                <div className="space-y-2">
                                    <p>
                                        <strong className="font-semibold text-white">Endereço:</strong>{' '}
                                        <a
                                            href={showroom.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-colors hover:text-primary"
                                        >
                                            {showroom.building} —{' '}
                                            <span className="whitespace-pre-line tracking-tighter">{showroom.address}</span>
                                        </a>
                                    </p>

                                    <p>
                                        <strong className="font-semibold text-white">Telefone:</strong>{' '}
                                        <a
                                            href={`tel:${showroom.phone.replace(/\D/g, '')}`}
                                            className="transition-colors hover:text-primary"
                                        >
                                            {showroom.phone}
                                        </a>
                                    </p>

                                    <p>
                                        <strong className="font-semibold text-white">E-mail:</strong>{' '}
                                        <a
                                            href={`mailto:${showroom.email}`}
                                            className="break-all transition-colors hover:text-primary"
                                        >
                                            {showroom.email}
                                        </a>
                                    </p>

                                    <p>
                                        <strong className="font-semibold text-white">
                                            Horário de funcionamento:
                                        </strong>{' '}
                                        {showroom.openingHours}
                                    </p>
                                </div>
                            </address>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="container max-w-large flex flex-col gap-3 pt-5 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                        <p>© { new Date().getFullYear() } Matriz Office. Todos os direitos reservados.</p>

                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <a href={route('Politicas.privacidade')} target="_blank" className="transition-colors hover:text-white">
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {!notifyCookie || !rejectCookie ? (
                <CookieModal acceptCookies={acceptCookies} visible={notifyCookie ? false : true} />
            ) : null}

            <ExitIntentModal modalCookie={modalShowCookie} />
        </>
    );
};

export default DefaultLayout;