/*
    * Quando trabalharmos com objetos e passamos o valor de um atributo de um objeto para outro, estamos perante
    * a passagem por referências (ou seja, o objeto em que seu atributo recebeu valor de outro, passa a apontar para o mesmo endereço
    * de memória que o objeto que lhe deu o atributo)
    * 
    * 
    * 
    * Mas Quando estamos a trabalhar com tipos primitivos, trocando valor dse uma variável para outra e vice-vers, estamos
    * persante a passagem por valor (em que na  qual é feita uma cópia do valor e não o endereço de memória)
    * 
    * 
    * UNDEFINED = não inicializada, mas já aponta para um endereço na/da memória
    * 
    * NULL = ausência de valor e não aponta para um endereço na/da memória
    * 
    * const valor = null
    * console.log(valor.toString()) erro 
*/