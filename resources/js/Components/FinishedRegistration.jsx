import { Link } from '@inertiajs/react';

export const FinishedRegistration = () => {
    return (
        <section className="relative min-h-[80dvh] overflow-hidden bg-neutral-800 text-white pb-20 lg:pb-28 pt-32 lg:pt-44">
            <div className="container max-w-large">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="max-w-2xl px-1 sm:px-4 lg:px-0">

                        <span className="mb-8 block h-px w-16 bg-primary" />

                        <h1 className="mb-3 text-3xl font-semibold uppercase leading-tight md:text-4xl 2xl:text-[42px]">
                            Obrigado,
                        </h1>

                        <h2 className="mb-8 text-3xl font-light uppercase leading-tight text-neutral-300 md:text-4xl 2xl:text-[42px]">
                            Agora estamos mais perto de colocar o padrão{' '}
                            <span className="font-semibold text-white">
                                Matriz Office
                            </span>{' '}
                            no seu projeto.
                        </h2>

                        <p className="max-w-xl text-sm font-medium uppercase leading-relaxed tracking-wide text-neutral-400 sm:text-base">
                            Enviamos os nossos catálogos para o endereço de
                            e-mail informado no cadastro. Por favor, verifique
                            sua caixa de entrada e também a pasta de spam.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href={route('Home.index')}
                                className="inline-flex min-h-12 items-center justify-center border border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-primary hover:text-neutral-950"
                            >
                                Voltar para o site
                            </Link>

                            <Link
                                href={`${route('Home.index')}#solucoes`}
                                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 transition-colors duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
                            >
                                Conhecer soluções
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="/content/display/thanks-4.jpg"
                            alt="Ambiente corporativo com mobiliário Matriz Office"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-neutral-950/40 lg:via-transparent lg:to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};