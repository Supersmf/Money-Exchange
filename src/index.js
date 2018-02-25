// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if(currency < 0) return {};
	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let res = {}
	let H = Math.floor(currency/50);
	let Q = Math.floor((currency - 50*H) / 25);
	let D = Math.floor(((currency - 50*H) - 25*Q) / 10);
	let N = Math.floor((((currency - 50*H) - 25*Q) - 10*D) / 5);
	let P = Math.floor(((((currency - 50*H) - 25*Q) - 10*D) - 5*N));

	if(H) res.H = H;
	if(Q) res.Q = Q;
	if(D) res.D = D;
	if(N) res.N = N;
	if(P) res.P = P;

	return res;
}

/*function makeExchange(currency) {
	let res = {}
	let H = Math.floor(currency/50);
	let Q = Math.floor((currency - 50*H) / 25);
	let D = Math.floor(((currency - 50*H) - 25*Q) / 10);
	let N = Math.floor((((currency - 50*H) - 25*Q) - 10*D) / 5);
	let P = Math.floor(((((currency - 50*H) - 25*Q) - 10*N) - 5*N));

	if(H) res.H = H;
	if(Q) res.Q = Q;
	if(D) res.D = D;
	if(N) res.N = N;
	if(P) res.P = P;

	return res;
}

console.log(makeExchange(43)) //--> {"Q":1,"D":1,"N":1,"P":3}

makeExchange(91) //--> {"H":1,"Q":1,"D":1,"N":1,"P":1}*/