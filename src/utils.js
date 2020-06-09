// return true if is valid
export const validateCPF = (value) => {
	const cpf = value.replace(/\D/g, '');
	if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
	let result = true;
	[9, 10].forEach((j) => {
		let soma = 0; let
			r;
		cpf.split(/(?=)/).splice(0, j).forEach((e, i) => {
			soma += parseInt(e) * ((j + 2) - (i + 1));
		});
		r = soma % 11;
		r = (r < 2) ? 0 : 11 - r;
		if (r !== parseInt(cpf.substring(j, j + 1))) result = false;
	});
	return result;
};

export const validateCNPJ = (cnpj) => {
	if (!cnpj || cnpj.length !== 14
    || cnpj === '00000000000000'
    || cnpj === '11111111111111'
    || cnpj === '22222222222222'
    || cnpj === '33333333333333'
    || cnpj === '44444444444444'
    || cnpj === '55555555555555'
    || cnpj === '66666666666666'
    || cnpj === '77777777777777'
    || cnpj === '88888888888888'
    || cnpj === '99999999999999') return false;
	let tamanho = cnpj.length - 2;
	let numeros = cnpj.substring(0, tamanho);
	const digitos = cnpj.substring(tamanho);
	let soma = 0;
	let pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) pos = 9;
	}
	// eslint-disable-next-line no-mixed-operators
	let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado !== digitos.charAt(0)) return false;
	tamanho += 1;
	numeros = cnpj.substring(0, tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) pos = 9;
	}
	// eslint-disable-next-line no-mixed-operators
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado !== digitos.charAt(1)) return false;
	return true;
};

export const telMask = value => value
	.replace(/\D/g, '')
	.replace(/(\d{2})(\d)/, '($1) $2');

export const cpfMask = value => value
	.replace(/\D/g, '')
	.replace(/(\d{3})(\d)/, '$1.$2')
	.replace(/(\d{3})(\d)/, '$1.$2')
	.replace(/(\d{3})(\d{1,2})/, '$1-$2')
	.replace(/(-\d{2})\d+?$/, '$1');
