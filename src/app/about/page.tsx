import React from 'react';
import styles from "./about.module.scss";
import Image, { StaticImageData } from "next/image";


const Page = () => {
    return (
        <main>
            <section className={styles.about}>
                <div className={styles["about__image"]}>
                    <Image src={"@/../public/Group 1000015845(1).png"}  height={572} priority={true} alt="about me" />
                </div>

                <div className={styles["about__content"]}>
                    <h2 className={styles["about__title"]}>About <strong>Me</strong></h2>
                    <div className={styles["about__description"]}>
                        <p>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development
                            (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects
                            of digital products to life. User experience, pixel perfect design, and writing clear,
                            readable, highly performant code matters to me.
                        </p>
                        <p>
                            I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow
                            and evolve as a developer, taking on new challenges and learning the latest technologies along
                            the way. Now, in my early thirties, 7 years after starting my web development journey,
                            I&apos;m building cutting-edge web applications using modern technologies such as Next.js,
                            TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>
                        <p>
                            When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or
                            on indie hacker, witnessing the journey of early startups or enjoying some free time. You can
                            follow me on Twitter where I share tech-related bites and build in public, or you can follow
                            me on GitHub.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
