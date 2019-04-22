const env = {}
exports.env = () => {
    if(!env.feature){
        process.argv.slice(2).forEach((arg) => {
            const customArg = arg.match(/--env\.(\w+)=(\w+)/);
            if(customArg && customArg[0]){
                const param = customArg[1];
                const value = customArg[2];
                env[param] = value;
            }
        });
        console.log(env);
    }
    return env;
}