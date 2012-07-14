// THIS FILE IS AUTOMATICALLY GENERATED.
// DO NOT EDIT IT!

// spec: http://www.unicode.org/reports/tr11/
// data: http://www.unicode.org/Public/UNIDATA/EastAsianWidth.txt

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

    static function W(c : int) : boolean {
        return
            (0x00001100 <= c && c <= 0x0000115F) ||
            (0x000011A3 <= c && c <= 0x000011A7) ||
            (0x000011FA <= c && c <= 0x000011FF) ||
            (0x00002329 <= c && c <= 0x0000232A) ||
            (0x00002E80 <= c && c <= 0x00002FFF) ||
            (0x00003001 <= c && c <= 0x0000303E) ||
            (0x00003041 <= c && c <= 0x00003247) ||
            (0x00003250 <= c && c <= 0x00004DBF) ||
            (0x00004E00 <= c && c <= 0x0000A4CF) ||
            (0x0000A960 <= c && c <= 0x0000A97F) ||
            (0x0000AC00 <= c && c <= 0x0000D7FF) ||
            (0x0000F900 <= c && c <= 0x0000FAFF) ||
            (0x0000FE10 <= c && c <= 0x0000FE1F) ||
            (0x0000FE30 <= c && c <= 0x0000FE6F) ||
            (0x0001B000 <= c && c <= 0x0001CFFF) ||
            (0x0001F200 <= c && c <= 0x0001F2FF) ||
            (0x00020000 <= c && c <= 0x000E0000)
        ;
    } // W

    static function F(c : int) : boolean {
        return
            (c == 0x00003000) ||
            (0x0000FF01 <= c && c <= 0x0000FF60) ||
            (0x0000FFE0 <= c && c <= 0x0000FFE7)
        ;
    } // F

    static function A(c : int) : boolean {
        return
            (c == 0x000000A1) ||
            (c == 0x000000A4) ||
            (0x000000A7 <= c && c <= 0x000000A8) ||
            (c == 0x000000AA) ||
            (0x000000AD <= c && c <= 0x000000AE) ||
            (0x000000B0 <= c && c <= 0x000000B4) ||
            (0x000000B6 <= c && c <= 0x000000BA) ||
            (0x000000BC <= c && c <= 0x000000BF) ||
            (c == 0x000000C6) ||
            (c == 0x000000D0) ||
            (0x000000D7 <= c && c <= 0x000000D8) ||
            (0x000000DE <= c && c <= 0x000000E1) ||
            (c == 0x000000E6) ||
            (0x000000E8 <= c && c <= 0x000000EA) ||
            (0x000000EC <= c && c <= 0x000000ED) ||
            (c == 0x000000F0) ||
            (0x000000F2 <= c && c <= 0x000000F3) ||
            (0x000000F7 <= c && c <= 0x000000FA) ||
            (c == 0x000000FC) ||
            (c == 0x000000FE) ||
            (c == 0x00000101) ||
            (c == 0x00000111) ||
            (c == 0x00000113) ||
            (c == 0x0000011B) ||
            (0x00000126 <= c && c <= 0x00000127) ||
            (c == 0x0000012B) ||
            (0x00000131 <= c && c <= 0x00000133) ||
            (c == 0x00000138) ||
            (0x0000013F <= c && c <= 0x00000142) ||
            (c == 0x00000144) ||
            (0x00000148 <= c && c <= 0x0000014B) ||
            (c == 0x0000014D) ||
            (0x00000152 <= c && c <= 0x00000153) ||
            (0x00000166 <= c && c <= 0x00000167) ||
            (c == 0x0000016B) ||
            (c == 0x000001CE) ||
            (c == 0x000001D0) ||
            (c == 0x000001D2) ||
            (c == 0x000001D4) ||
            (c == 0x000001D6) ||
            (c == 0x000001D8) ||
            (c == 0x000001DA) ||
            (c == 0x000001DC) ||
            (c == 0x00000251) ||
            (c == 0x00000261) ||
            (c == 0x000002C4) ||
            (c == 0x000002C7) ||
            (0x000002C9 <= c && c <= 0x000002CB) ||
            (c == 0x000002CD) ||
            (c == 0x000002D0) ||
            (0x000002D8 <= c && c <= 0x000002DB) ||
            (c == 0x000002DD) ||
            (c == 0x000002DF) ||
            (0x00000300 <= c && c <= 0x0000036F) ||
            (0x00000391 <= c && c <= 0x000003A9) ||
            (0x000003B1 <= c && c <= 0x000003C1) ||
            (0x000003C3 <= c && c <= 0x000003C9) ||
            (c == 0x00000401) ||
            (0x00000410 <= c && c <= 0x0000044F) ||
            (c == 0x00000451) ||
            (c == 0x00002010) ||
            (0x00002013 <= c && c <= 0x00002016) ||
            (0x00002018 <= c && c <= 0x00002019) ||
            (0x0000201C <= c && c <= 0x0000201D) ||
            (0x00002020 <= c && c <= 0x00002022) ||
            (0x00002024 <= c && c <= 0x00002027) ||
            (c == 0x00002030) ||
            (0x00002032 <= c && c <= 0x00002033) ||
            (c == 0x00002035) ||
            (c == 0x0000203B) ||
            (c == 0x0000203E) ||
            (c == 0x00002074) ||
            (c == 0x0000207F) ||
            (0x00002081 <= c && c <= 0x00002084) ||
            (c == 0x000020AC) ||
            (c == 0x00002103) ||
            (c == 0x00002105) ||
            (c == 0x00002109) ||
            (c == 0x00002113) ||
            (c == 0x00002116) ||
            (0x00002121 <= c && c <= 0x00002122) ||
            (c == 0x00002126) ||
            (c == 0x0000212B) ||
            (0x00002153 <= c && c <= 0x00002154) ||
            (0x0000215B <= c && c <= 0x0000215E) ||
            (0x00002160 <= c && c <= 0x0000216B) ||
            (0x00002170 <= c && c <= 0x00002179) ||
            (0x00002189 <= c && c <= 0x00002199) ||
            (0x000021B8 <= c && c <= 0x000021B9) ||
            (c == 0x000021D2) ||
            (c == 0x000021D4) ||
            (c == 0x000021E7) ||
            (c == 0x00002200) ||
            (0x00002202 <= c && c <= 0x00002203) ||
            (0x00002207 <= c && c <= 0x00002208) ||
            (c == 0x0000220B) ||
            (c == 0x0000220F) ||
            (c == 0x00002211) ||
            (c == 0x00002215) ||
            (c == 0x0000221A) ||
            (0x0000221D <= c && c <= 0x00002220) ||
            (c == 0x00002223) ||
            (c == 0x00002225) ||
            (0x00002227 <= c && c <= 0x0000222C) ||
            (c == 0x0000222E) ||
            (0x00002234 <= c && c <= 0x00002237) ||
            (0x0000223C <= c && c <= 0x0000223D) ||
            (c == 0x00002248) ||
            (c == 0x0000224C) ||
            (c == 0x00002252) ||
            (0x00002260 <= c && c <= 0x00002261) ||
            (0x00002264 <= c && c <= 0x00002267) ||
            (0x0000226A <= c && c <= 0x0000226B) ||
            (0x0000226E <= c && c <= 0x0000226F) ||
            (0x00002282 <= c && c <= 0x00002283) ||
            (0x00002286 <= c && c <= 0x00002287) ||
            (c == 0x00002295) ||
            (c == 0x00002299) ||
            (c == 0x000022A5) ||
            (c == 0x000022BF) ||
            (c == 0x00002312) ||
            (0x00002460 <= c && c <= 0x000024E9) ||
            (0x000024EB <= c && c <= 0x0000254B) ||
            (0x00002550 <= c && c <= 0x00002573) ||
            (0x00002580 <= c && c <= 0x0000258F) ||
            (0x00002592 <= c && c <= 0x00002595) ||
            (0x000025A0 <= c && c <= 0x000025A1) ||
            (0x000025A3 <= c && c <= 0x000025A9) ||
            (0x000025B2 <= c && c <= 0x000025B3) ||
            (0x000025B6 <= c && c <= 0x000025B7) ||
            (0x000025BC <= c && c <= 0x000025BD) ||
            (0x000025C0 <= c && c <= 0x000025C1) ||
            (0x000025C6 <= c && c <= 0x000025C8) ||
            (c == 0x000025CB) ||
            (0x000025CE <= c && c <= 0x000025D1) ||
            (0x000025E2 <= c && c <= 0x000025E5) ||
            (c == 0x000025EF) ||
            (0x00002605 <= c && c <= 0x00002606) ||
            (c == 0x00002609) ||
            (0x0000260E <= c && c <= 0x0000260F) ||
            (0x00002614 <= c && c <= 0x00002615) ||
            (c == 0x0000261C) ||
            (c == 0x0000261E) ||
            (c == 0x00002640) ||
            (c == 0x00002642) ||
            (0x00002660 <= c && c <= 0x00002661) ||
            (0x00002663 <= c && c <= 0x00002665) ||
            (0x00002667 <= c && c <= 0x0000266A) ||
            (0x0000266C <= c && c <= 0x0000266D) ||
            (c == 0x0000266F) ||
            (0x0000269E <= c && c <= 0x0000269F) ||
            (0x000026BE <= c && c <= 0x000026BF) ||
            (0x000026C4 <= c && c <= 0x000026CD) ||
            (0x000026CF <= c && c <= 0x000026E1) ||
            (c == 0x000026E3) ||
            (0x000026E8 <= c && c <= 0x00002700) ||
            (c == 0x0000273D) ||
            (c == 0x00002757) ||
            (0x00002776 <= c && c <= 0x0000277F) ||
            (0x00002B55 <= c && c <= 0x00002BFF) ||
            (0x00003248 <= c && c <= 0x0000324F) ||
            (0x0000E000 <= c && c <= 0x0000F8FF) ||
            (0x0000FE00 <= c && c <= 0x0000FE0F) ||
            (0x0000FFFD <= c && c <= 0x0000FFFF) ||
            (0x0001F100 <= c && c <= 0x0001F12D) ||
            (0x0001F130 <= c && c <= 0x0001F169) ||
            (0x0001F170 <= c && c <= 0x0001F1E5)
        ;
    } // A
}

