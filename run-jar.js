const { exec } = require('child_process');
function runJarWithParams(param) {
  const jarPath = 'iPayOABCryptix.jar'; // Path to your JAR file
  exec(`java -jar ${jarPath} ${param}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing JAR file: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }

    console.log(`Output: ${stdout}`);
  });
}

// Example usage: passing a parameter to the JAR file
const param = 'e 830294025257830294025259 "transaction request data"';
runJarWithParams(param);
const param1 = 'd 830294025257830294025259 "CC173B5FE33F15A940BFF4258689326E8F4580AAE8451C9C"';
runJarWithParams(param1);
