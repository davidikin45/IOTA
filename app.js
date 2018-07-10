const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' })
const seed = "FZAGCCDYNWJNWALIDYKQZYACSDVFNSSJRDTPJBWWKGSJMXLOHODDWQYAUI9WPHTIFRXOMLEHWCIPBJOFI";
const sendToAddress = "SLHXBZHPWWOUPILXJFQWRSCZEWQLRMFDVEZHYVKIUYZIXKYPNCFUQHVHALURQRKXOXOUVDVUEGEQJWBPBIXPDUNMEC";

const transfers = 
[
    {
        value: 0,
        address: sendToAddress,
        message: "HELLOWORLD",
        tag: "IOTAFUNDAMENTALS"
    }
]

iota.api.sendTransfer(seed, 3, 9, transfers, (error, success) => 
{
    if (error) 
    {
        console.log(error)
    } else 
    {
        console.log(success);
    }
});
