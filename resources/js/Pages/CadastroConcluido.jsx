import { useEffect } from 'react';

import { FinishedRegistration } from '@/Components/FinishedRegistration';

import DefaultLayout from '@/Layouts/DefaultLayout';

const Page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultLayout>
            <FinishedRegistration />
        </DefaultLayout>
    );
};

export default Page;
