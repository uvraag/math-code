function mcSubSolve( first, second ){
	var lengthno,
		i,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		third;
	third = [];
	first = String( first );
	second = String( second );
	first = first.split( "" );
	second = second.split( "" );
	while( Number( first[0] )== 0 )
		first.shift();
	while( Number( second[0] )== 0 )
		second.shift();
	firstLastIndex = first.length - 1;
	secondLastIndex = second.length - 1;
	for( i = 0, lengthno = first.length; i < lengthno; i++, firstLastIndex--, secondLastIndex--){
		firstnohold = (firstLastIndex < 0)? 0 : Number( first[ firstLastIndex ] );
		secondnohold = (secondLastIndex < 0)? 0 : Number( second[ secondLastIndex ] );
		third[i] = firstnohold - secondnohold;
	}
	third = third.reverse();
	third = third.join( "" );
	return third;
}