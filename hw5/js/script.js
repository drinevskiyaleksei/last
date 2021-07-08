//number 1 
function chisla(a,b,c){
    return (a-b)/c;
}
let d=chisla(10,4,3);
console.log(d);
//number 2
function kub(e){
    return e**3;
}
let f=kub(10);
console.log(f);
function kvadrat(g){
    return g**2;
}
let j=kvadrat(10);
//number 3
function min(h,i){
    if(h<i){
        return h;
    }else{
        return i;
    }
}
let resMin = min(15,90);
console.log(resMin);
function max(k,l){
    if(k>l){
        return k;
    }else{
        return l;
    }
}
let resMax = max(19,32);
console.log(resMax);
//number 4
let m=[],
    n;
function vvodM(m){
    for(;;){
        n=+prompt('Enter number');
        if(n==""){
            break;
        }
        if(!isNaN(n)){
            m.push(n);
        }
    }return vvodM;
}
console.log(vvodM(m));
//number 5
function isEven(o){
    if (o%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(53));
//number 6
function evenM(m){
    let newM = [];
    for(let s=0;s<m.length;s++){
        if(isEven(m[s])==true){
        newM.push(m[s]);
    }
    }
    return newM;
}
let ar=evenM([3,52,6,99,34,75]);
console.log(ar);
//number 7
function pyramid(p){
    for(let s=1;s<=p;s++){
        for(let t=1;t<=p-s;t++){

        }
        for(let u=0;u<s;u++){
            document.write(`${s}`);
        }document.write('<br>');
    }
}
pyramid(8);
//number 8
let v=9;
for(let s=1;s<=v;s++){
    for(let w=1;w<=v-s;w++){
        document.write(`&ensp;`);
    }
    for(let u=0;u,s*2-1;u++){
        document.write('*');
    }document.write('<br>');
}
let vv=9;
for(let s=vv;s>=1;s--){
    for(let w=vv-s;w>=1;w--){
        document.write(`&ensp;`);
    }
    for(let u=0;u,s*2-1;u++){
        document.write('*');
    }document.write('<br>');
}
//number 9
function fibonachi(numbers){
    let arrFibonachi=[0,1];
    for(let s=0;s<=numbers;s++){
        if(s===arrFibonachi[arrFibonachi.length-1]+arrFibonachi[arrFibonachi.length-2]){
            arrFibonachi.push(s);
        }
    }
    return arrFibonachi;
}
document.write('Fibo:'+fibonachi(900),'<br>');