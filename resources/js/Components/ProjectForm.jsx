import React, { useEffect, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

import AnimatedCheckMark from './AnimatedCheckMark';

export const ProjectForm = ({
    submitRoute = 'Contato.enviar',
    privacyUrl = '/politica-de-privacidade',
    buttonLabel = 'BAIXAR CATÁLOGO',
}) => {
    const { message } = usePage().props;
    const [isSuccessful, setIsSuccessful] = useState(false);

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        nome: '',
        telefone: '',
        email: '',
        cep: '',
        conteudos: false,
        politica: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setData(name, type === 'checkbox' ? checked : value);
        clearErrors(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route(submitRoute), {
            preserveScroll: true,
        });
    };

    useEffect(() => {
        if (message?.type !== 'success') return;

        setIsSuccessful(true);
        reset();

        const timeout = setTimeout(() => {
            setIsSuccessful(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [message]);

    const inputClassName = `
        w-full h-11 rounded-full border border-neutral-300 bg-white px-5
        text-sm text-neutral-900 placeholder:text-neutral-400
        outline-none ring-0 transition-colors duration-200
        focus:border-primary focus:ring-0
    `;

    const ErrorMessage = ({ field }) => (
        errors[field]
            ? <p className="mt-2 bg-red-900 px-3 py-1.5 text-xs text-white">{errors[field]}</p>
            : null
    );

    return (
        <section className="bg-neutral-100 py-14">
            <div className="container max-w-medium">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center lg:gap-16 xl:gap-24">
                    <div className="max-w-xl">
                        <h1 className="mb-6 text-4xl 2xl:text-[44px] font-semibold !leading-tight text-neutral-900 sm:text-4xl">
                            Vamos entender o<br /> seu projeto?
                        </h1>

                        <p className="max-w-lg text-base leading-relaxed text-neutral-600">
                            Preencha as informações abaixo e nossa equipe entrará em contato para entender as necessidades da sua empresa e apresentar as melhores soluções em mobiliário corporativo, ergonomia e ambientes de trabalho.
                        </p>
                    </div>

                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="relative rounded-sm bg-white p-6 shadow-sm sm:p-8 lg:p-10 max-w-md mx-auto"
                            noValidate
                        >
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="nome" className="sr-only">Nome</label>
                                    <input
                                        id="nome"
                                        type="text"
                                        name="nome"
                                        value={data.nome}
                                        onChange={handleChange}
                                        placeholder="Nome"
                                        autoComplete="name"
                                        aria-invalid={Boolean(errors.nome)}
                                        className={inputClassName}
                                    />
                                    <ErrorMessage field="nome" />
                                </div>

                                <div>
                                    <label htmlFor="telefone" className="sr-only">Telefone</label>
                                    <input
                                        id="telefone"
                                        type="tel"
                                        name="telefone"
                                        value={data.telefone}
                                        onChange={handleChange}
                                        placeholder="(XX) 99999-9999"
                                        autoComplete="tel"
                                        aria-invalid={Boolean(errors.telefone)}
                                        className={inputClassName}
                                    />
                                    <ErrorMessage field="telefone" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">E-mail</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder="E-mail"
                                        autoComplete="email"
                                        aria-invalid={Boolean(errors.email)}
                                        className={inputClassName}
                                    />
                                    <ErrorMessage field="email" />
                                </div>

                                <div>
                                    <label htmlFor="cep" className="sr-only">CEP</label>
                                    <input
                                        id="cep"
                                        type="text"
                                        name="cep"
                                        value={data.cep}
                                        onChange={handleChange}
                                        placeholder="Seu CEP"
                                        inputMode="numeric"
                                        autoComplete="postal-code"
                                        aria-invalid={Boolean(errors.cep)}
                                        className={inputClassName}
                                    />
                                    <ErrorMessage field="cep" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-4">
                                <div>
                                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-neutral-700">
                                        <span className="relative mt-0.5 flex shrink-0">
                                            <input
                                                type="checkbox"
                                                name="conteudos"
                                                checked={data.conteudos}
                                                onChange={handleChange}
                                                className="peer size-5 appearance-none rounded-sm border-2 border-neutral-700 bg-white outline-none ring-0 transition-colors checked:border-primary checked:bg-primary focus:ring-0 focus:ring-offset-0"
                                            />
                                            <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-xs font-bold text-white peer-checked:flex">
                                                ✓
                                            </span>
                                        </span>

                                        <span>
                                            Sim, quero receber <strong className="font-semibold text-neutral-900">conteúdos exclusivos</strong> da Matriz Office
                                        </span>
                                    </label>
                                    <ErrorMessage field="conteudos" />
                                </div>

                                <div>
                                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-neutral-700">
                                        <span className="relative mt-0.5 flex shrink-0">
                                            <input
                                                type="checkbox"
                                                name="politica"
                                                checked={data.politica}
                                                onChange={handleChange}
                                                className="peer size-5 appearance-none rounded-sm border-2 border-neutral-700 bg-white outline-none ring-0 transition-colors checked:border-primary checked:bg-primary focus:ring-0 focus:ring-offset-0"
                                            />
                                            <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-xs font-bold text-white peer-checked:flex">
                                                ✓
                                            </span>
                                        </span>

                                        <span>
                                            Li e estou de acordo com a{' '}
                                            <a
                                                href={privacyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold text-neutral-900 underline underline-offset-2 transition-colors hover:text-primary"
                                            >
                                                Política de Privacidade
                                            </a>
                                        </span>
                                    </label>
                                    <ErrorMessage field="politica" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="relative mt-7 flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase text-white transition-colors duration-300 hover:bg-primary hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {processing ? (
                                    <>
                                        <span className="absolute size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                        <span className="opacity-0">{buttonLabel}</span>
                                    </>
                                ) : (
                                    buttonLabel
                                )}
                            </button>

                            {isSuccessful && (
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-sm bg-white px-6 text-center">
                                    <AnimatedCheckMark />
                                    <h3 className="mt-4 text-2xl font-semibold text-neutral-900">Solicitação enviada!</h3>
                                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">
                                        Recebemos seus dados e entraremos em contato em breve.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
