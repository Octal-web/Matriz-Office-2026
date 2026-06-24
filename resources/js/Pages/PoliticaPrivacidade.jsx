import React from 'react';
import { usePage } from '@inertiajs/react'


import DefaultLayout from '@/Layouts/DefaultLayout';

const Page = () => {
    const { texto } = usePage().props;

    return (
        <DefaultLayout>
            <section className="relative pt-44 pb-32">
                <div className="container max-w-small">
                    <h4 className="text-secondary text-4xl font-bold mb-10">Política de Privacidade</h4>
                    <div className="[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:mb-3 [&_h2]:mt-5 [&_p]:text-sm [&_p]:text-justify" dangerouslySetInnerHTML={{ __html: texto }} />
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Page;