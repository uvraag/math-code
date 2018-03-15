function mcDiv( dividend, divisor ) {
	var lengthno,
		i, j, initial,
      table,
      quotientIndex, dividendIndex,
		dividendIndex, divisorLastIndex,
		decimaldividend, decimaldivisor, decimalthirdno,
		dividendpos, divisorpos,
		dividendslice, divisorslice,
		dividendhalf, divisorhalf,
		third, thirdhalf, thirdslice;
	third = [];
   quotientIndex = initial = 0;
   dividendIndex = 1;
   table = divisor;
	decimaldividend = false;
	decimaldivisor = false;
	dividendpos = divisorpos = -1;
	dividend = String( dividend );
	divisor = String( divisor );
	dividend = dividend.split( "" );
	divisor = divisor.split( "" );
	while( Number( dividend[0] )== 0 )
		dividend.shift();
	while( Number( divisor[0] )== 0 )
		divisor.shift();

	if( dividend[0] == "-"  && divisor[0] == "-" ) {
		dividend = dividend.slice( 1 );
		divisor = divisor.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( dividend, divisor );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( dividend[0] != "-" && divisor[0] == "-" ) {
		divisor = divisor.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( dividend, divisor );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	} else if ( dividend[0] == "-" && divisor[0] != "-" ) {
		dividend = dividend.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( divisor, dividend );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	}

	for( i = 0; i < dividend.length; i++ )
		if( dividend[i] == "." ){
			decimaldividend = true;
			dividendpos = i;
			break;
		}
	for( i = 0; i < divisor.length; i++ )
		if( divisor[i] == "." ){
			decimaldivisor = true;
			divisorpos = i;
			break;
		}
	if( decimaldividend == false && decimaldivisor == false ){
		lengthno = dividend.length;
		for( i = 0; i < lengthno; i++, dividendIndex++ ) {
         dividendhold = dividend.splice( initial, dividendIndex );
			if ( dividendhold >= divisor ) {
            for ( var counting = 1; dividendhold >= table; counting++ ) {
               
            }
         }
		}
		third = mcAdd.apply( null, third );
		return third;
	}
	else if( decimaldividend == true || decimaldivisor == true ){

		dividendslice = dividend.slice( dividendpos + 1 );
		divisorslice = divisor.slice( divisorpos + 1 );

		dividendhalf = dividend.slice( 0, dividendpos );
		divisorhalf = divisor.slice( 0, divisorpos );
		dividend = dividendhalf.concat( dividendslice );
		divisor = divisorhalf.concat( divisorslice );

		dividend = dividend.join( "" );
		divisor = divisor.join( "" );

		third = mcMulSection( dividend, divisor );

		third = third.split( "" );
		decimalthirdno = dividendslice.length + divisorslice.length;
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
