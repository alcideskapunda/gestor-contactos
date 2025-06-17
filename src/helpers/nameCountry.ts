interface Country {
    idd: {
        root?: string;
        suffixes?: string[];
    };
    name: {
        common: string;
    };
}

let countriesCache: Country[] | null = null;

async function getCountry(prefix: string): Promise<string> {
    try {
        if (!countriesCache) {
            const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,idd`);
            if (!response.ok) throw new Error("Failed to fetch countries");
            countriesCache = await response.json() as Country[];
        }

        for (const country of countriesCache) {
            const root = country.idd?.root ?? '';
            const suffixes = country.idd?.suffixes ?? [];

            for (const suffix of suffixes) {
                const fullCode = root + suffix;
                if (fullCode === prefix) {
                    return country.name.common;
                }
            }
        }
    } catch (error) {
        console.error("Erro ao buscar país:", error);
    }

    return "Unknown";
}

export default getCountry