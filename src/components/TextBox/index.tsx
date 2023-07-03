import styles from "./TextBox.module.scss";

export default function TextBox(props: {lang: string}){
    return (
        <div className="text-box">
            <p data-aos="flip-up" data-aos-duration="1000" className={styles.text1}>
                <strong>
                    {props.lang !== '🇺🇸 (EN-US)' ?
                        (<>I'm a 19-year-old tech enthusiast, totally into software development. I live in Santos, SP (Brazil), and I'm studying Computer Science at Centro Universitário FEI (university) while diving into Web Development at OneBitCode (online course). As I mentioned, my main focus right now is Web Development because I'm super stoked about working in this field. If you've got any suggestions, feel free to hit me up! I appreciate any help. Thanks!</>)
                        :
                        (<>Eu sou um entusiasta de tecnologia de 19 anos, totalmente envolvido com o desenvolvimento de software. Eu moro em Santos, SP (Brasil) e estou estudando Ciência da Computação no Centro Universitário FEI enquanto me aprofundo em Desenvolvimento Web no OneBitCode (curso online). Como mencionei, meu foco principal no momento é o Desenvolvimento Web, pois estou muito empolgado em trabalhar nessa área. Se você tiver alguma sugestão, fique à vontade para entrar em contato! Agradeço qualquer ajuda. Obrigado!</>)
                    }
                </strong>
            </p>
        </div>
    )
}