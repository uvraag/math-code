function isGt( first, second ){
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
		third = isGt( second, first );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return true;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
				if ( first[i] > second[i] ) {
					return true;
				} else if ( first[i] < second[i] ) {
					return false;
				}
			}
			return false;
		} else if( first.length > second.length ) {
			return true;
		} else if (  first.length < second.length  ) {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		firsthalf = first.slice( 0, firstpos );
		third = isGt( firsthalf, second );
		if ( isEq( firsthalf, second ) ) {
			return true;
		} else {
			return third;
		}
	} else if ( decimalfirst == false && decimalsecond == true ) {
		secondhalf = second.slice( 0, secondpos );
		third = isGt( first, secondhalf );
		if ( isEq( first, secondhalf ) ) {
			return false;
		} else {
			return third;
		}
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
/*
		firsthalf = firsthalf.join( "" );
		secondhalf = secondhalf.join( "" );
		firstslice = firstslice.join( "" );
		secondslice = secondslice.join( "" );
*/
		if ( isEq( firsthalf.join( "" ), secondhalf.join( "" ) ) ) {
			while ( firstslice.length > secondslice.length ) {
				secondslice.push( "0" );
			}
			while ( firstslice.length < secondslice.length ) {
				firstslice.push( "0" );
			}
			return isGt( firstslice.join( "" ), secondslice.join( "" ) );
		} else {
			thirdhalf = isGt( firsthalf.join( "" ), secondhalf.join( "" ) );
			return thirdhalf;
		}
/*
		if ( firstslice.length == secondslice.length ) {
			thirdslice = isGt( firstslice, secondslice );
		} else {
			thirdslice = false;
		}
		thirdhalf = isGt( firsthalf, secondhalf );
		if ( thirdhalf == thirdslice ) {
			return true;
		} else {
			return false;
		}
*/
	}
	return "Something went wrong";
}
