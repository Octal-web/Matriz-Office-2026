import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

import { HeroBanner } from '@/Components/HeroBanner';
import { MoreAbout } from '@/Components/MoreAbout';

import DefaultLayout from '@/Layouts/DefaultLayout';

const GridGallery = lazy(() =>
    import('@/Components/GridGallery').then((module) => ({
        default: module.GridGallery,
    }))
);

const Solutions = lazy(() =>
    import('@/Components/Solutions').then((module) => ({
        default: module.Solutions,
    }))
);

const Showrooms = lazy(() =>
    import('@/Components/Showrooms').then((module) => ({
        default: module.Showrooms,
    }))
);

const ProjectForm = lazy(() =>
    import('@/Components/ProjectForm').then((module) => ({
        default: module.ProjectForm,
    }))
);

const DoubtsList = lazy(() =>
    import('@/Components/DoubtsList').then((module) => ({
        default: module.DoubtsList,
    }))
);

const LazySection = ({ id = null, minHeight = 420, children }) => {
    const sectionRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (shouldRender) {
            return;
        }

        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            setShouldRender(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '700px 0px',
                threshold: 0.01,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [shouldRender]);

    return (
        <div
            ref={sectionRef}
            id={!shouldRender ? id : undefined}
            style={!shouldRender ? { minHeight } : undefined}
        >
            {shouldRender ? (
                <Suspense fallback={<div style={{ minHeight }} />}>
                    {children}
                </Suspense>
            ) : null}
        </div>
    );
};

const Page = () => {
    return (
        <DefaultLayout>
            <HeroBanner />
            <MoreAbout />

            <LazySection minHeight={650}>
                <GridGallery />
            </LazySection>

            <LazySection id="solucoes" minHeight={620}>
                <Solutions />
            </LazySection>

            <LazySection id="onde-encontrar" minHeight={520}>
                <Showrooms />
            </LazySection>

            <LazySection id="orcamento" minHeight={620}>
                <ProjectForm />
            </LazySection>

            <LazySection id="perguntas-frequentes" minHeight={500}>
                <DoubtsList />
            </LazySection>
        </DefaultLayout>
    );
};

export default Page;