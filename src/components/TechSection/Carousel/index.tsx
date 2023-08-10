import { useState } from "react";
import Card from "../../Card";
import styles from './styles.module.scss';

export const Carousel = ({ lang } : { lang: string }) => {
    const [ cardNumber, setCardNumber ] = useState<number>(0);
    return (
        <div className={styles.wrapper}>
            <button
                className={styles.passBtn}
                onClick={() => setCardNumber((currentState: number) => {
                    console.log(currentState);
                    if (currentState === 0){
                        return 9;
                    }
                    currentState--;
                    return currentState;
                })}
            >
                <img src="/arrow.png" alt="" />
            </button>
            <Card
                lang={lang}
                img="/js-logo.png"
                title="JavaScript"
                url="https://github.com/EnzoBozzani/search-countries-project"
                display={ cardNumber === 0 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/html-css.png"
                title="HTML & CSS"
                url="https://github.com/EnzoBozzani/landing-page"
                display={ cardNumber === 1 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/ts-logo.png"
                title="TypeScript"
                url="https://github.com/EnzoBozzani/github-api"
                display={ cardNumber === 2 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/sass-logo.png"
                title="SCSS/SASS"
                url="https://github.com/EnzoBozzani/spacex"
                display={ cardNumber === 3 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/bootstrap.png"
                title="BootStrap"
                url="https://github.com/EnzoBozzani/spacex"
                display={ cardNumber === 4 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/reacr-logo.png"
                title="React"
                url="https://github.com/EnzoBozzani/portfolio"
                display={ cardNumber === 5 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/node.png"
                title="NodeJS"
                url="https://github.com/EnzoBozzani/to-do-list"
                display={ cardNumber === 6 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/mongodb.png"
                title="MongoDB"
                url="https://github.com/EnzoBozzani/to-do-list"
                display={ cardNumber === 7 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/sql.png"
                title="SQL"
                url="https://github.com/EnzoBozzani/financial-control"
                display={ cardNumber === 8 ? 'flex' : 'none'}
            />
            <Card
                lang={lang}
                img="/next.png"
                title="NextJS"
                url="https://github.com/EnzoBozzani/e-commerce"
                display={ cardNumber === 9 ? 'flex' : 'none'}
            />
            <button 
                className={styles.passBtn}
                onClick={() => setCardNumber((currentState: number) => {
                    console.log(currentState);
                    
                    if (currentState === 9){
                        return 0;
                    }
                    currentState++;
                    return currentState;
                })}
            >
                <img src="/arrow.png" alt="" style={{transform: 'rotate(180deg)'}}/>
            </button>
        </div>
    )
}