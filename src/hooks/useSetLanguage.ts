import { useState } from "react"

const useSetLanguage = () => {
    const [lang, setLang] = useState<string>('🇧🇷 (PT-BR)');
    const changeLang = () => {
        setLang((currentState: string) => {
            if (currentState === '🇧🇷 (PT-BR)'){
                return '🇺🇸 (EN-US)';
            } else {
                return '🇧🇷 (PT-BR)';
            }
        })
    }

    return { lang, changeLang };
}

export default useSetLanguage;