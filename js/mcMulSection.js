function mcMulSection( first, second ){
	var lengthno,
		i, j,
		firstLastIndex, secondLastIndex,
		decimalfirst, decimalsecond, decimalthirdno,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf, thirdslice;
	third = [];
	decimalfirst = false;
	decimalsecond = false;
	firstpos = secondpos = -1;
	first = String( first );
	second = String( second );
	first = first.split( "" );
	second = second.split( "" );
	while( Number( first[0] )== 0 )
		first.shift();
	while( Number( second[0] )== 0 )
		second.shift();
	for( i = 0; i < first.length; i++ )
		if( first[i] == "." ){
			decimalfirst = true;
			firstpos = i;
			break;
		}
	for( i = 0; i < second.length; i++ )
		if( second[i] == "." ){
			decimalsecond = true;
			secondpos = i;
			break;
		}
	if( decimalfirst == false && decimalsecond == false ){
		lengthno = second.length;
		secondLastIndex = second.length - 1;
		first = first.join( "" );
		for( i = 0; i < lengthno; i++, secondLastIndex--){
			third[ i ] = mcMulOne( first, Number( second[ secondLastIndex ] ) );
			for( j = 0; j < i; j++ )
				third[ i ] = third[ i ].concat( "0" );
		}
		third = mcAdd.apply( null, third );
		return third;
	}
	else if( decimalfirst == true || decimalsecond == true ){

		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );

		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		first = firsthalf.concat( firstslice );
		second = secondhalf.concat( secondslice );

		first = first.join( "" );
		second = second.join( "" );

		third = mcMulSection( first, second );

		third = third.split( "" );
		decimalthirdno = firstslice.length + secondslice.length;
		third.splice( third.length - decimalthirdno, 0, ".");
		while( third[ third.length - 1 ] == 0 )
			third.pop();
		if( third[ third.length - 1 ] == "." )
			third.pop();
		third = third.join( "" );
		return third;
	}
	return "Something went wrong";
}
