// Get all script elements
const scripts = document.getElementsByTagName("script");

// Loop through each script element
for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    const scriptLines = script.innerHTML.split('\n').slice(0, 3).join('\n\t'); // Get the first 3 lines of the script
    const enc = new TextEncoder();
    const data = enc.encode(script.innerHTML); // Encode script content
    crypto.subtle.digest('SHA-256', data).then(function(val){
        const digest = ["sha256", _arrayBufferToBase64(val)].join('-');
        console.log(`Script Hash for:`, script, `\nCode snippet:\n\t${scriptLines}\n\nThe SHA-256 for this script is: ${digest}\n`);
    });
}

// Get all style elements
const styles = document.getElementsByTagName("style");

// Loop through each style element
for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    const styleLines = style.innerHTML.split('\n').slice(0, 3).join('\n\t'); // Get the first 3 lines of the style
    const enc = new TextEncoder();
    const data = enc.encode(style.innerHTML); // Encode style content
    crypto.subtle.digest('SHA-256', data).then(function(val){
        const digest = ["sha256", _arrayBufferToBase64(val)].join('-');
        console.log(`Style Hash for:`, style, `\nCode snippet:\n\t${styleLines}\n\nThe SHA-256 for this style is: ${digest}\n`);
    });
}

function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}
