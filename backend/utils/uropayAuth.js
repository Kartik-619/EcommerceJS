const crypto=require('crypto');
const secret = process.env.UROPAY_SECRET;

//this has been implemented using uroPay docs
function GeturopayHeader(){
    const sha512 = crypto.createHash('sha512');
    sha512.update(secret);
	const hashedSecret = sha512.digest('hex');
	console.log(hashedSecret);

    return{
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-KEY": process.env.UROPAY_API_KEY,
        Authorization: `Bearer ${hashedSecret}`,
    };

}
module.exports=GeturopayHeader;