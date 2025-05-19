// Generated from c:/Users/Usuario/OneDrive - assertiva.biz/Escritorio/Analizador/AnalizadorFS/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,22,139,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,1,1,1,
1,1,1,1,1,3,1,45,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,53,8,2,1,2,1,2,1,2,5,2,
58,8,2,10,2,12,2,61,9,2,1,2,1,2,1,3,1,3,1,3,3,3,68,8,3,1,4,1,4,1,4,1,4,1,
4,3,4,75,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,3,8,97,8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,11,1,11,1,11,3,11,115,8,11,1,12,1,12,3,12,119,8,12,1,13,
1,13,1,14,1,14,1,14,5,14,126,8,14,10,14,12,14,129,9,14,1,14,1,14,1,15,1,
15,1,16,1,16,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,0,1,1,0,5,9,133,0,36,1,0,0,0,2,40,1,0,0,0,4,48,1,0,0,0,6,64,
1,0,0,0,8,74,1,0,0,0,10,76,1,0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,93,1,0,
0,0,18,101,1,0,0,0,20,107,1,0,0,0,22,114,1,0,0,0,24,118,1,0,0,0,26,120,1,
0,0,0,28,122,1,0,0,0,30,132,1,0,0,0,32,134,1,0,0,0,34,136,1,0,0,0,36,37,
3,2,1,0,37,38,3,4,2,0,38,39,3,28,14,0,39,1,1,0,0,0,40,41,5,1,0,0,41,44,3,
30,15,0,42,43,5,11,0,0,43,45,3,22,11,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,
1,0,0,0,46,47,5,12,0,0,47,3,1,0,0,0,48,49,5,2,0,0,49,50,3,30,15,0,50,52,
5,13,0,0,51,53,3,6,3,0,52,51,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,5,
14,0,0,55,59,5,15,0,0,56,58,3,8,4,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,
0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,16,0,0,63,5,1,0,
0,0,64,67,3,26,13,0,65,66,5,17,0,0,66,68,3,6,3,0,67,65,1,0,0,0,67,68,1,0,
0,0,68,7,1,0,0,0,69,75,3,10,5,0,70,75,3,18,9,0,71,75,3,20,10,0,72,75,3,14,
7,0,73,75,3,16,8,0,74,69,1,0,0,0,74,70,1,0,0,0,74,71,1,0,0,0,74,72,1,0,0,
0,74,73,1,0,0,0,75,9,1,0,0,0,76,77,3,26,13,0,77,78,5,11,0,0,78,79,3,12,6,
0,79,80,5,13,0,0,80,81,3,24,12,0,81,82,5,14,0,0,82,83,5,12,0,0,83,11,1,0,
0,0,84,85,7,0,0,0,85,13,1,0,0,0,86,87,3,26,13,0,87,88,5,11,0,0,88,89,3,24,
12,0,89,90,5,18,0,0,90,91,3,24,12,0,91,92,5,12,0,0,92,15,1,0,0,0,93,94,3,
30,15,0,94,96,5,13,0,0,95,97,3,6,3,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,
0,0,0,98,99,5,14,0,0,99,100,5,12,0,0,100,17,1,0,0,0,101,102,5,3,0,0,102,
103,5,13,0,0,103,104,3,22,11,0,104,105,5,14,0,0,105,106,5,12,0,0,106,19,
1,0,0,0,107,108,5,4,0,0,108,109,3,22,11,0,109,110,5,12,0,0,110,21,1,0,0,
0,111,115,3,34,17,0,112,115,3,32,16,0,113,115,3,26,13,0,114,111,1,0,0,0,
114,112,1,0,0,0,114,113,1,0,0,0,115,23,1,0,0,0,116,119,3,34,17,0,117,119,
3,26,13,0,118,116,1,0,0,0,118,117,1,0,0,0,119,25,1,0,0,0,120,121,3,30,15,
0,121,27,1,0,0,0,122,123,5,10,0,0,123,127,5,15,0,0,124,126,3,8,4,0,125,124,
1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,130,1,0,0,0,
129,127,1,0,0,0,130,131,5,16,0,0,131,29,1,0,0,0,132,133,5,19,0,0,133,31,
1,0,0,0,134,135,5,20,0,0,135,33,1,0,0,0,136,137,5,21,0,0,137,35,1,0,0,0,
9,44,52,59,67,74,96,114,118,127];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'variable'", "'funcion'", "'imprimir'", 
                            "'devolver'", "'mayusculas'", "'minusculas'", 
                            "'longitud'", "'invertir'", "'reemplazar'", 
                            "'ejecucion'", "'='", "';'", "'('", "')'", "'{'", 
                            "'}'", "','", "'+'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "EJECUCION", "IGUAL", "SEMICOLON", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COMMA", 
                             "PLUS", "ID", "NUMBER", "STRING", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "llamada_funcion", "impresion", "retorno", 
                         "valor", "cadena", "variable", "ejecucion", "nombre", 
                         "numero", "texto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.declaracion();
	        this.state = 37;
	        this.funcion();
	        this.state = 38;
	        this.ejecucion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 41;
	        this.nombre();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 42;
	            this.match(analizadorParser.IGUAL);
	            this.state = 43;
	            this.valor();
	        }

	        this.state = 46;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(analizadorParser.FUNCION);
	        this.state = 49;
	        this.nombre();
	        this.state = 50;
	        this.match(analizadorParser.LPAREN);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 51;
	            this.argumentos();
	        }

	        this.state = 54;
	        this.match(analizadorParser.RPAREN);
	        this.state = 55;
	        this.match(analizadorParser.LBRACE);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 524312) !== 0)) {
	            this.state = 56;
	            this.instrucciones();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(analizadorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.variable();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 65;
	            this.match(analizadorParser.COMMA);
	            this.state = 66;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_instrucciones);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.operacion_texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.retorno();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 72;
	            this.concatenar();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 73;
	            this.llamada_funcion();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.variable();
	        this.state = 77;
	        this.match(analizadorParser.IGUAL);
	        this.state = 78;
	        this.transformacion();
	        this.state = 79;
	        this.match(analizadorParser.LPAREN);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(analizadorParser.RPAREN);
	        this.state = 82;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.variable();
	        this.state = 87;
	        this.match(analizadorParser.IGUAL);
	        this.state = 88;
	        this.cadena();
	        this.state = 89;
	        this.match(analizadorParser.PLUS);
	        this.state = 90;
	        this.cadena();
	        this.state = 91;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	llamada_funcion() {
	    let localctx = new Llamada_funcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_llamada_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.nombre();
	        this.state = 94;
	        this.match(analizadorParser.LPAREN);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 95;
	            this.argumentos();
	        }

	        this.state = 98;
	        this.match(analizadorParser.RPAREN);
	        this.state = 99;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(analizadorParser.IMPRIMIR);
	        this.state = 102;
	        this.match(analizadorParser.LPAREN);
	        this.state = 103;
	        this.valor();
	        this.state = 104;
	        this.match(analizadorParser.RPAREN);
	        this.state = 105;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, analizadorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(analizadorParser.DEVOLVER);
	        this.state = 108;
	        this.valor();
	        this.state = 109;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, analizadorParser.RULE_valor);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.texto();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.numero();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, analizadorParser.RULE_cadena);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.texto();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, analizadorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.nombre();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, analizadorParser.RULE_ejecucion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(analizadorParser.EJECUCION);
	        this.state = 123;
	        this.match(analizadorParser.LBRACE);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 524312) !== 0)) {
	            this.state = 124;
	            this.instrucciones();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
	        this.match(analizadorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, analizadorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(analizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, analizadorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(analizadorParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, analizadorParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(analizadorParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.VARIABLE = 1;
analizadorParser.FUNCION = 2;
analizadorParser.IMPRIMIR = 3;
analizadorParser.DEVOLVER = 4;
analizadorParser.MAYUSCULAS = 5;
analizadorParser.MINUSCULAS = 6;
analizadorParser.LONGITUD = 7;
analizadorParser.INVERTIR = 8;
analizadorParser.REEMPLAZAR = 9;
analizadorParser.EJECUCION = 10;
analizadorParser.IGUAL = 11;
analizadorParser.SEMICOLON = 12;
analizadorParser.LPAREN = 13;
analizadorParser.RPAREN = 14;
analizadorParser.LBRACE = 15;
analizadorParser.RBRACE = 16;
analizadorParser.COMMA = 17;
analizadorParser.PLUS = 18;
analizadorParser.ID = 19;
analizadorParser.NUMBER = 20;
analizadorParser.STRING = 21;
analizadorParser.WS = 22;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_declaracion = 1;
analizadorParser.RULE_funcion = 2;
analizadorParser.RULE_argumentos = 3;
analizadorParser.RULE_instrucciones = 4;
analizadorParser.RULE_operacion_texto = 5;
analizadorParser.RULE_transformacion = 6;
analizadorParser.RULE_concatenar = 7;
analizadorParser.RULE_llamada_funcion = 8;
analizadorParser.RULE_impresion = 9;
analizadorParser.RULE_retorno = 10;
analizadorParser.RULE_valor = 11;
analizadorParser.RULE_cadena = 12;
analizadorParser.RULE_variable = 13;
analizadorParser.RULE_ejecucion = 14;
analizadorParser.RULE_nombre = 15;
analizadorParser.RULE_numero = 16;
analizadorParser.RULE_texto = 17;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	IGUAL() {
	    return this.getToken(analizadorParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(analizadorParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(analizadorParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(analizadorParser.RBRACE, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_argumentos;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	COMMA() {
	    return this.getToken(analizadorParser.COMMA, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instrucciones;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	llamada_funcion() {
	    return this.getTypedRuleContext(Llamada_funcionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(analizadorParser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(analizadorParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(analizadorParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(analizadorParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(analizadorParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(analizadorParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(analizadorParser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(analizadorParser.PLUS, 0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Llamada_funcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_llamada_funcion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterLlamada_funcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitLlamada_funcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitLlamada_funcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(analizadorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(analizadorParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_cadena;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_variable;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_ejecucion;
    }

	EJECUCION() {
	    return this.getToken(analizadorParser.EJECUCION, 0);
	};

	LBRACE() {
	    return this.getToken(analizadorParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(analizadorParser.RBRACE, 0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_numero;
    }

	NUMBER() {
	    return this.getToken(analizadorParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_texto;
    }

	STRING() {
	    return this.getToken(analizadorParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.DeclaracionContext = DeclaracionContext; 
analizadorParser.FuncionContext = FuncionContext; 
analizadorParser.ArgumentosContext = ArgumentosContext; 
analizadorParser.InstruccionesContext = InstruccionesContext; 
analizadorParser.Operacion_textoContext = Operacion_textoContext; 
analizadorParser.TransformacionContext = TransformacionContext; 
analizadorParser.ConcatenarContext = ConcatenarContext; 
analizadorParser.Llamada_funcionContext = Llamada_funcionContext; 
analizadorParser.ImpresionContext = ImpresionContext; 
analizadorParser.RetornoContext = RetornoContext; 
analizadorParser.ValorContext = ValorContext; 
analizadorParser.CadenaContext = CadenaContext; 
analizadorParser.VariableContext = VariableContext; 
analizadorParser.EjecucionContext = EjecucionContext; 
analizadorParser.NombreContext = NombreContext; 
analizadorParser.NumeroContext = NumeroContext; 
analizadorParser.TextoContext = TextoContext; 
