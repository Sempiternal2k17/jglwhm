const URLtrim = (textData) =>{
    let queryString = window.location.search;
	let ulr = new URLSearchParams(queryString);
	let equipData = ulr.get(`${textData}`);
    return equipData;
}
export {URLtrim};