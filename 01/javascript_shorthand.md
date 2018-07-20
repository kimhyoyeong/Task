# Javascript - 축약

## if ~ else 문

```javascript
//long
function userName(pName) {
	if (pName) {
		console.log("true");
	} else {
		console.log("false");
	}
}
userName('lee');
```

```javascript
//short
function userName(pName) {
	pName ? console.log("true") : console.log("false");
}
userName('lee');
```



## if문

```javascript
//long
if (likeJavaScript == true)
    
var a;
if ( a != true ) {}
```

```javascript
//short
if (likeJavaScript)

var a;
if ( !a ) {}
```



## foreach문

```javascript
//long
for (var i = 0; i < allImgs.length; i++)
```

```javascript
//short
for(var i in allImgs)
```



## 비교 연산자

| Operator | Description                                                  |
| -------- | ------------------------------------------------------------ |
| ==       | 동등비교 (loose equality) 형변환 후, 비교한다.               |
| ===      | 일치비교 (strict equality) 타입까지 일치하여야 true를 반환한다. |
| !=       | 부등비교                                                     |
| !==      | 불일치비교                                                   |
| >        | 관계비교                                                     |
| <        | 관계비교                                                     |
| >=       | 관계비교                                                     |
| <=       | 관계비교                                                     |
| ?        | 삼항 연산자                                                  |

## 논리연산자

논리 연산자는 Boolean 값과 함께 사용하여 Boolean 값을 반환하는 것이 일반적이다. 사실 논리 연산자는 피연산자 중 하나를 반환한다.

| Operator | Description |
| -------- | ----------- |
| \|\|     | or          |
| &&       | and         |
| !        | not         |



## 논리연산자 - 단축평가(short-circuit evaluation)

기본 값을 부여하기 위해 파라미터의 null 또는 undefined 여부를 파악하느라 코드를 길게 작성하는것보다,
short-circuit evaluation 방법을 이용해서 한줄로 작성하는 방법이 있습니다.

```javascript
//long
function enter(pValue){
    if(pValue === null || pValue === undefined || pValue === ''){
        pValue='default value';
    }
    console.log(pValue);
}

enter("kim");//kim
enter();//default value
```

```javascript
//short
function enter(pValue){
    pValue = pValue || 'default value';
    console.log(pValue);
}

enter("kim");//kim
enter();//default value

//두가지의 변수를 비교할때, 앞에 있는 변수가 false 일경우 결과는 무조건 false 이기때문에
//뒤의 변수는 확인하지 않고 return 시키는 방법
//위의 예제에서는 pValue 값이 있을경우 pValue를 할당하지만, 없으면 'default value'를 할당함
```

논리연산자가 Boolean 값과 함께 사용되지 않을 경우, Boolean 값을 반환하지 않을 수 있다. 이는 논리 연산자가 피연산자 중 하나를 반환하기 때문이다. 논리연산자는 다음의 규칙을 따라서 단축 평가로 검사된다.

| 수식            | 결과  |
| --------------- | :---- |
| true \|\| value | true  |
| false\|\| value | value |
| true && value   | value |
| false && value  | false |

```javascript
var me = "";
var you = (me || "hyo"); //"hyo"
console.log(you);

var me = "kim";
var you = (me || "hyo"); //"kim"
console.log(you);

var me = "";
var you = (me && "hyo"); //""
console.log(you);

var me = "kim";
var you = (me && "hyo"); //"hyo"
console.log(you);
```

ex)

```javascript
function enter(pValue){
	//long
	if(pValue){
		if(!isNaN(parseInt(pValue))){
			pValue=parseInt(pValue);
		}else{
			pValue=1;
		}
	}
	
	//short
	pValue = pValue && !isNaN(parseInt(pValue)) ? parseInt(pValue) : 1 ;
	
	console.log(pValue);
}

enter("2222");
```

* isNaN - Number 형식으로 변환된 값이 NaN이면 true이고, 그렇지 않으면 false입니다.
