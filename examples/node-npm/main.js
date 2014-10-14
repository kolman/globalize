#! /usr/bin/node

var Globalize = require( "globalize" );

// Set "en" as our default locale.
Globalize.locale( "en" );

// Use Globalize to format dates.
console.log( Globalize.formatDate( new Date(), { datetime: "medium" } ) );

// Use Globalize to format numbers.
console.log( Globalize.formatNumber( 12345 ) );

// Use Globalize to format a message with plural inflection.
console.log( Globalize.formatPlural( 12345, {
	one: "{0} result",
	other: "{0} results"
}));
