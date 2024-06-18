// == is "loose equality" in javascript whilst "===" is "strict equality"
// the difference is that loose equality does type coercion before comparing
// some interesting results that are truthy under loose but not strict include
// 0 == false // true
// null == undefined //true
// for much, much more of these shenanigans: 
// https://www.youtube.com/watch?v=et8xNAc2ic8 at dotconferences by Brian Leroux


// first attempt
function evenOrOdd(number) {
    return number%2 ===0 ? "Even" : "Odd"
}

// Notes on other upvoted answers
// you have to give this one by user274279 some credit! :)
/*

----------------------//\\
---------------------// ¤ \\
---------------------\\ ¤ //
---------------------- \\//
-------------------- (___)
---------------------(___)
---------------------(___)
---------------------(___)_________
--------\_____/\__/----\__/\_____/
------------\ _°_[------------]_ _° /
----------------\_°_¤ ---- ¤_°_/
--------------------\ ° /
---------------------|\_°_/|
---------------------[|\_/|]
---------------------[|[¤]|]
---------------------[|;¤;|]
---------------------[;;¤;;]
--------------------;;;;¤]|]\
-------------------;;;;;¤]|]-\
------------------;;;;;[¤]|]--\
-----------------;;;;;|[¤]|]---\
----------------;;;;;[|[¤]|]|---|
---------------;;;;;[|[¤]|]|---|
----------------;;;;[|[¤]|/---/
-----------------;;;[|[¤]/---/
------------------;;[|[¤/---/
-------------------;[|[/---/
--------------------[|/---/
---------------------/---/
--------------------/---/|]
-------------------/---/]|];
------------------/---/¤]|];;
-----------------|---|[¤]|];;;
-----------------|---|[¤]|];;;
------------------\--|[¤]|];;
-------------------\-|[¤]|];
---------------------\|[¤]|]
----------------------\\¤//
-----------------------\|/
------------------------V

*/