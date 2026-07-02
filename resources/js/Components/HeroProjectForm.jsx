import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { InputMask } from '@react-input/mask';

const inputClassName = `
    h-11 w-full rounded-full border border-white/25 bg-white/95 px-5
    text-sm text-neutral-900 placeholder:text-neutral-500
    outline-none ring-0 transition-colors duration-200
    focus:border-primary focus:ring-0
`;

const ErrorMessage = ({ errors, field }) => {
    if (!errors[field]) return null;

    return (
        <p className="mt-1 bg-red-900 px-3 py-1 text-xs text-white">
            {errors[field]}
        </p>
    );
};

export const HeroProjectForm = ({
    submitRoute = 'Contato.enviar',
    privacyUrl = '/politica-de-privacidade',
    buttonLabel = 'Peça seu orçamento',
    fieldPrefix = 'hero',
}) => {
    const [phoneMask, setPhoneMask] = useState('(__) ____-____');

    const { data, setData, post, processing, errors, clearErrors, reset, recentlySuccessful } = useForm({
        nome: '',
        telefone: '',
        email: '',
        cep: '',
        newsletter: false,
        politica: false,

        origem: '',
        campanha: '',
        grupo: '',
        anuncio: '',
        entrada: '',
        posicao_formulario: 'Hero',
    });

    const hasErrors = Object.values(errors).some(Boolean);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const now = new Date();

        now.setHours(now.getHours() - 3);

        setData((current) => ({
            ...current,
            origem: params.get('origin') || params.get('utm_source') || '',
            campanha: params.get('campaign') || params.get('utm_campaign') || '',
            grupo: params.get('group') || params.get('utm_term') || '',
            anuncio: params.get('ad') || params.get('utm_content') || '',
            entrada: now.toISOString().slice(0, 19).replace('T', ' '),
        }));
    }, []);

    useEffect(() => {
        const numbers = data.telefone.replace(/\D/g, '');
        setPhoneMask(numbers.length >= 10 ? '(__) _____-____' : '(__) ____-____');
    }, [data.telefone]);

    const handleChange = ({ target }) => {
        setData(target.name, target.type === 'checkbox' ? target.checked : target.value);
        clearErrors(target.name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route(submitRoute), {
            preserveScroll: true,
            onSuccess: () => reset('nome', 'telefone', 'email', 'cep', 'newsletter', 'politica'),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className={[
                'relative w-full max-w-[430px] rounded-sm bg-white/15 p-5 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-md transition-[margin] duration-300 sm:p-7 lg:ml-auto',
                hasErrors ? '-mb-10' : '',
            ].join(' ')}
        >
            <div className="mb-5">
                <p className="text-xl font-semibold leading-tight text-white">
                    Vamos entender o seu projeto?
                </p>

                <p className="mt-2 text-sm font-light leading-relaxed text-white/75">
                    Preencha seus dados e nossa equipe entrará em contato.
                </p>
            </div>

            <div className="flex flex-col gap-3.5">
                <div>
                    <label htmlFor={`${fieldPrefix}-nome`} className="sr-only">
                        Nome
                    </label>

                    <input
                        id={`${fieldPrefix}-nome`}
                        type="text"
                        name="nome"
                        value={data.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.nome)}
                        className={inputClassName}
                    />

                    <ErrorMessage errors={errors} field="nome" />
                </div>

                <div>
                    <label htmlFor={`${fieldPrefix}-telefone`} className="sr-only">
                        Telefone
                    </label>

                    <InputMask
                        id={`${fieldPrefix}-telefone`}
                        type="tel"
                        name="telefone"
                        mask={phoneMask}
                        replacement={{ _: /\d/ }}
                        value={data.telefone}
                        onChange={handleChange}
                        placeholder="(XX) 99999-9999"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.telefone)}
                        className={inputClassName}
                    />

                    <ErrorMessage errors={errors} field="telefone" />
                </div>

                <div>
                    <label htmlFor={`${fieldPrefix}-email`} className="sr-only">
                        E-mail
                    </label>

                    <input
                        id={`${fieldPrefix}-email`}
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        className={inputClassName}
                    />

                    <ErrorMessage errors={errors} field="email" />
                </div>

                <div>
                    <label htmlFor={`${fieldPrefix}-cep`} className="sr-only">
                        CEP
                    </label>

                    <InputMask
                        id={`${fieldPrefix}-cep`}
                        mask="_____-___"
                        replacement={{ _: /\d/ }}
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

                    <ErrorMessage errors={errors} field="cep" />
                </div>
            </div>

            <input type="hidden" name="origem" value={data.origem} />
            <input type="hidden" name="campanha" value={data.campanha} />
            <input type="hidden" name="grupo" value={data.grupo} />
            <input type="hidden" name="anuncio" value={data.anuncio} />
            <input type="hidden" name="entrada" value={data.entrada} />
            <input type="hidden" name="posicao_formulario" value={data.posicao_formulario} />

            <div className="mt-5 flex flex-col gap-3.5">
                <div>
                    <label className="flex cursor-pointer items-start gap-3 text-xs leading-snug text-white/85">
                        <span className="relative mt-0.5 flex shrink-0">
                            <input
                                type="checkbox"
                                name="newsletter"
                                checked={data.newsletter}
                                onChange={handleChange}
                                className="peer size-5 appearance-none rounded-sm border-2 border-white bg-transparent outline-none ring-0 transition-colors checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary checked:focus:border-primary checked:focus:bg-primary focus:ring-0 focus:ring-offset-0"
                            />

                            <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-xs font-bold text-black peer-checked:flex">
                                ✓
                            </span>
                        </span>

                        <span>
                            Sim, quero receber{' '}
                            <strong className="font-semibold text-white">
                                conteúdos exclusivos
                            </strong>{' '}
                            da Matriz Office
                        </span>
                    </label>

                    <ErrorMessage errors={errors} field="newsletter" />
                </div>

                <div>
                    <label className="flex cursor-pointer items-start gap-3 text-xs leading-snug text-white/85">
                        <span className="relative mt-0.5 flex shrink-0">
                            <input
                                type="checkbox"
                                name="politica"
                                checked={data.politica}
                                onChange={handleChange}
                                className="peer size-5 appearance-none rounded-sm border-2 border-white bg-transparent outline-none ring-0 transition-colors checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary checked:focus:border-primary checked:focus:bg-primary focus:ring-0 focus:ring-offset-0"
                            />

                            <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-xs font-bold text-black peer-checked:flex">
                                ✓
                            </span>
                        </span>

                        <span>
                            Li e estou de acordo com a{' '}
                            <a
                                href={privacyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-primary"
                            >
                                Política de Privacidade
                            </a>
                        </span>
                    </label>

                    <ErrorMessage errors={errors} field="politica" />
                </div>
            </div>

            {recentlySuccessful && (
                <p className="mt-4 rounded-sm bg-green-800/90 px-4 py-2 text-xs leading-relaxed text-white">
                    Cadastro enviado com sucesso. Em breve entraremos em contato.
                </p>
            )}

            <button
                type="submit"
                disabled={processing}
                className="relative mt-6 flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold uppercase text-black transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
                {processing ? (
                    <>
                        <span className="absolute size-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                        <span className="opacity-0">{buttonLabel}</span>
                    </>
                ) : (
                    buttonLabel
                )}
            </button>
        </form>
    );
};