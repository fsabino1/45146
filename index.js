// Importar las clases y funciones necesarias
import antlr4, { CharStreams, CommonTokenStream, Token } from 'antlr4';
import analizadorLexer from './generated/analizadorLexer.js';
import analizadorParser from './generated/analizadorParser.js';
import fs from 'fs';
import AnalizadorVisitor from './analizadorVisitor.js';

// Función para realizar el análisis
function analyzeFile(filePath) {
    console.log(`\n--- Analizando archivo: ${filePath} ---`);

    //Bandera para saber si se encontraron errores de sintaxis
    let syntaxErrorsFound = false;

    const errorListener = {
        syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
            console.error(`ERROR Sintáctico: Línea ${line}, Columna ${column} - ${msg}`);
            syntaxErrorsFound = true; // Activar la bandera si se detecta un error
        }
    };

    try {
        // Leer el archivo fuente
        const input = fs.readFileSync(filePath, 'utf8');

        //Generar la tabla de lexemas-tokens
        console.log("\n--- Tabla de Lexemas - Tokens ---");
        console.log("LEXEMA\t\t\tTOKEN\t\t\tLÍNEA\tCOLUMNA");
        console.log("-------\t\t\t-----\t\t\t-----\t-------");

        // Crear un *primer* lexer directamente del flujo de caracteres para generar la tabla
        const charsForTable = CharStreams.fromString(input);
        const lexerForTable = new analizadorLexer(charsForTable);

        // Iterar sobre los tokens usando nextToken() en el lexer para la tabla
        let tokenForTable = lexerForTable.nextToken();
        while (tokenForTable.type !== Token.EOF) {
            const lexema = tokenForTable.text;
            const tipoToken = analizadorLexer.symbolicNames[tokenForTable.type] ||
                              analizadorLexer.literalNames[tokenForTable.type] ||
                              `TokenType(${tokenForTable.type})`;
            const linea = tokenForTable.line;
            const columna = tokenForTable.column;
            console.log(`'${lexema}'\t\t\t${tipoToken}\t\t\t${linea}\t${columna}`);
            tokenForTable = lexerForTable.nextToken();
        }
         // Imprimir explícitamente el token EOF al final de la tabla
         console.log(`'<EOF>'\t\t\tEOF\t\t\t${tokenForTable.line}\t${tokenForTable.column}`);

        const charsForParser = CharStreams.fromString(input);

        const lexerForParser = new analizadorLexer(charsForParser);

        const tokensForParser = new CommonTokenStream(lexerForParser);

        const parser = new analizadorParser(tokensForParser);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const tree = parser.programa();

        //Resultado del análisis sintáctico
        if (syntaxErrorsFound) {
            console.log("\nAnálisis sintáctico completado: Se encontraron errores.");
        } else {
            console.log("\nAnálisis sintáctico completado: La entrada es válida.");

            console.log(`\n--- Árbol de derivación ---`);
            console.log(tree.toStringTree(parser.ruleNames));

            console.log("\n--- Interpretación (Traducción a JavaScript) ---");

            // Crear una instancia de Visitor
            const visitor = new AnalizadorVisitor();
            // Iniciar el recorrido del árbol llamando a visit en la raíz (tree)
            visitor.visit(tree);

            const generatedJS = visitor.jsCode;

            console.log("\nCódigo JavaScript Generado:");
            console.log(generatedJS);

            console.log("\n--- Ejecución del Código JavaScript Generado ---");
            try {
                eval(generatedJS);
            } catch (execError) {
                console.error("Error durante la ejecución del código JavaScript generado:", execError);
            }
        }

    } catch (error) {
        console.error(`Error durante el análisis del archivo ${filePath}:`, error);
    }
}

//Ejecutar para los casos de prueba
analyzeFile('./casos/valido.txt');
analyzeFile('./casos/valido2.txt');
analyzeFile('./casos/invalido.txt');
analyzeFile('./casos/invalido2.txt');