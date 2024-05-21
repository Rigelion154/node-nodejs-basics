const PREFIX = '--'
const parseArgs = () => {
    const formattedArgs = process.argv.reduce((acc, value, index, array) => {
        if(value.startsWith(PREFIX)) {
            const formattedValue = `${value.replace(PREFIX, '')} is ${array[index + 1]}`
            return [...acc, formattedValue]
        }
        return acc;
    }, [])

    console.log(formattedArgs.join(', '));
};

parseArgs();