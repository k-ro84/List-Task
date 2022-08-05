export interface Task{
    id:number;
    text:string;
    day:string;
    reminder:boolean;
}


/*aca se maneja la base de datos, es una interfase: 
le da info al ide del modelo de datos que estamos construyendo*/
/*luego de construirlo volvemos al mock y lo importamos todo lo anterior a export es nuevo,
sumado a una modificacion dentro de export*/