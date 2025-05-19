//Importar las clases necesarias
import antlr4 from 'antlr4';
import analizadorVisitor from './generated/analizadorVisitor.js';
import analizadorParser from './generated/analizadorParser.js';

export default class AnalizadorVisitor extends analizadorVisitor {

    constructor() {
        super();
        this.jsCode = '';
        this.symbolTable = {}; //Tabla de símbolos
    }

    visitPrograma(ctx) {
        if (ctx.declaracion()) {
            this.visit(ctx.declaracion());
        }
        if (ctx.funcion()) {
            this.visit(ctx.funcion());
        }
        if (ctx.ejecucion()) {
             this.jsCode += '// Código de ejecución:\n';
            this.visit(ctx.ejecucion());
        }
    }

    visitDeclaracion(ctx) {
        const nombreVariable = ctx.nombre().getText();

        const valorContext = ctx.valor();

        if (valorContext) {
            const valorJS = this.visit(valorContext);
            this.jsCode += `let ${nombreVariable} = ${valorJS};\n`;
        } else {
            this.jsCode += `let ${nombreVariable};\n`;
        }
    }

    visitFuncion(ctx) {
        const nombreFuncion = ctx.nombre().getText();

        let argumentosContext = null;
        let argumentosJS = '';

        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            if (child instanceof antlr4.ParserRuleContext && child.ruleIndex === analizadorParser.RULE_arguments) {
                 argumentosContext = child;
                 break;
            }
        }

        if (argumentosContext) {

            argumentosJS = this.visit(argumentosContext);
        }

        this.jsCode += `function ${nombreFuncion}(${argumentosJS}) {\n`;

         for (let i = 0; i < ctx.getChildCount(); i++) {
              const child = ctx.getChild(i);
              if (child instanceof antlr4.ParserRuleContext && child.ruleIndex === analizadorParser.RULE_instrucciones) {
                   const instruccionJS = this.visit(child);
                   this.jsCode += `  ${instruccionJS}\n`;
               }
         }

        this.jsCode += `}\n`;
    }

    visitArguments(ctx) {
        const variableContext = ctx.variable();
        let argsString = this.visit(variableContext);

        const remainingArgsContext = ctx.arguments();

        if (remainingArgsContext) {
            argsString += ', ' + this.visit(remainingArgsContext);
        }

        return argsString;
    }

    visitInstrucciones(ctx) {
         return this.visit(ctx.getChild(0));
    }

    visitOperacion_texto(ctx) {
        const variableDestino = this.visit(ctx.variable());
        const transformacion = ctx.transformacion().getText();
        const cadenaJS = this.visit(ctx.cadena());

        let resultadoJS = '';
        switch(transformacion) {
            case 'mayusculas':
                resultadoJS = `${cadenaJS}.toUpperCase()`;
                break;
            case 'minusculas':
                resultadoJS = `${cadenaJS}.toLowerCase()`;
                break;
            case 'longitud':
                resultadoJS = `${cadenaJS}.length`;
                break;
            case 'invertir':
                resultadoJS = `${cadenaJS}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                 resultadoJS = `${cadenaJS}.replace('//buscar//', '//reemplazar//')`;
                break;
            default:
                console.error(`[Visitor ERROR] Transformación de texto desconocida: ${transformacion}`);
                resultadoJS = `// ERROR: Transformación desconocida ${transformacion}`;
        }

        return `${variableDestino} = ${resultadoJS};`;
    }

    visitConcatenar(ctx) {
        const variableDestino = this.visit(ctx.variable());
        const cadena1JS = this.visit(ctx.cadena(0));
        const cadena2JS = this.visit(ctx.cadena(1));
        return `${variableDestino} = ${cadena1JS} + ${cadena2JS};`;
    }

    visitLlamada_funcion(ctx) {
        const nombreFuncion = ctx.nombre().getText();

        let argumentosContext = null;

         for (let i = 0; i < ctx.getChildCount(); i++) {
              const child = ctx.getChild(i);
              if (child instanceof antlr4.ParserRuleContext && child.ruleIndex === analizadorParser.RULE_arguments) {
                  argumentosContext = child;
                  break;
              }
         }

        let argumentosJS = '';
        if (argumentosContext) {
             argumentosJS = this.visit(argumentosContext);
        }

        return `${nombreFuncion}(${argumentosJS});`;
    }

    visitImpresion(ctx) {
        const valorJS = this.visit(ctx.valor());
        return `console.log(${valorJS});`;
    }

    visitRetorno(ctx) {
        const valorJS = this.visit(ctx.valor());
        return `return ${valorJS};`;
    }

    visitValor(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitCadena(ctx) {
        return this.visit(ctx.getChild(0));
    }

    visitTexto(ctx) {
        return ctx.STRING().getText();
    }

    visitNumero(ctx) {
        return ctx.NUMBER().getText();
    }

    visitVariable(ctx) {
        return ctx.nombre().getText();
    }

    visitNombre(ctx) {
        return ctx.ID().getText();
    }

    visitEjecucion(ctx) {
         for (let i = 0; i < ctx.getChildCount(); i++) {
              const child = ctx.getChild(i);
              if (child instanceof antlr4.ParserRuleContext && child.ruleIndex === analizadorParser.RULE_instrucciones) {
                 const instruccionJS = this.visit(child);
                 this.jsCode += `${instruccionJS}\n`;
              }
        }

    }

}