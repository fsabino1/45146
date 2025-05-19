grammar analizador;

//Reglas del Parser

programa : declaracion funcion ejecucion ;

declaracion : VARIABLE nombre (IGUAL valor)? SEMICOLON ;

funcion : FUNCION nombre LPAREN (argumentos)? RPAREN LBRACE (instrucciones)* RBRACE ;

argumentos : variable (COMMA argumentos)? ;

instrucciones
    : operacion_texto
    | impresion
    | retorno
    | concatenar
    | llamada_funcion
    ;

operacion_texto : variable IGUAL transformacion LPAREN cadena RPAREN SEMICOLON ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    | REEMPLAZAR
    ;

concatenar : variable IGUAL cadena PLUS cadena SEMICOLON ;

llamada_funcion : nombre LPAREN (argumentos)? RPAREN SEMICOLON ;

impresion : IMPRIMIR LPAREN valor RPAREN SEMICOLON ;

retorno : DEVOLVER valor SEMICOLON ;

valor
    : texto
    | numero
    | variable
    ;

cadena
    : texto
    | variable
    ;

variable : nombre ;

ejecucion : EJECUCION LBRACE (instrucciones)* RBRACE ;

//Reglas del Lexer

VARIABLE : 'variable' ;
FUNCION : 'funcion' ;
IMPRIMIR : 'imprimir' ;
DEVOLVER : 'devolver' ;
MAYUSCULAS : 'mayusculas' ;
MINUSCULAS : 'minusculas' ;
LONGITUD : 'longitud' ;
INVERTIR : 'invertir' ;
REEMPLAZAR : 'reemplazar' ;
EJECUCION : 'ejecucion' ; 

IGUAL : '=' ;
SEMICOLON : ';' ;
LPAREN : '(' ;
RPAREN : ')' ;
LBRACE : '{' ;
RBRACE : '}' ;
COMMA : ',' ;
PLUS : '+' ;

nombre : ID ;
numero : NUMBER ;
texto : STRING ;

ID : [a-zA-Z_] [a-zA-Z0-9_]* ;
NUMBER : [0-9]+ ;
STRING : '"' .*? '"' ;

WS : [ \t\r\n]+ -> skip ;