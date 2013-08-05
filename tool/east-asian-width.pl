#!/usr/bin/env perl
use 5.14.0;
use strict;
use warnings;
use LWP::Simple qw(get);
use Text::Xslate;
use Log::Minimal qw(infof);

my $SPEC = "http://www.unicode.org/reports/tr11/";
my $DATA = "http://www.unicode.org/Public/UNIDATA/EastAsianWidth.txt";

my %params = (
    spec_uri => $SPEC,
    data_uri => $DATA,

    F  => [],
    W  => [],
    H  => [],
    N  => [],
    Na => [],
    A  => [],
);

infof 'get data from %s', $DATA;
my $data = get($DATA);

my($version) = $data =~ /EastAsianWidth-([\d\.]+)\.txt/;
$params{version} = $version;

infof 'parse character tratis';
my @traits;
for my $line(split /\n/, $data) {
    $line =~ s/\#.*//;
    if ($line =~ m{ (?<code_first> \w+) \.\.(?<code_last> \w+) ; (?<trait> \w+) }xms) {
        for my $code(hex($+{code_first}) .. hex($+{code_last})) {
            $traits[$code] = $+{trait};
        }
    }
    elsif ($line =~ m{ (?<code> \w+) ; (?<trait> \w+) }xms) {
        $traits[hex $+{code}] = $+{trait};
    }
}
infof 'make ranges from traits';

my $c    = 0;
my $trait = "";
my $first = -1;
foreach my $t(@traits) {
    next unless $t;

    if ($t ne $trait) {
        if ($trait ne "" && $first != -1) {
            push $params{$trait}, [ $first, $c - 1 ];
        }

        $first = $c;
        $trait = $t;
    }
}
continue {
    ++$c;
}

infof 'render it';

my $xslate = Text::Xslate->new(
    type  => "text",
    cache => 0,
    module => ['Text::Xslate::Bridge::Star'],
);

print $xslate->render_string(do {
        local $/;
        <DATA>;
    }, \%params);

__DATA__
// THIS FILE IS AUTOMATICALLY GENERATED.
// DO NOT EDIT IT!

/***
 * Unicode version <: $version :> of EastAsianWidth characters
 *
 * @see  <: $spec_uri :> for specification
 * @see  <: $data_uri :> for data
 */

class EastAsianWidth {
    static function isFullWidth(c : int) : boolean {
        return EastAsianWidth.isFullWidth(c, true);
    }

    static function isFullWidth(c : int, inEastAsian : boolean) : boolean {
        if (   EastAsianWidth.W(c)
            || EastAsianWidth.F(c) ) {
            return true;
        }

        return inEastAsian && EastAsianWidth.A(c);
    }

    // character traits

<:-
macro range -> $r {
    if $r[0] == $r[1] {
        sprintf("(c == 0x%08X)", $r[0]);
    }
    else {
        sprintf("(0x%08X <= c && c <= 0x%08X)", $r[0], $r[1]);
    }
}
-:>
: macro make_conditions -> $t, $name {
    static function <: $name :>(c : int) : boolean {
        return
        : for $t -> $range {
            <: range($range) ~ ($~range.is_last ? "" : " ||") :>
        : }
        ;
    } // <: $name :>
: }

    : make_conditions($W, "W");

    : make_conditions($F, "F");

    : make_conditions($A, "A");
}


