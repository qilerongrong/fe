const env = {port:3100};
exports.env = () => {
    if(!env.feature){
        process.argv.slice(2).forEach((arg) => {
            let argArr = arg.split('=');
            if(argArr[0] === 'feature'){
                env.feature = argArr[1];
                console.log(`feature:${env.feature}`)
            }else if(argArr[0] === 'port'){
                env.port = argArr[1];
                console.log(`port:${env.port}`)
            }
        });
    }
    return env;
}