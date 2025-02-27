import { useState } from "react";
import ExperienciaItem from "./ExperienciaItem.astro"
import ArrowIcon from "../icons/ArrowIcon";

const Experiencies = () => {
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const experiencies = [
        {
            title: "Colegio de Escribanos del Chaco",
            summary:
                "Diseño, desarrollo y mantenimiento de aplicaciones web, incluyendo el modelado de bases de datos y la implementación de API REST utilizando Node.js con Express y Django Rest Framework. Desarrollo de interfaces interactivas con React y Redux, integración de autenticación segura con JWT, y despliegue de aplicaciones en Vercel.",
            date: "Actualidad",
            position: "Desarrollador Full Stack Freelance",
        },


    ];
    const experienciasVisibles = mostrarTodo ? experiencies : experiencies.slice(0, 1);
    return (
        <ol class="pt-2 md:pt-6">
            {experienciasVisibles.map((experiencia, index) => {
                const { title, summary, date, position } = experiencia;
                const truncatedSummary = summary.substring(0, 150) + '...';
                return (
                    <>
                        <li>
                            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
                                <div className="relative pb-12 md:col-span-2">
                                    <div className="sticky top-0">
                                        <span className="text-yellow-400 -left-[44px] absolute rounded-full text-5xl">
                                            &bull;
                                        </span>
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold [&>strong]:text-yellow-500 [&>strong]:font-semibold">
                                            <strong>{position}</strong>
                                        </h2>
                                        <h3 class="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm">{date}</p>
                                    </div>
                                </div>
                                <div class="text-gray-600 dark:text-gray-400 md:col-span-3">
                                    {/* Input oculto que controla el estado */}
                                    <input type="checkbox" id={`toggle-${position}`} class="peer hidden" />

                                    {/* Contenido reducido (visible por defecto) */}
                                    <p class="peer-checked:hidden">{truncatedSummary}</p>

                                    {/* Contenido expandido (oculto por defecto) */}
                                    <p class="hidden peer-checked:block">{summary}</p>

                                    {/* Botón de "Ver más" / "Ver menos" */}
                                    <label
                                        htmlFor={`toggle-${position}`}
                                        class="px-2 text-yellow-400 hover:underline text-sm cursor-pointer"
                                    >
                                        <span class="peer-checked:hidden">Ver más/menos</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </>
                )
            })}
            {experiencies.length > 1 && (
                <div class="flex items-center justify-center">
                    <a class="mt-2 dark:text-gray-400 text-gray-600 hover:underline transition-all" onClick={() => setMostrarTodo(!mostrarTodo)}>
                        {mostrarTodo ? <span class="inline-flex items-center font-semibold">Ver menos<ArrowIcon class="size-6 text-gray-600" /> </span> : <span class="inline-flex items-center font-semibold">Ver mas <ArrowIcon class="size-6 rotate-180 text-gray-600" /></span>}
                    </a>

                </div>
            )}
        </ol>
    )

}

export default Experiencies