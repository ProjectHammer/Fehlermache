const date2 = Date.parse('2026-12-17T03:24:00');
const date1 = Date.parse('2025-12-17T03:24:00');

function dateDiffernce(){
    const dateDifference = Math.floor((date2 - date1) / (1000*60*60*24));
    console.log(dateDifference + 'Days');
}

dateDiffernce();