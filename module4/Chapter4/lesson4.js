
function convertStringToBuff(str) {

    return Buffer.from(str);

}

let result = convertStringToBuff('Hello World');

console.log(result);
console.log(result.toString());
console.log(result.toJSON());

function extractFromURL(str) {

    const url = new URL(str);

    return {
        hostname: url.hostname,
        pathname: url.pathname,
        searchParams: url.searchParams
    }

}

console.log(extractFromURL('https://www.w3schools.com/nodejs/met_buffer_tostring.asp'));

console.log(extractFromURL('https://www.google.com/search?q=test&sca_esv=c4e7bb82b2dd4a21&sca_upv=1&source=hp&ei=ZAeyZrqMJ_PR1e8PtY6J-A8&iflsig=AL9hbdgAAAAAZrIVdGfyzX_ML6sI44c4VBYa_nMfuLB1&ved=0ahUKEwi6zr2KoOCHAxXzaPUHHTVHAv8Q4dUDCBA&uact=5&oq=test&gs_lp=Egdnd3Mtd2l6IgR0ZXN0MgsQABiABBixAxiDATIREC4YgAQYsQMY0QMYgwEYxwEyCxAAGIAEGLEDGIMBMg4QLhiABBixAxjRAxjHATIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIIEAAYgAQYsQMyBRAAGIAEMgsQABiABBixAxiDAUiwBFAdWO8DcAF4AJABAJgBf6AB1wKqAQMwLjO4AQPIAQD4AQGYAgSgAvICqAIKwgIQEAAYAxjlAhjqAhiMAxiPAcICEBAuGAMY5QIY6gIYjAMYjwHCAgUQLhiABMICDhAAGIAEGLEDGIMBGIoFmAMLkgcDMS4zoAf1Fw&sclient=gws-wiz'));
