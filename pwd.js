module.exports = function () {
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data)=> {
        const cmd = data.toString().trim();
        
        if (cmd !== 'pwd'){
        process.stdout.write('you typed: ' + cmd);
        }
    
        else {
            const cmd = process.cwd();
            process.stdout.write(cmd);
        }
        
        process.stdout.write('\nprompt > '); 
    })
}