function isEq( first, second ){
	var lengthno,
		i,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		decimalfirst, decimalsecond,
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isEq( first, second );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return false;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return false;
	}

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
	if( decimalfirst == false && decimalsecond == false ) {
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if( first[i] != second[i] ) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	} else if( decimalfirst == true || decimalsecond == true ) {

		if( decimalfirst == false ) {
			first = first.join( "" );
			firstpos = first.length;
			first = first.concat( ".0" );
			first = first.split( "" );
		} else if( decimalsecond == false ) {
			second = second.join( "" );
			secondpos = second.length;
			second = second.concat( ".0" );
			second = second.split( "" );
		}
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );

		while ( firstslice[ firstslice.length - 1 ] == 0 ) {
			firstslice.pop();
		}
		while ( secondslice[ secondslice.length - 1 ] == 0 ) {
			secondslice.pop();
		}
		firstslice[0] = ( firstslice[0] == undefined ) ? 0 : firstslice[0];
		secondslice[0] = ( secondslice[0] == undefined ) ? 0 : secondslice[0];
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );

		firsthalf = firsthalf.join( "" );
		secondhalf = secondhalf.join( "" );
		firstslice = firstslice.join( "" );
		secondslice = secondslice.join( "" );
		if ( firstslice.length == secondslice.length ) {
			thirdslice = isEq( firstslice, secondslice );
		} else {
			thirdslice = false;
		}

		thirdhalf = isEq( firsthalf, secondhalf );

		if ( thirdhalf == thirdslice ) {
			return true;
		} else {
			return false;
		}

	}
	return "Something went wrong";
}
