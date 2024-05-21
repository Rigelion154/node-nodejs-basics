const PREFIX = 'RSS_'
const parseEnv = () => {
    const result = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith(PREFIX)) {
            const formattedValue = `${key}=${value}`
            return [...acc, formattedValue]
        }
        return acc;
    }, [])

    console.log(result.join('; '))
};

parseEnv();