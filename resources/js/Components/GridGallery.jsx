import { useState } from 'react';
import { homeGridPhotos } from '@/Data/homeGridPhotos';
import { PhotoShared } from './PhotoShared';
import { Reveal } from './Reveal';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const GRID_CLASSES = [
    'col-span-1 row-span-2',
    'col-span-1 sm:col-span-2 row-span-1',
    'col-span-1 row-span-2 sm:row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
];

export const GridGallery = () => {
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const slides = homeGridPhotos.map((photo) => ({ src: photo.full }));

    return (
        <section className="bg-neutral-200 py-20">
            <div className="container max-w-large">
                <Reveal direction="bottom">
                    <h1 className="text-3xl sm:text-4xl 2xl:text-[44px] !leading-tight max-w-[900px] mx-auto mb-6 text-center text-balance">
                        Projetamos <span className="font-semibold">Ambientes</span> que Conectam Pessoas, Negócios e <span className="font-semibold">Resultados</span>
                    </h1>

                    <div className="max-w-[1000px] mx-auto text-sm sm:text-base text-center text-gray-700 leading-relaxed mb-12">
                        <p>Cada empresa possui necessidades diferentes. Por isso, trabalhamos com soluções corporativas que consideram a dinâmica de trabalho, a cultura organizacional e os objetivos de cada operação.</p>
                        <p>Atuamos desde a definição dos ambientes até a entrega do mobiliário, criando espaços que favorecem a produtividade, a colaboração, a privacidade e o bem-estar das equipes.</p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[210px] xl:auto-rows-[270px] 2xl:auto-rows-[300px] gap-2 xl:gap-5">
                    {homeGridPhotos.map((photo, index) => (
                        <PhotoShared
                            key={index}
                            photo={photo.src}
                            alt={photo.alt}
                            index={index}
                            grid={GRID_CLASSES[index % GRID_CLASSES.length]}
                            onOpen={() => setLightboxIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={slides}
                styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
                plugins={[Zoom]}
                zoom={{ maxZoomPixelRatio: 1.5, scrollToZoom: true }}
            />
        </section>
    );
};