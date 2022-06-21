class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(value){
        this._saldo = value;
    }

    sacar(value){
        if(value > this._saldo){
            return 'Operação negada';
        }else{
            this._saldo = this._saldo - value;
        }

        return this._saldo;
    }

    depositar(value){
        this._saldo = this._saldo + value;
    
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
}

class contauniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    sacar(value){
        if(value > 500){
            return 'Operação negada';
        }else{
            this._saldo = this._saldo - value;
        }

        return this._saldo;
    }
}