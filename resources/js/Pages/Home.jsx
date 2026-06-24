import { HeroBanner } from '@/Components/HeroBanner';
import { MoreAbout } from '@/Components/MoreAbout';
import { GridGallery } from '@/Components/GridGallery';
import { Solutions } from '@/Components/Solutions';
import { Showrooms } from '@/Components/Showrooms';
import { Brands } from '@/Components/Brands';
import { ProjectForm } from '@/Components/ProjectForm';
import { DoubtsList } from '@/Components/DoubtsList';

import DefaultLayout from '@/Layouts/DefaultLayout';

const Page = () => {
    return (
        <DefaultLayout>
            <HeroBanner />
            <MoreAbout />
            <GridGallery />
            <Solutions />
            <Showrooms />
            <Brands />
            <ProjectForm />
            <DoubtsList />
        </DefaultLayout>
    );
};

export default Page;
