import React, { useEffect, useRef, useState } from 'react';

export const ExitIntentModal = ({ modalCookie, cookieName = 'matrizExitModalShown', cookieDuration = 1, formId = 'orcamento'}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    const closeButtonRef = useRef(null);
    const closeTimeoutRef = useRef(null);
    const previousActiveElementRef = useRef(null);

    const setCookie = (name, value, days) => {
        if (typeof document === 'undefined') {
            return;
        }

        const expires = new Date();

        expires.setTime(
            expires.getTime() + days * 24 * 60 * 60 * 1000
        );

        const secure =
            window.location.protocol === 'https:'
                ? '; Secure'
                : '';

        document.cookie = [
            `${name}=${encodeURIComponent(value)}`,
            `expires=${expires.toUTCString()}`,
            'path=/',
            'SameSite=Lax',
        ].join('; ') + secure;
    };

    const openModal = () => {
        previousActiveElementRef.current = document.activeElement;

        setCookie(cookieName, 'true', cookieDuration);
        setHasShown(true);
        setIsOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        if (isClosing) {
            return;
        }

        setIsClosing(true);

        closeTimeoutRef.current = window.setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);

            previousActiveElementRef.current?.focus?.();
        }, 300);
    };

    useEffect(() => {
        const handleMouseOut = (event) => {
            const leftFromTop =
                event.clientY <= 0 &&
                event.relatedTarget === null;

            if (leftFromTop && !modalCookie && !hasShown) {
                openModal();
            }
        };

        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener(
                'mouseout',
                handleMouseOut
            );
        };
    }, [cookieName, cookieDuration, modalCookie, hasShown]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        return () => {
            document.removeEventListener(
                'keydown',
                handleKeyDown
            );

            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen, isClosing]);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                window.clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    if (!isOpen) {
        return null;
    }

    const formUrl = `${route('Home.index')}#${formId}`;
    
    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            aria-describedby="exit-modal-description"
        >
            <button
                type="button"
                className="absolute inset-0 size-full cursor-default bg-black/75 backdrop-blur-[2px]"
                onClick={closeModal}
                aria-label="Fechar modal"
                tabIndex={-1}
            />

            <div
                className={`relative z-10 w-full max-w-2xl overflow-hidden bg-neutral-900 px-7 py-10 shadow-2xl sm:px-12 sm:py-14 transition-all duration-300 ease-out animate-fade-in-down ${isClosing ? 'translate-y-5 scale-[0.97] opacity-0' : 'translate-y-0 scale-100 opacity-100'}`}
            >
                <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

                <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    Antes de sair
                </span>

                <h2
                    id="exit-modal-title"
                    className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
                >
                    Deixe seu contato antes de sair!
                </h2>

                <div
                    id="exit-modal-description"
                    className="mt-5 max-w-xl text-base font-light leading-relaxed text-neutral-400 sm:text-lg"
                >
                    <p>
                        Leva menos de 1 minuto para você preencher
                        o formulário e conhecer a Matriz Office.
                    </p>
                </div>

                <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                    <a
                        href={formUrl}
                        onClick={closeModal}
                        className="inline-flex min-h-12 items-center justify-center bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900"
                        aria-label="Ir para o formulário de orçamento e baixar o catálogo"
                    >
                        Baixar o catálogo
                    </a>

                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={closeModal}
                        className="text-sm text-neutral-400 underline underline-offset-4 transition-colors duration-200 hover:text-white focus:outline-none focus:text-white"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};