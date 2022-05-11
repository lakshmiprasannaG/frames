# Regular expressions

*Syntax:*
`/regexp/`

## Regex methods
> Takes string as argument
* test
```js
/^a/.test('ant'); // returns true

/^a/.test('bat'); // returns false
```
* exec

```js
/^a/.exec('ant'); 
// returns [ 'a', index: 0, input: 'ant', groups: undefined ]

/^a/.exec('bat'); 
// returns null
```

## String methods that can take regex
> Takes regex as argument
* match
* matchAll
* replace
* replaceAll
* split

<br>

### __Character classes__

Name|Description|Equivalent regex
--|--|--
\w|matches alphanumeric characters|[a-zA-Z0-9_]
\s|matches spaces|[' ']
\d|matches digits|[0-9]

*There are few flags in regex. They are:*
  * g - global
  * i - ignore case

***For more information about Regex, visit [here](https://docs.google.com/document/d/1R-EfIjLGiMGe91FYXAul_2zyrFa8Gw3FWq1Z0hPw3pI/edit#heading=h.afldr3ggtdha)***
